export default function InstructionsSection() {
  return (
    <div className="mt-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
        How to Use
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="text-4xl mb-4">📝</div>
          <h4 className="font-bold text-slate-800 mb-2">1. Enter Content</h4>
          <p className="text-sm text-slate-600">
            Input any URL, text, or data you want to encode in your QR code.
          </p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="text-4xl mb-4">🎨</div>
          <h4 className="font-bold text-slate-800 mb-2">2. Customize Style</h4>
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
  );
}
