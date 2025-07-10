import { QRCode } from "react-qrcode-logo";
import { QROptions } from "@/types/qr-options";

interface QRPreviewPanelProps {
  qrOptions: QROptions;
  onDownload: () => void;
}

export default function QRPreviewPanel({
  qrOptions,
  onDownload,
}: QRPreviewPanelProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg"></div>
          Preview
        </h2>

        <div
          className={`inline-block p-6 rounded-2xl shadow-lg border-2 mb-8 transition-transform hover:scale-105 duration-300 ${
            qrOptions.transparentBackground
              ? "bg-transparent border-slate-300"
              : "bg-white border-slate-100"
          }`}
          style={
            qrOptions.transparentBackground
              ? {
                  background:
                    "repeating-conic-gradient(#f1f5f9 0% 25%, #e2e8f0 25% 50%) 50% / 20px 20px",
                }
              : {}
          }
        >
          <QRCode
            id="styled-qr-code"
            value={qrOptions.value}
            size={qrOptions.size}
            bgColor={
              qrOptions.transparentBackground
                ? "transparent"
                : qrOptions.bgColor
            }
            fgColor={qrOptions.fgColor}
            logoImage={qrOptions.logoImage || undefined}
            logoWidth={qrOptions.logoWidth}
            logoHeight={qrOptions.logoHeight}
            logoOpacity={qrOptions.logoOpacity}
            qrStyle={qrOptions.qrStyle}
            eyeColor={qrOptions.eyeColor}
            eyeRadius={qrOptions.eyeRadius}
            ecLevel={qrOptions.ecLevel}
            enableCORS={qrOptions.enableCORS}
            logoPadding={qrOptions.logoPadding}
            logoPaddingStyle={qrOptions.logoPaddingStyle}
            quietZone={qrOptions.quietZone}
            removeQrCodeBehindLogo={qrOptions.removeQrCodeBehindLogo}
          />
        </div>

        <button
          onClick={onDownload}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          📥 Download as PNG
          {qrOptions.transparentBackground && " (Transparent)"}
        </button>

        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 text-left">
          <h4 className="font-bold text-slate-800 mb-4 text-center">
            📊 QR Code Details
          </h4>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span className="font-medium">Content:</span>
              <span className="text-blue-600 font-mono truncate max-w-xs">
                {qrOptions.value}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Dimensions:</span>
              <span className="text-blue-600 font-mono">
                {qrOptions.size} × {qrOptions.size}px
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Error Correction:</span>
              <span className="text-blue-600 font-mono">
                {qrOptions.ecLevel}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Quiet Zone:</span>
              <span className="text-blue-600 font-mono">
                {qrOptions.quietZone}px
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Export Format:</span>
              <span className="text-blue-600 font-mono uppercase">
                PNG{qrOptions.transparentBackground && " (Transparent)"}
              </span>
            </div>
            {qrOptions.logoImage && (
              <div className="flex justify-between">
                <span className="font-medium">Logo:</span>
                <span className="text-blue-600 font-mono">
                  {qrOptions.logoWidth} × {qrOptions.logoHeight}px
                  {qrOptions.removeQrCodeBehindLogo && " (cleared)"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
