# QR Code Generator Components

This directory contains the modular components for the QR Code Generator application.

## Component Structure

### Core Components

- **`QRCustomizationPanel.tsx`** - Main form panel containing all QR code customization options
- **`QRPreviewPanel.tsx`** - Display panel showing the QR code preview and download functionality
- **`LogoSettings.tsx`** - Nested component handling logo upload and configuration
- **`InstructionsSection.tsx`** - Static component displaying usage instructions

### Supporting Files

- **`/types/qr-options.ts`** - TypeScript interface definitions for QR options
- **`/hooks/useQROptions.ts`** - Custom hook managing QR state and handlers
- **`/styles/slider.css`** - Custom CSS for styled range sliders

## Architecture Benefits

✅ **Separation of Concerns** - Each component has a single responsibility
✅ **Reusability** - Components can be easily reused or modified independently  
✅ **Maintainability** - Easier to debug and update specific features
✅ **Type Safety** - Centralized type definitions ensure consistency
✅ **Custom Hooks** - Business logic separated from UI components
✅ **Clean Main Component** - Main page is now just composition, not implementation

## Component Props

### QRCustomizationPanel

```typescript
interface QRCustomizationPanelProps {
  qrOptions: QROptions;
  onOptionChange: (
    field: keyof QROptions,
    value: string | number | boolean
  ) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
```

### QRPreviewPanel

```typescript
interface QRPreviewPanelProps {
  qrOptions: QROptions;
  onDownload: () => void;
}
```

### LogoSettings

```typescript
interface LogoSettingsProps {
  qrOptions: QROptions;
  onOptionChange: (
    field: keyof QROptions,
    value: string | number | boolean
  ) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
```

## Usage

The main page component (`src/app/page.tsx`) now simply composes these components:

```tsx
export default function Home() {
  const { qrOptions, handleInputChange, handleLogoUpload, downloadQR } =
    useQROptions();

  return (
    <div>
      <QRCustomizationPanel {...props} />
      <QRPreviewPanel {...props} />
      <InstructionsSection />
    </div>
  );
}
```
