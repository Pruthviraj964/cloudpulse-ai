export default function ServerTable({ data }) {
  const latestServers = {};

  data.forEach((item) => {
    latestServers[item.server_name] = item;
  });

  const servers = Object.values(latestServers);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Infrastructure Servers
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-slate-700">
            <th className="pb-3">Server</th>
            <th className="pb-3">CPU</th>
            <th className="pb-3">Memory</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {servers.map((server) => {
            const critical =
              server.cpu_usage > 80 ||
              server.memory_usage > 80;

            const warning =
              server.cpu_usage > 60 ||
              server.memory_usage > 60;

            return (
              <tr
                key={server.server_name}
                className="border-b border-slate-800"
              >
                <td className="py-4 font-medium">
                  {server.server_name}
                </td>

                <td>
                  {server.cpu_usage.toFixed(1)}%
                </td>

                <td>
                  {server.memory_usage.toFixed(1)}%
                </td>

                <td>
                  {critical ? (
                    <span className="text-red-400">
                      Critical
                    </span>
                  ) : warning ? (
                    <span className="text-yellow-400">
                      Warning
                    </span>
                  ) : (
                    <span className="text-green-400">
                      Healthy
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}