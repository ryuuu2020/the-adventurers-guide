import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Tactical Top Hub Stats Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="tactical-card p-4 border-l-4 border-l-[#58a6ff]">
          <div className="font-mono text-2xl font-bold text-[#58a6ff]">8</div>
          <div className="font-mono text-[11px] text-[#8b949e] uppercase tracking-wider mt-1">
            Playable Classes
          </div>
          <div className="text-[10px] text-[#8b949e] mt-0.5">Warrior to Warlock</div>
        </div>
        <div className="tactical-card p-4 border-l-4 border-l-[#3fb950]">
          <div className="font-mono text-2xl font-bold text-[#3fb950]">6</div>
          <div className="font-mono text-[11px] text-[#8b949e] uppercase tracking-wider mt-1">
            Core Attributes
          </div>
          <div className="text-[10px] text-[#8b949e] mt-0.5">Base 10 Pivot Pivot System</div>
        </div>
        <div className="tactical-card p-4 border-l-4 border-l-[#f0883e]">
          <div className="font-mono text-2xl font-bold text-[#f0883e]">15</div>
          <div className="font-mono text-[11px] text-[#8b949e] uppercase tracking-wider mt-1">
            Personalities
          </div>
          <div className="text-[10px] text-[#8b949e] mt-0.5">Morale &amp; Action Clashes</div>
        </div>
        <div className="tactical-card p-4 border-l-4 border-l-[#bc8cff]">
          <div className="font-mono text-2xl font-bold text-[#bc8cff]">1.0.0.0</div>
          <div className="font-mono text-[11px] text-[#8b949e] uppercase tracking-wider mt-1">
            Current Build
          </div>
          <div className="text-[10px] text-[#8b949e] mt-0.5">Aug 31 Full Steam Release</div>
        </div>
      </section>

      {/* Hero Command Hub Section */}
      <section className="tactical-card p-6 md:p-8 bg-gradient-to-r from-[#161b22] to-[#141a23] relative overflow-hidden border border-[#30363d]">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <span className="text-[180px] font-mono select-none">⬡</span>
        </div>
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#58a6ff] font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-ping"></span>
            <span>TACTICAL COMMAND DATABASE // SHION EXPEDITION</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e6edf3] tracking-tight">
            Master the Turn-Based Hex Grid in The Adventurers
          </h2>
          <p className="text-sm text-[#8b949e] leading-relaxed">
            Lead your custom company across the treacherous world of Shion. Built by Eternal Vigilance Entertainment, <em>The Adventurers</em> blends deep tabletop mechanics, Resolve-driven energy pools, tactical 6-neighbor hex engagements, permadeath bleed-out clocks, and personality-driven mercenary economics.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/planner"
              className="px-4 py-2.5 bg-[#58a6ff] hover:bg-[#478ed8] text-[#0d1117] font-mono text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>⚙</span>
              <span>OPEN PARTY PLANNER &amp; CALC</span>
            </Link>
            <Link
              href="/classes"
              className="px-4 py-2.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#e6edf3] font-mono text-xs transition-all flex items-center gap-2"
            >
              <span>⚔</span>
              <span>EXPLORE 8 CLASSES</span>
            </Link>
            <Link
              href="/combat"
              className="px-4 py-2.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#e6edf3] font-mono text-xs transition-all flex items-center gap-2"
            >
              <span>⬡</span>
              <span>HEX COMBAT RULES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1.0 Verified Mechanics Notice Box */}
      <section className="tactical-card p-5 bg-[#0d1117] border-l-4 border-l-[#f0883e] space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-[#f0883e] font-bold">
          <span>⚠️ 1.0.0.0 CRITICAL MECHANICAL AUDIT</span>
          <span className="text-[10px] bg-[#f0883e]/20 px-2 py-0.5 border border-[#f0883e]/40">PATCH 1.0 SHIPPED</span>
        </div>
        <p className="text-[#8b949e] leading-normal font-sans">
          <strong>No Fake Stats:</strong> There is <strong className="text-[#e6edf3]">NO Intelligence stat</strong> in The Adventurers. Magic damage and maximum Energy scale strictly from <strong className="text-[#58a6ff]">Resolve</strong> (10 Energy per point; +6% magic damage per point above 10, boosted by an additional 25% in 1.0). Energy recovery per round scales with <strong className="text-[#3fb950]">Vitality</strong> (10 HP/pt). Agility governs pierce weapons and defense, but 1.0 nerfed Agility block by 25% and parry by 33%.
        </p>
      </section>

      {/* Visual Showcase Gallery from Steam CDN */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#58a6ff]">◈</span> Field Reconnaissance &amp; In-Game Visuals
          </h3>
          <span className="font-mono text-xs text-[#8b949e]">Steam App ID: 3062500</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tactical-card p-2 bg-[#161b22] space-y-2">
            <div className="relative aspect-video w-full overflow-hidden border border-[#30363d]">
              <Image
                src="/images/ss1.jpg"
                alt="Tactical Hex Combat in The Adventurers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-1">
              <div className="font-mono text-xs font-semibold text-[#e6edf3]">Hex Grid Engagements</div>
              <p className="text-[11px] text-[#8b949e] mt-0.5">
                Strategic positioning, 6-neighbor flanking, and opportunity attacks.
              </p>
            </div>
          </div>

          <div className="tactical-card p-2 bg-[#161b22] space-y-2">
            <div className="relative aspect-video w-full overflow-hidden border border-[#30363d]">
              <Image
                src="/images/ss3.jpg"
                alt="Open World Caravan Travel and Random Events"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-1">
              <div className="font-mono text-xs font-semibold text-[#e6edf3]">Dynamic Shion World Map</div>
              <p className="text-[11px] text-[#8b949e] mt-0.5">
                Prycoast contracts, supply logistics, and randomized crisis events.
              </p>
            </div>
          </div>

          <div className="tactical-card p-2 bg-[#161b22] space-y-2">
            <div className="relative aspect-video w-full overflow-hidden border border-[#30363d]">
              <Image
                src="/images/ss4.jpg"
                alt="Character Equipment and Stats Screen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-1">
              <div className="font-mono text-xs font-semibold text-[#e6edf3]">Character Roster &amp; Gear</div>
              <p className="text-[11px] text-[#8b949e] mt-0.5">
                Durability management, blacksmith rush crafting, and personality traits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Playable Classes Quick Matrix */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#58a6ff]">⚔</span> 8 Tactical Archetypes
          </h3>
          <Link href="/classes" className="font-mono text-xs text-[#58a6ff] hover:underline">
            View Full Talent Trees →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Warrior */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Warrior</span>
              <span className="hex-badge text-[#58a6ff] border-[#58a6ff]/40">TANK / STRIKER</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Frontline wall scaling on <strong className="text-[#e6edf3]">Strength</strong>. Signature: Wide Swing, Come At Me, Protection, Roar, and Unstoppable.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Slash / Bash</span>
              <span className="text-[#58a6ff]">Melee Rank 1</span>
            </div>
          </div>

          {/* Archer */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Archer</span>
              <span className="hex-badge text-[#3fb950] border-[#3fb950]/40">PIERCE / SNIPER</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Long-range striker scaling on <strong className="text-[#e6edf3]">Agility</strong>. Signature: Double Shot, Aimed Shot, Pin, Long Shot, and Better Alone.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Bows</span>
              <span className="text-[#3fb950]">Back Rank</span>
            </div>
          </div>

          {/* Thief */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Thief</span>
              <span className="hex-badge text-[#f0883e] border-[#f0883e]/40">FLANK / CRIT</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Flanking specialist scaling on <strong className="text-[#e6edf3]">Agility &amp; Luck</strong>. Signature: Double Stab, Finish Them, Throw Sand, and Triple Threat.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Daggers</span>
              <span className="text-[#f0883e]">Flank Hex</span>
            </div>
          </div>

          {/* Wizard */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Wizard</span>
              <span className="hex-badge text-[#bc8cff] border-[#bc8cff]/40">ARCANE / AOE</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Destructive crowd controller scaling on <strong className="text-[#e6edf3]">Resolve</strong>. Signature: Frost Nova, Fireball, Chain Lightning, and Ice Storm.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Staves</span>
              <span className="text-[#bc8cff]">Back Rank</span>
            </div>
          </div>

          {/* Cleric */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Cleric</span>
              <span className="hex-badge text-[#58a6ff] border-[#58a6ff]/40">PREMIER HEALER</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Vital sustain &amp; radiant damage scaling on <strong className="text-[#e6edf3]">Resolve</strong>. Signature: Mend Wounds, Divine Mending, Celestial Heal, and Purge Unholy.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Mace / Staff</span>
              <span className="text-[#58a6ff]">Mid Rank</span>
            </div>
          </div>

          {/* Paladin */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Paladin</span>
              <span className="hex-badge text-[#58a6ff] border-[#58a6ff]/40">HYBRID TANK</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              Holy brawler combining <strong className="text-[#e6edf3]">Strength &amp; Resolve</strong>. Signature: Divine Fury, Smite Evil, Lay On Hands, and Radiant Strike.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Sword / Shield</span>
              <span className="text-[#58a6ff]">Front Rank</span>
            </div>
          </div>

          {/* Druid */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Druid</span>
              <span className="hex-badge text-[#3fb950] border-[#3fb950]/40">NATURE / SUMMON</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              HoT master and spirit summoner (No shapeshifting). Signature: Warm Embrace, Summon Wolf Spirit, Rotting Vines, and Spirit Of The Grove.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Staves</span>
              <span className="text-[#3fb950]">Mid Rank</span>
            </div>
          </div>

          {/* Warlock */}
          <div className="tactical-card p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-[#e6edf3]">Warlock</span>
              <span className="hex-badge text-[#bc8cff] border-[#bc8cff]/40">UNHOLY / DEMON</span>
            </div>
            <p className="text-xs text-[#8b949e]">
              High magic resist unholy caster. Summons skeletons &amp; demons that drain Resolve. Signature: Soul Leech, Hex Of Weakness, and Unholy Nova.
            </p>
            <div className="font-mono text-[10px] text-[#8b949e] pt-1 border-t border-[#30363d] flex justify-between">
              <span>Weapons: Staves</span>
              <span className="text-[#bc8cff]">Mid-Back Rank</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tactical Rules Matrix */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="tactical-card p-6 space-y-3">
          <h4 className="font-heading font-bold text-base text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#58a6ff]">⬡</span> 1.0 Hex Combat Core Rules
          </h4>
          <ul className="space-y-2.5 text-xs text-[#8b949e]">
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#58a6ff]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Energy Mechanics:</strong> Maximum Energy = 10 × Resolve. Energy Recovery per turn scales strictly with Vitality above 10.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#58a6ff]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Unstable Platforms (33% Debuff):</strong> Mud, snow, and sand enforce a flat 33% reduction in hit chances and damage dealt. Flying units ignore difficult terrain!
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#58a6ff]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Combat Fog of War:</strong> Night battles give 250% extra view distance compared to cave interiors, but ambushes require Scout passives to identify enemy resistances.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#58a6ff]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Weapon Break &amp; Durability:</strong> Weapons wear down during combat. Smelting takes 1 hour, crafting takes 2 hours, or instant rush with +5 gold fee.
              </div>
            </li>
          </ul>
        </div>

        <div className="tactical-card p-6 space-y-3">
          <h4 className="font-heading font-bold text-base text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#f0883e]">⚖</span> Company Economics &amp; Daily Cost
          </h4>
          <ul className="space-y-2.5 text-xs text-[#8b949e]">
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#f0883e]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Charisma Shop Scaling:</strong> Store prices use the highest single Charisma score in the party (-2% buy price per point above 10). Combine with the Merchant talent (+10% buy/sell).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#f0883e]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Daily Wage Burn:</strong> Every hired member demands a daily gold wage. If quest travel time exceeds income, companies enter bankruptcy and morale collapses.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#f0883e]">•</span>
              <div>
                <strong className="text-[#e6edf3]">Personality Clashes:</strong> 15 distinct personality profiles like Hermit, Caregiver, and Rebel gain or lose morale from camp duties (cooking, guarding, equipment maintenance).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-[#f0883e]">•</span>
              <div>
                <strong className="text-[#e6edf3]">1.0 Fort Requests:</strong> Request turnaround shortened by &gt;50% (min 2 days), rewards boosted by ~30% in version 1.0.0.0.
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
