import { useState } from 'react';

export const useHandleCopyActive = () => {
  const [copiedText, setCopiedText] = useState<string>('');
  const unsecuredCopyToClipboard = (copyText: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      return null;
    }
    document.body.removeChild(textArea);
  };

  async function handleCopy(copyText: string, copyField: string) {
    setCopiedText(copyField);

    const timeout = setTimeout(() => {
      setCopiedText('');
    }, 500);
    if (window.isSecureContext && navigator.clipboard) {
      await navigator.clipboard.writeText(copyText);

      return () => clearTimeout(timeout);
    } else {
      unsecuredCopyToClipboard(copyText);
      return () => clearTimeout(timeout);
    }
  }
  return { copiedText, handleCopy };
};
