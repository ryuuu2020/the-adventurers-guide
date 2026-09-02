import Link from 'next/link';

export default function HeaderBanner() {
  return (
    <header className="bg-[#161b22] border-b border-[#30363d] px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Telemetry Data */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#e6edf3]">
            <span className="text-[#58a6ff]">⬡</span>
            <span>SYSTEM:</span>
            <span className="text-[#3fb950] font-semibold">1.0.0.0 VERIFIED</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#8b949e]">
            <span>ENGINE:</span>
            <span className="text-[#e6edf3]">HEX TACTICAL D&amp;D</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#8b949e]">
            <span>ROSTER POOL:</span>
            <span className="text-[#e6edf3]">8 CLASSES</span>
          </div>
        </div>

        {/* Action quicklinks */}
        <div className="flex items-center gap-2">
          <Link
            href="/planner"
            className="px-3 py-1.5 bg-[#58a6ff] hover:bg-[#478ed8] text-[#0d1117] font-mono text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <span>▶</span>
            <span>LAUNCH PARTY PLANNER</span>
          </Link>
          <a
            href="https://store.steampowered.com/app/3062500/The_Adventurers/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#e6edf3] font-mono text-xs transition-colors flex items-center gap-1.5"
          >
            <span>STEAM APP</span>
            <span className="text-[10px] text-[#8b949e]">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
