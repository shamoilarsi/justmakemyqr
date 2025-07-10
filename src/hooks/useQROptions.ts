import { useState, useCallback } from 'react';
import { QROptions } from '@/types/qr-options';

const DEFAULT_QR_OPTIONS: QROptions = {
  value: 'https://example.com',
  size: 256,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  logoImage: '',
  logoWidth: 60,
  logoHeight: 60,
  logoOpacity: 1,
  qrStyle: 'squares',
  eyeColor: '#000000',
  eyeRadius: 0,
  ecLevel: 'M',
  enableCORS: false,
  logoPadding: 0,
  logoPaddingStyle: 'square',
  quietZone: 10,
  removeQrCodeBehindLogo: false,
};

export function useQROptions() {
  const [qrOptions, setQROptions] = useState<QROptions>(DEFAULT_QR_OPTIONS);

  const handleInputChange = useCallback(
    (field: keyof QROptions, value: string | number | boolean) => {
      setQROptions((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  const handleLogoUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          handleInputChange('logoImage', result);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleInputChange]
  );

  const downloadQR = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  }, []);

  return {
    qrOptions,
    handleInputChange,
    handleLogoUpload,
    downloadQR,
  };
} 