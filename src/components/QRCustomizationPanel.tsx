import { QROptions } from "@/types/qr-options";
import LogoSettings from "./LogoSettings";

interface QRCustomizationPanelProps {
  qrOptions: QROptions;
  onOptionChange: (
    field: keyof QROptions,
    value: string | number | boolean
  ) => void;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QRCustomizationPanel({
  qrOptions,
  onOptionChange,
  onLogoUpload,
}: QRCustomizationPanelProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"></div>
        Customization
      </h2>

      <div className="space-y-8">
        {/* URL Input */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            🔗 URL or Text Content
          </label>
          <input
            type="text"
            value={qrOptions.value}
            onChange={(e) => onOptionChange("value", e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-700 placeholder-slate-400"
            placeholder="https://arcie.art/"
          />
        </div>

        {/* Size */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            📏 Size:{" "}
            <span className="text-blue-600 font-bold">{qrOptions.size}px</span>
          </label>
          <div className="relative">
            <input
              type="range"
              min="128"
              max="512"
              value={qrOptions.size}
              onChange={(e) => onOptionChange("size", parseInt(e.target.value))}
              className="w-full h-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>128px</span>
              <span>512px</span>
            </div>
          </div>
        </div>

        {/* Quiet Zone */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            🎯 Quiet Zone:{" "}
            <span className="text-blue-600 font-bold">
              {qrOptions.quietZone}px
            </span>
          </label>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="50"
              value={qrOptions.quietZone}
              onChange={(e) =>
                onOptionChange("quietZone", parseInt(e.target.value))
              }
              className="w-full h-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0px</span>
              <span>50px</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Empty border space around the QR code
          </p>
        </div>

        {/* Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              🎨 Background Color
            </label>
            <div className="relative">
              <input
                type="color"
                value={qrOptions.bgColor}
                onChange={(e) => onOptionChange("bgColor", e.target.value)}
                className="w-full h-12 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-blue-300 transition-colors"
              />
              <div className="absolute inset-0 rounded-xl ring-2 ring-offset-2 ring-transparent hover:ring-blue-300 transition-all pointer-events-none"></div>
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              🖤 Foreground Color
            </label>
            <div className="relative">
              <input
                type="color"
                value={qrOptions.fgColor}
                onChange={(e) => onOptionChange("fgColor", e.target.value)}
                className="w-full h-12 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-blue-300 transition-colors"
              />
              <div className="absolute inset-0 rounded-xl ring-2 ring-offset-2 ring-transparent hover:ring-blue-300 transition-all pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* QR Style */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            ✨ QR Code Style
          </label>
          <select
            value={qrOptions.qrStyle}
            onChange={(e) => onOptionChange("qrStyle", e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-700 bg-white"
          >
            <option value="squares">Squares (Classic)</option>
            <option value="dots">Dots (Modern)</option>
            <option value="fluid">Fluid (Organic)</option>
          </select>
        </div>

        {/* Eye Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              👁️ Eye Color
            </label>
            <div className="relative">
              <input
                type="color"
                value={qrOptions.eyeColor}
                onChange={(e) => onOptionChange("eyeColor", e.target.value)}
                className="w-full h-12 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-blue-300 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">
              🔄 Eye Radius:{" "}
              <span className="text-blue-600 font-bold">
                {qrOptions.eyeRadius}
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={qrOptions.eyeRadius}
              onChange={(e) =>
                onOptionChange("eyeRadius", parseInt(e.target.value))
              }
              className="w-full h-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Error Correction Level */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            🛡️ Error Correction Level
          </label>
          <select
            value={qrOptions.ecLevel}
            onChange={(e) => onOptionChange("ecLevel", e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-700 bg-white"
          >
            <option value="L">Low (7% recovery)</option>
            <option value="M">Medium (15% recovery)</option>
            <option value="Q">Quartile (25% recovery)</option>
            <option value="H">High (30% recovery)</option>
          </select>
        </div>

        {/* Enable CORS */}
        {/* <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="enableCORS"
              checked={qrOptions.enableCORS}
              onChange={(e) => onOptionChange("enableCORS", e.target.checked)}
              className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="enableCORS"
              className="text-sm font-medium text-slate-700 cursor-pointer"
            >
              🌐 Enable CORS for external images
            </label>
          </div>
        </div> */}

        {/* Export Options */}
        <div className="space-y-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            Export Options
          </h3>

          {/* Transparent Background */}
          <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="transparentBackground"
                checked={qrOptions.transparentBackground}
                onChange={(e) =>
                  onOptionChange("transparentBackground", e.target.checked)
                }
                className="w-5 h-5 text-purple-600 bg-white border-2 border-slate-300 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label
                htmlFor="transparentBackground"
                className="text-sm font-medium cursor-pointer text-slate-700"
              >
                🌟 Transparent Background
              </label>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Your QR code will be exported as a PNG image with optional
            transparent background.
          </p>
        </div>

        {/* Logo Settings */}
        <LogoSettings
          qrOptions={qrOptions}
          onOptionChange={onOptionChange}
          onLogoUpload={onLogoUpload}
        />
      </div>
    </div>
  );
}
