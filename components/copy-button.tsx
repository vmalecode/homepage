'use client';

import { Button } from "@/components/ui/button";
import { IconCopy } from "@tabler/icons-react"
import { IconCheck } from '@tabler/icons-react';
import { cn } from "@/lib/utils"
import { useState } from "react"
interface DownloadContactButtonProps {
  copyText: string;
  className?: string;
}

export default function CopyButton({ className, copyText }: DownloadContactButtonProps) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    } catch (err) {
      console.error('Failed to copy string')
    }
  }

  // <IconCopy data-icon="inline-start" /> { copyText }
  return (
    <div className={cn(className)}>
      <Button className={cn(className)} variant="outline" onClick={handleCopy}>
        {copyText}
        {copied ? (
          <IconCheck className="h-4 w-4 text-green-600" />
        ) : (
          <IconCopy />
        )}
      </Button >
    </div>
  );
}
