import { Bot } from "lucide-react";

export default function AICopilot() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="text-cyan-400" />
        <h2 className="text-2xl font-bold">
          AI Copilot
        </h2>
      </div>

      <div className="space-y-4">
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
          <p className="text-red-400">
            CPU anomaly detected on server-2
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
          <p className="text-yellow-300">
            Memory trend increasing on server-3
          </p>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
          <p className="text-green-400">
            No infrastructure outage predicted
          </p>
        </div>
      </div>
    </div>
  );
}