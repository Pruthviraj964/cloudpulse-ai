export default function HealthScore() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
      <p className="text-slate-400 text-sm">
        Infrastructure Health
      </p>

      <h1 className="text-6xl font-bold mt-4 text-green-400">
        98.2%
      </h1>

      <p className="text-slate-400 mt-4">
        All monitored systems operating normally.
      </p>
    </div>
  );
}