export default function HealthGauge() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex items-center justify-between">
      
      <div>
        <p className="text-slate-400 text-sm">
          Infrastructure Health
        </p>

        <h1 className="text-6xl font-bold mt-2 text-white">
          98.2%
        </h1>

        <p className="text-slate-400 mt-4">
          All monitored systems operating normally
        </p>

        <div className="flex gap-6 mt-6">
          <div>
            <p className="text-slate-500 text-xs">
              Active Servers
            </p>

            <h3 className="font-bold text-xl">
              4
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-xs">
              Alerts
            </p>

            <h3 className="font-bold text-xl text-yellow-400">
              2
            </h3>
          </div>
        </div>
      </div>

      <div className="w-40 h-40 rounded-full border-[12px] border-cyan-500 flex items-center justify-center">
        <span className="text-3xl font-bold">
          98%
        </span>
      </div>
    </div>
  );
}