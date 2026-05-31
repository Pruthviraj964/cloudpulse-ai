import {
  Server,
  Activity,
  Cpu,
  Database,
} from "lucide-react";

export default function KPICards() {
  const cards = [
    {
      title: "Servers",
      value: "4",
      icon: Server,
    },
    {
      title: "Metrics",
      value: "250+",
      icon: Database,
    },
    {
      title: "Avg CPU",
      value: "72%",
      icon: Cpu,
    },
    {
      title: "Avg Memory",
      value: "65%",
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all duration-300"
          >
            <Icon
              size={28}
              className="text-cyan-400 mb-4"
            />

            <p className="text-slate-400">
              {card.title}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {card.value}
            </h1>
          </div>
        );
      })}
    </div>
  );
}