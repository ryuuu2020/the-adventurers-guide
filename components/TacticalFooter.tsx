import Link from 'next/link';

export default function TacticalFooter() {
  return (
    <footer className="mt-20 border-t border-[#30363d] bg-[#161b22] text-[#8b949e] text-xs">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Disclaimer */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#58a6ff]"></span>
              <span className="font-heading font-bold text-sm text-[#e6edf3] tracking-wide">
                THE ADVENTURERS STRATEGY DATABASE
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-lg">
              An independent, community-driven database and interactive tactical calculator for{' '}
              <strong className="text-[#e6edf3]">The Adventurers</strong> (Steam App ID 3062500) developed by{' '}
              <strong className="text-[#e6edf3]">Eternal Vigilance Entertainment</strong>. Not affiliated with or endorsed by the developer. All trademarks and game assets belong to their respective owners.
            </p>
            <div className="pt-2 font-mono text-[11px] text-[#58a6ff]">
              Official Publisher AdSense ID: ca-pub-8925824244664340
            </div>
          </div>

          {/* Col 2: Tactical Modules */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#e6edf3] mb-3">
              Tactical Systems
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <Link href="/planner" className="hover:text-[#58a6ff] transition-colors">
                  ▶ Party Planner &amp; Stat Calc
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#58a6ff] transition-colors">
                  ▶ 8 Playable Classes
                </Link>
              </li>
              <li>
                <Link href="/talent-trees-guide" className="hover:text-[#58a6ff] transition-colors">
                  ▶ 1-10 Talent Trees
                </Link>
              </li>
              <li>
                <Link href="/camp-morale-guide" className="hover:text-[#58a6ff] transition-colors">
                  ▶ Camp &amp; 15 Personalities
                </Link>
              </li>
              <li>
                <Link href="/combat" className="hover:text-[#58a6ff] transition-colors">
                  ▶ Hex Grid &amp; Damage Types
                </Link>
              </li>
              <li>
                <Link href="/patch-notes" className="hover:text-[#58a6ff] transition-colors">
                  ▶ 1.0.0.0 Release Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#e6edf3] mb-3">
              Site &amp; Contact
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#58a6ff] transition-colors">
                  About &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#58a6ff] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#58a6ff] transition-colors">
                  Contact: sonic6640@gmail.com
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#58a6ff] transition-colors">
                  Privacy Policy &amp; Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} The Adventurers Strategy Guide · High-Fantasy Tactical RPG
          </div>
          <div className="flex items-center gap-4 text-[#8b949e]">
            <span>Canonical: theadventurersguide.wiki</span>
            <span>•</span>
            <span className="text-[#3fb950]">Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
