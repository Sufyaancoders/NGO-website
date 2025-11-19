import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemoSecond() {
  return (
    <EncryptedText
      text="We Need Your Help"
      encryptedClassName="text-neutral-400"
      revealedClassName="text-black"
      revealDelayMs={50}
      flipDelayMs={50}
    />
  );
}
