import { QROptions } from "@/types/qr-options";

interface LogoSettingsProps {
  qrOptions: QROptions;
  onOptionChange: (
    field: keyof QROptions,
    value: string | number | boolean
  ) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LogoSettings({
  qrOptions,
  onOptionChange,
  onLogoUpload,
}: LogoSettingsProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-slate-700">
        🖼️ Upload Logo (Optional)
      </label>
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={onLogoUpload}
          className="w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      {qrOptions.logoImage && (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <span className="text-sm text-green-700 font-medium">
            ✅ Logo uploaded successfully
          </span>
          <button
            onClick={() => onOptionChange("logoImage", "")}
            className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            ❌ Remove
          </button>
        </div>
      )}

      {/* Logo Settings Panel */}
      {qrOptions.logoImage && (
        <div className="space-y-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="text-blue-600">⚙️</span> Logo Settings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-600">
                Width:{" "}
                <span className="text-blue-600 font-bold">
                  {qrOptions.logoWidth}px
                </span>
              </label>
              <input
                type="range"
                min="20"
                max="120"
                value={qrOptions.logoWidth}
                onChange={(e) =>
                  onOptionChange("logoWidth", parseInt(e.target.value))
                }
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-600">
                Height:{" "}
                <span className="text-blue-600 font-bold">
                  {qrOptions.logoHeight}px
                </span>
              </label>
              <input
                type="range"
                min="20"
                max="120"
                value={qrOptions.logoHeight}
                onChange={(e) =>
                  onOptionChange("logoHeight", parseInt(e.target.value))
                }
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              Opacity:{" "}
              <span className="text-blue-600 font-bold">
                {Math.round(qrOptions.logoOpacity * 100)}%
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={qrOptions.logoOpacity}
              onChange={(e) =>
                onOptionChange("logoOpacity", parseFloat(e.target.value))
              }
              className="w-full h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              Padding:{" "}
              <span className="text-blue-600 font-bold">
                {qrOptions.logoPadding}px
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={qrOptions.logoPadding}
              onChange={(e) =>
                onOptionChange("logoPadding", parseInt(e.target.value))
              }
              className="w-full h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              Padding Style
            </label>
            <select
              value={qrOptions.logoPaddingStyle}
              onChange={(e) =>
                onOptionChange("logoPaddingStyle", e.target.value)
              }
              className="w-full px-3 py-2 text-sm border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-slate-700"
            >
              <option value="square">⬜ Square</option>
              <option value="circle">🔵 Circle</option>
            </select>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-blue-200">
            <input
              type="checkbox"
              id="removeQrBehindLogo"
              checked={qrOptions.removeQrCodeBehindLogo}
              onChange={(e) =>
                onOptionChange("removeQrCodeBehindLogo", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 bg-white border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="removeQrBehindLogo"
              className="text-sm font-medium text-slate-600 cursor-pointer"
            >
              🎭 Remove QR code behind logo
              <br />
              <span className="text-xs text-slate-500 italic">
                (Will not work if transparent background is enabled)
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
