import { Bell, Search, UserCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Enterprise Infrastructure Intelligence
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-slate-800 border border-white/10 rounded-2xl px-4 py-3 w-80">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search servers..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        <button className="bg-slate-800 rounded-2xl p-3 hover:bg-slate-700">
          <Bell size={20} />
        </button>

        <button className="bg-slate-800 rounded-2xl p-3 hover:bg-slate-700">
          <UserCircle size={22} />
        </button>
      </div>
    </div>
  );
}