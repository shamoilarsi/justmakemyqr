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

        {/* Footer Attributions */}
        <div className="mt-8 flex flex-row justify-center items-center space-x-4">
          {/* Shamoil Attribution */}
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

          {/* GitHub Attribution */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
            <a
              href="https://github.com/shamoilarsi/justmakemyqr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors duration-200 hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Find the code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
