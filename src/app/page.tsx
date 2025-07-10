"use client";

import QRCustomizationPanel from "@/components/QRCustomizationPanel";
import QRPreviewPanel from "@/components/QRPreviewPanel";
import InstructionsSection from "@/components/InstructionsSection";
import { useQROptions } from "@/hooks/useQROptions";
import "@/styles/slider.css";

export default function Home() {
  const { qrOptions, handleInputChange, handleLogoUpload, downloadQR } =
    useQROptions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Styled QR Code Generator
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create beautiful, customizable QR codes with logos and advanced
            styling options
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {/* Customization Panel */}
          <QRCustomizationPanel
            qrOptions={qrOptions}
            onOptionChange={handleInputChange}
            onLogoUpload={handleLogoUpload}
          />

          {/* Preview Panel */}
          <QRPreviewPanel qrOptions={qrOptions} onDownload={downloadQR} />
        </div>

        {/* Instructions */}
        <InstructionsSection />

        {/* Footer Attribution */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
            <span className="text-sm text-slate-600">Built with ❤️ by</span>
            <a
              href="https://shamoilarsi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
            >
              Shamoil Arsiwala
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
