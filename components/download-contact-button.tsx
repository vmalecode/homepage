'use client';

import { useState } from "react"
import VCard from 'vcard-creator';
import { Button } from "@/components/ui/button";
import { IconAddressBook } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { IconCheck } from '@tabler/icons-react';

interface DownloadContactButtonProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  className?: string;
}

export default function DownloadContactButton({ className, firstName, lastName, email, phone }: DownloadContactButtonProps) {
  const [downloaded, setDownloaded] = useState(false)
  const handleDownload = () => {
    const myCard = new VCard();

    myCard
      .addName({ givenName: firstName, familyName: lastName })
      .addPhoneNumber({ number: phone, type: ['pref'] })
      .addEmail({ address: email })
    const vCardString = myCard.toString();
    const blob = new Blob([vCardString], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeFileName = `${firstName}_${lastName}`.replace(/[^a-z0-9_-]/gi, '');
    link.setAttribute('download', `${safeFileName}.vcf`);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 1000)
  };

  return (
    <div className={cn(className)}>
      <Button className={cn(className)} variant="outline" onClick={handleDownload}>
        Save Contact
        {downloaded ? (
          <IconCheck className="h-4 w-4 text-green-600" />
        ) : (
          <IconAddressBook />
        )}
      </Button >
    </div>
  );
}
