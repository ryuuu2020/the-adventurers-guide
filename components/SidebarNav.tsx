'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Overview', icon: '⌂' },
  { href: '/planner', label: 'Party Planner & Calc', icon: '⚙' },
  { href: '/classes', label: 'Classes & Talents', icon: '⚔' },
  { href: '/talent-trees-guide', label: '1-10 Talent Trees', icon: '🌲' },
  { href: '/camp-morale-guide', label: 'Camp & 15 Morale', icon: '⛺' },
  { href: '/combat', label: 'Hex Combat & Mechanics', icon: '⬡' },
  { href: '/patch-notes', label: '1.0 & EA Patch Notes', icon: '📋' },
  { href: '/faq', label: 'FAQ', icon: '?' },
  { href: '/about', label: 'About & Roadmap', icon: 'ℹ' },
  { href: '/contact', label: 'Contact', icon: '✉' },
  { href: '/privacy', label: 'Privacy Policy', icon: '🔒' },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d] sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#58a6ff] rounded-none"></span>
          <span className="font-heading font-bold text-sm text-[#e6edf3] tracking-wide uppercase">
            The Adventurers Hub
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 text-[#8b949e] hover:text-[#e6edf3] border border-[#30363d] bg-[#0d1117] text-xs font-mono"
        >
          {mobileOpen ? '[CLOSE]' : '[MENU]'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#161b22] border-r border-[#30363d] flex flex-col justify-between z-30 transition-transform lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header Brand */}
          <div className="p-5 border-b border-[#30363d]">
            <Link href="/" className="group block" onClick={() => setMobileOpen(false)}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-[#58a6ff] inline-block animate-pulse"></span>
                <span className="font-mono text-[10px] text-[#58a6ff] uppercase tracking-wider">
                  TAC-OPS // SHION
                </span>
              </div>
              <h1 className="font-heading text-lg font-bold text-[#e6edf3] tracking-tight group-hover:text-[#58a6ff] transition-colors">
                The Adventurers
              </h1>
              <p className="text-[11px] text-[#8b949e] font-mono mt-0.5">
                v1.0.0.0 Strategic Database
              </p>
            </Link>

            {/* Quick Status Pill */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono bg-[#0d1117] px-2.5 py-1.5 border border-[#30363d] text-[#8b949e]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950]"></span>
                <span>STEAM 1.0</span>
              </span>
              <span className="text-[#58a6ff]">#3062500</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 flex-1">
            <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#8b949e]/70">
              Navigation Module
            </div>
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-xs font-medium border-l-2 transition-all ${
                    isActive
                      ? 'bg-[#1c2433] text-[#e6edf3] border-[#58a6ff] font-semibold'
                      : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#141a23] border-transparent'
                  }`}
                >
                  <span className="font-mono text-[#58a6ff] text-sm w-4 text-center">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.href === '/planner' && (
                    <span className="ml-auto text-[9px] font-mono bg-[#58a6ff]/20 text-[#58a6ff] px-1.5 py-0.5 border border-[#58a6ff]/30">
                      TOOL
                    </span>
                  )}
                  {item.href === '/patch-notes' && (
                    <span className="ml-auto text-[9px] font-mono bg-[#3fb950]/20 text-[#3fb950] px-1.5 py-0.5 border border-[#3fb950]/30">
                      1.0
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* System Footer info */}
          <div className="p-4 border-t border-[#30363d] bg-[#0d1117]/60">
            <div className="text-[11px] font-mono text-[#8b949e] space-y-1">
              <div className="flex justify-between">
                <span>Developer:</span>
                <span className="text-[#e6edf3]">Eternal Vigilance</span>
              </div>
              <div className="flex justify-between">
                <span>Release:</span>
                <span className="text-[#3fb950]">Aug 31, 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Contact:</span>
                <a
                  href="mailto:sonic6640@gmail.com"
                  className="text-[#58a6ff] hover:underline"
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
        />
      )}
    </>
  );
}
