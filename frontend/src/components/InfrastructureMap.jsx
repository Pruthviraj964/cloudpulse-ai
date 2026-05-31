export default function InfrastructureMap() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-8">
        🏗 Infrastructure Architecture
      </h2>

      <div className="flex flex-col items-center">

        {/* Internet */}
        <div className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-8 py-4 rounded-2xl font-bold shadow-lg">
          🌐 Internet Traffic
        </div>

        <div className="h-8 w-1 bg-slate-600"></div>

        {/* Load Balancer */}
        <div className="bg-violet-500/20 border border-violet-400 text-violet-300 px-8 py-4 rounded-2xl font-bold shadow-lg">
          ⚖ Load Balancer
        </div>

        <div className="h-8 w-1 bg-slate-600"></div>

        {/* Servers */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-blue-500/20 border border-blue-400 text-blue-300 px-6 py-4 rounded-2xl text-center shadow-lg">
            🖥 Server 1
          </div>

          <div className="bg-blue-500/20 border border-blue-400 text-blue-300 px-6 py-4 rounded-2xl text-center shadow-lg">
            🖥 Server 2
          </div>

          <div className="bg-blue-500/20 border border-blue-400 text-blue-300 px-6 py-4 rounded-2xl text-center shadow-lg">
            🖥 Server 3
          </div>

        </div>

        <div className="h-8 w-1 bg-slate-600"></div>

        {/* AI Engine */}
        <div className="bg-pink-500/20 border border-pink-400 text-pink-300 px-8 py-4 rounded-2xl font-bold shadow-lg">
          🤖 AI Prediction Engine
        </div>

        <div className="h-8 w-1 bg-slate-600"></div>

        {/* Database */}
        <div className="bg-green-500/20 border border-green-400 text-green-300 px-8 py-4 rounded-2xl font-bold shadow-lg">
          🗄 PostgreSQL Database
        </div>

      </div>
    </div>
  );
}