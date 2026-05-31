export default function PredictionCard() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-6">
        🤖 AI Prediction Engine
      </h2>

      <div className="space-y-6">

        <div>
          <p className="text-slate-400 text-sm">
            CPU Forecast
          </p>

          <h3 className="text-3xl font-bold text-cyan-400">
            72% → 84%
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Memory Forecast
          </p>

          <h3 className="text-3xl font-bold text-violet-400">
            65% → 79%
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-yellow-400 font-semibold">
            Medium Risk Detected
          </p>

          <p className="text-slate-400 text-sm mt-2">
            Resource saturation expected within 30 minutes.
          </p>
        </div>

      </div>
    </div>
  );
}