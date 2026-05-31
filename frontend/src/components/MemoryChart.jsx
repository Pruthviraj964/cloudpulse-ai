import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MemoryChart({ data }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        📊 Memory Utilization
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <XAxis
            dataKey="id"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="memory_usage"
            stroke="#06b6d4"
            fill="#06b6d430"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}