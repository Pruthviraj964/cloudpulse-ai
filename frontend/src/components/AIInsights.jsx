export default function AIInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
      <h2 className="text-xl font-semibold mb-5">
        AI Operations Center
      </h2>

      <div className="space-y-4">
        <div className="text-yellow-400">
          ⚠ CPU anomaly detected
        </div>

        <div className="text-green-400">
          ✓ Infrastructure healthy
        </div>

        <div className="text-blue-400">
          ↗ Resource trend stable
        </div>
      </div>
    </div>
  );
}