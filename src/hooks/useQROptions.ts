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
  transparentBackground: false,
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
    const { transparentBackground } = qrOptions;
    
    const attemptDownload = () => {
      // Get the QR code container
      const qrContainer = document.getElementById('styled-qr-code');
      if (!qrContainer) {
        console.error('QR code container not found');
        return false;
      }
      
      // Try to find canvas element - react-qrcode-logo renders to canvas
      let qrCanvas = qrContainer.querySelector('canvas');
      
      // If not found directly, try looking for it in the component's children
      if (!qrCanvas) {
        qrCanvas = qrContainer.getElementsByTagName('canvas')[0];
      }
      
      // If still not found, try a broader search within the QR container
      if (!qrCanvas) {
        const allCanvases = document.querySelectorAll('canvas');
        for (const canvas of allCanvases) {
          const parent = canvas.closest('#styled-qr-code');
          if (parent) {
            qrCanvas = canvas;
            break;
          }
        }
      }
      
      if (qrCanvas) {
        console.log('Found QR canvas for download:', {
          width: qrCanvas.width,
          height: qrCanvas.height,
          transparent: transparentBackground
        });
        
        // Create a new canvas with the desired background
        const exportCanvas = document.createElement('canvas');
        const ctx = exportCanvas.getContext('2d');
        
        if (!ctx) {
          console.error('Could not get canvas context');
          return false;
        }
        
        exportCanvas.width = qrCanvas.width;
        exportCanvas.height = qrCanvas.height;
        
        // Set background based on transparency setting
        if (!transparentBackground) {
          ctx.fillStyle = qrOptions.bgColor;
          ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
        }
        
        // Draw the original canvas content
        ctx.drawImage(qrCanvas, 0, 0);
        
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = exportCanvas.toDataURL('image/png');
        link.click();
        return true;
      } else {
        console.warn('Canvas element not found within QR code container, retrying...');
        return false;
      }
    };

    // Try to download immediately
    if (attemptDownload()) {
      return;
    }

    // If failed, wait a bit for the QR code to finish rendering and try again
    setTimeout(() => {
      if (!attemptDownload()) {
        // Final attempt with longer delay
        setTimeout(() => {
          if (!attemptDownload()) {
            console.error('Failed to find QR canvas after multiple attempts. The QR code may not have rendered properly.');
            alert('Unable to download QR code. Please try again or refresh the page.');
          }
        }, 500);
      }
    }, 100);
  }, [qrOptions]);

  return {
    qrOptions,
    handleInputChange,
    handleLogoUpload,
    downloadQR,
  };
} 