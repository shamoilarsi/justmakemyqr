export interface QROptions {
  value: string;
  size: number;
  bgColor: string;
  fgColor: string;
  logoImage: string;
  logoWidth: number;
  logoHeight: number;
  logoOpacity: number;
  qrStyle: 'squares' | 'dots' | 'fluid';
  eyeColor: string;
  eyeRadius: number;
  ecLevel: 'L' | 'M' | 'Q' | 'H';
  enableCORS: boolean;
  logoPadding: number;
  logoPaddingStyle: 'square' | 'circle';
  quietZone: number;
  removeQrCodeBehindLogo: boolean;
  transparentBackground: boolean;
} 