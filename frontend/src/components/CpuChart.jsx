import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CpuChart({ data }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        ⚡ CPU Utilization
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <XAxis
            dataKey="id"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu_usage"
            stroke="#8b5cf6"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}