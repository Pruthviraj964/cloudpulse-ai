import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import KPICards from "./components/KPICards";
import HealthGauge from "./components/HealthGauge";
import PredictionCard from "./components/PredictionCard";
import SystemStatus from "./components/SystemStatus";

import AlertFeed from "./components/AlertFeed";
import AICopilot from "./components/AICopilot";

import CpuChart from "./components/CpuChart";
import MemoryChart from "./components/MemoryChart";

import InfrastructureMap from "./components/InfrastructureMap";
import ServerTable from "./components/ServerTable";

import { getMetrics } from "./services/api";

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    loadMetrics();

    const interval = setInterval(() => {
      loadMetrics();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loadMetrics = async () => {
    try {
      const data = await getMetrics();
      setMetrics(data.slice(-20));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8 overflow-auto">

        <TopBar />

        {/* KPI */}
        <div className="mb-8">
          <KPICards metrics={metrics} />
        </div>

        {/* Health + Prediction + Status */}
        <div className="grid grid-cols-4 gap-6 mb-6">

          <div className="col-span-2">
            <HealthGauge />
          </div>

          <PredictionCard />

          <SystemStatus />

        </div>

        {/* AI + Alerts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <AICopilot />
          <AlertFeed />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <CpuChart data={metrics} />
          <MemoryChart data={metrics} />
        </div>

        {/* Infrastructure Diagram */}
        <div className="mb-6">
          <InfrastructureMap />
        </div>

        {/* Servers */}
        <ServerTable data={metrics} />

      </div>
    </div>
  );
}

export default App;