FROM node:lts-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=secret,id=GREETING_TOKEN \
    --mount=type=secret,id=PHONE_SECRET \
    --mount=type=secret,id=EMAIL_SECRET \
    export GREETING_TOKEN="$(cat /run/secrets/GREETING_TOKEN)" && \
    export PHONE_SECRET="$(cat /run/secrets/PHONE_SECRET)" && \
    export EMAIL_SECRET="$(cat /run/secrets/EMAIL_SECRET)" && \
    corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
