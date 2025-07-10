"use client";

import { useState, useCallback } from "react";
import { QRCode } from "react-qrcode-logo";

interface QROptions {
  value: string;
  size: number;
  bgColor: string;
  fgColor: string;
  logoImage: string;
  logoWidth: number;
  logoHeight: number;
  logoOpacity: number;
  qrStyle: "squares" | "dots" | "fluid";
  eyeColor: string;
  eyeRadius: number;
  ecLevel: "L" | "M" | "Q" | "H";
  enableCORS: boolean;
  logoPadding: number;
  logoPaddingStyle: "square" | "circle";
  quietZone: number;
  removeQrCodeBehindLogo: boolean;
}

export default function Home() {
  const [qrOptions, setQROptions] = useState<QROptions>({
    value: "https://example.com",
    size: 256,
    bgColor: "#FFFFFF",
    fgColor: "#000000",
    logoImage: "",
    logoWidth: 60,
    logoHeight: 60,
    logoOpacity: 1,
    qrStyle: "squares",
    eyeColor: "#000000",
    eyeRadius: 0,
    ecLevel: "M",
    enableCORS: false,
    logoPadding: 0,
    logoPaddingStyle: "square",
    quietZone: 10,
    removeQrCodeBehindLogo: false,
  });

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
          handleInputChange("logoImage", result);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleInputChange]
  );

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

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
          {/* Controls Panel */}
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
                  onChange={(e) => handleInputChange("value", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-700 placeholder-slate-400"
                  placeholder="Enter URL, text, or any data to encode"
                />
              </div>

              {/* Size */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">
                  📏 Size:{" "}
                  <span className="text-blue-600 font-bold">
                    {qrOptions.size}px
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="128"
                    max="512"
                    value={qrOptions.size}
                    onChange={(e) =>
                      handleInputChange("size", parseInt(e.target.value))
                    }
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
                      handleInputChange("quietZone", parseInt(e.target.value))
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
                      onChange={(e) =>
                        handleInputChange("bgColor", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleInputChange("fgColor", e.target.value)
                      }
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
                  onChange={(e) => handleInputChange("qrStyle", e.target.value)}
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
                      onChange={(e) =>
                        handleInputChange("eyeColor", e.target.value)
                      }
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
                      handleInputChange("eyeRadius", parseInt(e.target.value))
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
                  onChange={(e) => handleInputChange("ecLevel", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-700 bg-white"
                >
                  <option value="L">Low (7% recovery)</option>
                  <option value="M">Medium (15% recovery)</option>
                  <option value="Q">Quartile (25% recovery)</option>
                  <option value="H">High (30% recovery)</option>
                </select>
              </div>

              {/* Enable CORS */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="enableCORS"
                    checked={qrOptions.enableCORS}
                    onChange={(e) =>
                      handleInputChange("enableCORS", e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="enableCORS"
                    className="text-sm font-medium text-slate-700 cursor-pointer"
                  >
                    🌐 Enable CORS for external images
                  </label>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-slate-700">
                  🖼️ Upload Logo (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {qrOptions.logoImage && (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <span className="text-sm text-green-700 font-medium">
                      ✅ Logo uploaded successfully
                    </span>
                    <button
                      onClick={() => handleInputChange("logoImage", "")}
                      className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
                    >
                      ❌ Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Logo Settings */}
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
                          handleInputChange(
                            "logoWidth",
                            parseInt(e.target.value)
                          )
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
                          handleInputChange(
                            "logoHeight",
                            parseInt(e.target.value)
                          )
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
                        handleInputChange(
                          "logoOpacity",
                          parseFloat(e.target.value)
                        )
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
                        handleInputChange(
                          "logoPadding",
                          parseInt(e.target.value)
                        )
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
                        handleInputChange("logoPaddingStyle", e.target.value)
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
                        handleInputChange(
                          "removeQrCodeBehindLogo",
                          e.target.checked
                        )
                      }
                      className="w-4 h-4 text-blue-600 bg-white border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="removeQrBehindLogo"
                      className="text-sm font-medium text-slate-600 cursor-pointer"
                    >
                      🎭 Remove QR code behind logo
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* QR Code Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg"></div>
                Preview
              </h2>

              <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border-2 border-slate-100 mb-8 transition-transform hover:scale-105 duration-300">
                <QRCode
                  value={qrOptions.value}
                  size={qrOptions.size}
                  bgColor={qrOptions.bgColor}
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
                onClick={downloadQR}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📥 Download QR Code
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
        </div>

        {/* Instructions */}
        <div className="mt-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            How to Use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="font-bold text-slate-800 mb-2">
                1. Enter Content
              </h4>
              <p className="text-sm text-slate-600">
                Input any URL, text, or data you want to encode in your QR code.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-bold text-slate-800 mb-2">
                2. Customize Style
              </h4>
              <p className="text-sm text-slate-600">
                Adjust colors, size, style, and upload a logo to make it unique.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">💾</div>
              <h4 className="font-bold text-slate-800 mb-2">3. Download</h4>
              <p className="text-sm text-slate-600">
                Click download to save your customized QR code as a PNG image.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #6366f1);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #6366f1);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}
