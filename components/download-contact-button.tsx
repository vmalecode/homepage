'use client';

// vcard-creator ships with native TypeScript declarations built-in
import VCard from 'vcard-creator';
import { Button } from "@/components/ui/button";
import { IconAddressBook } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface DownloadContactButtonProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  className?: string;
}

export default function DownloadContactButton({ className, firstName, lastName, email, phone }: DownloadContactButtonProps) {
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
  };

  return (
    <div className={cn(className)}>
      <Button className={cn(className)} variant="outline" onClick={handleDownload}>
        <IconAddressBook data-icon="inline-start" /> Save Contact
      </Button >
    </div>
  );
}
