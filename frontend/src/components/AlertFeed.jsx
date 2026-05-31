import { BellRing } from "lucide-react";

export default function AlertFeed() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <BellRing className="text-orange-400" />
        <h2 className="text-2xl font-bold">
          Recent Alerts
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>

          <span className="text-red-400">
            CPU 95% on server-2
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-yellow-500/10">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

          <span className="text-yellow-300">
            Memory 78% on server-3
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500/10">
          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>

          <span className="text-cyan-400">
            New metrics received
          </span>
        </div>
      </div>
    </div>
  );
}