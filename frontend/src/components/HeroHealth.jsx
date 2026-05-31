export default function HeroHealth() {
  return (
    <div className="rounded-3xl p-10 mb-8 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 shadow-2xl">
      <h2 className="text-xl font-semibold text-white/90">
        Infrastructure Health
      </h2>

      <h1 className="text-8xl font-bold mt-4">
        98.2%
      </h1>

      <div className="flex gap-16 mt-8">
        <div>
          <p className="text-white/70">
            Active Servers
          </p>
          <h3 className="text-3xl font-bold">
            4
          </h3>
        </div>

        <div>
          <p className="text-white/70">
            Active Alerts
          </p>
          <h3 className="text-3xl font-bold">
            2
          </h3>
        </div>

        <div>
          <p className="text-white/70">
            AI Monitoring
          </p>
          <h3 className="text-3xl font-bold">
            Enabled
          </h3>
        </div>
      </div>
    </div>
  );
}