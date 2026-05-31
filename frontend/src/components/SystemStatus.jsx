export default function SystemStatus() {
  const systems = [
    { name: "API Gateway", status: "Online" },
    { name: "Database", status: "Connected" },
    { name: "AI Engine", status: "Running" },
    { name: "Collector", status: "Active" },
  ];

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-6">
        🟢 System Status
      </h2>

      <div className="space-y-4">
        {systems.map((system) => (
          <div
            key={system.name}
            className="flex justify-between items-center p-3 rounded-xl bg-slate-800/50"
          >
            <span>{system.name}</span>

            <span className="text-green-400 font-semibold">
              {system.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}