import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import fs, { readFileSync } from "fs";
import matter from "gray-matter";

export function cn(...inputs: any) {
  return twMerge(clsx(inputs))
}

