export default function Sidebar() {
  const items = [
    "Dashboard",
    "Infrastructure",
    "Servers",
    "Alerts",
    "AI Insights",
    "Settings",
  ];

  return (
    <div className="w-72 min-h-screen border-r border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-12">
        CloudPulse AI
      </h1>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item}
            className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
              index === 0
                ? "bg-gradient-to-r from-violet-600 to-blue-500 shadow-lg shadow-blue-500/30"
                : "hover:bg-white/5"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}