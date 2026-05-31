import { useEffect, useState } from "react";
import { getAIAnalysis } from "../services/ai";

export default function AIPrediction() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    loadAnalysis();

    const interval = setInterval(() => {
      loadAnalysis();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loadAnalysis = async () => {
    try {
      const data = await getAIAnalysis();
      setAnalysis(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!analysis) {
    return (
      <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6">
        Loading AI Analysis...
      </div>
    );
  }

  const riskColor =
    analysis.risk === "CRITICAL"
      ? "text-red-400"
      : analysis.risk === "WARNING"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-5">
        🤖 AI Prediction Engine
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-slate-400 text-sm">
            Server
          </p>
          <p className="text-cyan-400 font-semibold">
            {analysis.server}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            CPU Forecast
          </p>
          <p className="text-cyan-400 text-3xl font-bold">
            {analysis.cpu}%
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Memory Forecast
          </p>
          <p className="text-violet-400 text-3xl font-bold">
            {analysis.memory}%
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Risk Level
          </p>

          <p className={`text-2xl font-bold ${riskColor}`}>
            {analysis.risk}
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3">
          <p className="text-yellow-300 font-semibold">
            Recommendation
          </p>

          <p className="text-slate-300 text-sm mt-1">
            {analysis.recommendation}
          </p>
        </div>

      </div>
    </div>
  );
}