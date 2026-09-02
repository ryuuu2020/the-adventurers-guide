import Image from 'next/image';
import Link from 'next/link';

export default function CombatPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-[#30363d] pb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-[#58a6ff]">TACTICAL MANUAL // BATTLE RULES</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e6edf3]">
          Hex Grid Tactical Rules &amp; Damage Engine
        </h2>
        <p className="text-xs text-[#8b949e] mt-1">
          Official 1.0 rules: 6-neighbor hex geometry, Resolve-based Energy pools, Pierce vs Slash/Bash scaling, Unstable Platforms (-33%), Cave &amp; Night Fog of War, and Permadeath Bleed-out timers.
        </p>
      </div>

      {/* Hex Battle Visual Screenshot */}
      <div className="tactical-card p-4 bg-[#161b22] space-y-3">
        <div className="relative aspect-video w-full overflow-hidden border border-[#30363d] rounded-none">
          <Image
            src="/images/ss2.jpg"
            alt="Hexagonal grid battlefield with units positioned"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between font-mono text-xs text-[#8b949e]">
          <span>FIG 1.0: Hexagonal Turn-Based Grid Engagement</span>
          <span className="text-[#58a6ff]">6-Tile Adjacency Vector</span>
        </div>
      </div>

      {/* Section 1: Hex Geometry & Energy System */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="tactical-card p-6 space-y-3">
          <div className="font-mono text-xs text-[#58a6ff] uppercase font-bold flex items-center gap-2">
            <span>⬡</span> 1. Hexagonal Geometry &amp; 6-Neighbor Flanking
          </div>
          <h3 className="font-heading text-lg font-bold text-[#e6edf3]">
            Flanking Vectors &amp; Chokepoint Defense
          </h3>
          <p className="text-xs text-[#8b949e] leading-relaxed">
            Unlike 4-tile square grids, every unit in <em>The Adventurers</em> is surrounded by 6 adjacent hexes. This makes flanking significantly more aggressive. Stacking multiple allies around an enemy triggers the <strong className="text-[#e6edf3]">Gang Up</strong> bonus (higher critical strike chance), while the Thief class specializes in converting gang-up surrounds into lethal executions.
          </p>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] text-xs font-mono text-[#8b949e] space-y-1">
            <div>• <strong className="text-[#e6edf3]">Choke Control:</strong> 2 hex gaps can be fully anchored by 1 Warrior with Wide Swing.</div>
            <div>• <strong className="text-[#e6edf3]">Opportunity Attacks:</strong> Careless movement around enemies within 1 hex range provokes instant retaliation.</div>
          </div>
        </div>

        <div className="tactical-card p-6 space-y-3">
          <div className="font-mono text-xs text-[#58a6ff] uppercase font-bold flex items-center gap-2">
            <span>⚡</span> 2. Energy Economy: Resolve vs Vitality
          </div>
          <h3 className="font-heading text-lg font-bold text-[#e6edf3]">
            Max Pool (Resolve) &amp; Round Recovery (Vitality)
          </h3>
          <p className="text-xs text-[#8b949e] leading-relaxed">
            Energy is the universal currency for actions, spells, and summons. Energy does <strong className="text-[#f85149]">NOT</strong> scale from Agility.
          </p>
          <div className="space-y-2 font-mono text-xs bg-[#0d1117] p-3 border border-[#30363d]">
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Max Energy Pool:</span>
              <span className="text-[#58a6ff] font-bold">10 × Resolve</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Base Energy Recovery:</span>
              <span className="text-[#bc8cff] font-bold">+5 / Round</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Vitality Recovery Bonus:</span>
              <span className="text-[#3fb950] font-bold">+1 / Round per VIT &gt; 10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Quick Breaths Talent:</span>
              <span className="text-[#e6edf3] font-bold">2× All Energy Recovery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Damage Scaling Matrix */}
      <section className="tactical-card p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <h3 className="font-mono text-sm font-bold text-[#e6edf3] uppercase flex items-center gap-2">
            <span>⚔</span> Weapon Families &amp; Damage Type Formulas
          </h3>
          <span className="font-mono text-xs text-[#3fb950]">1.0.0.0 VERIFIED ENGINE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#0d1117] border border-[#30363d] space-y-2 font-mono text-xs">
            <div className="text-[#58a6ff] font-bold text-sm">SLASH &amp; BASH</div>
            <div className="text-[11px] text-[#8b949e]">Swords, Axes, Maces, Flails</div>
            <div className="pt-2 border-t border-[#30363d] space-y-1">
              <div className="flex justify-between">
                <span>Governing Stat:</span>
                <span className="text-[#e6edf3] font-bold">Strength (STR)</span>
              </div>
              <div className="flex justify-between">
                <span>Scaling Rate:</span>
                <span className="text-[#3fb950] font-bold">±5% per point from 10</span>
              </div>
              <div className="text-[10px] text-[#8b949e] mt-1">
                Primary weapon class for Warrior and Paladin frontliners.
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0d1117] border border-[#30363d] space-y-2 font-mono text-xs">
            <div className="text-[#3fb950] font-bold text-sm">PIERCE</div>
            <div className="text-[11px] text-[#8b949e]">Bows, Daggers, Throwing Blades</div>
            <div className="pt-2 border-t border-[#30363d] space-y-1">
              <div className="flex justify-between">
                <span>Governing Stat:</span>
                <span className="text-[#e6edf3] font-bold">Agility (AGI)</span>
              </div>
              <div className="flex justify-between">
                <span>Scaling Rate:</span>
                <span className="text-[#3fb950] font-bold">±5% per point from 10</span>
              </div>
              <div className="text-[10px] text-[#8b949e] mt-1">
                Governs Archer ranged strikes and Thief daggers.
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0d1117] border border-[#30363d] space-y-2 font-mono text-xs">
            <div className="text-[#bc8cff] font-bold text-sm">ARCANE &amp; RADIANT MAGIC</div>
            <div className="text-[11px] text-[#8b949e]">Staves, Holy Light, Curses, Summons</div>
            <div className="pt-2 border-t border-[#30363d] space-y-1">
              <div className="flex justify-between">
                <span>Governing Stat:</span>
                <span className="text-[#e6edf3] font-bold">Resolve (RES)</span>
              </div>
              <div className="flex justify-between">
                <span>1.0 Scaling Rate:</span>
                <span className="text-[#3fb950] font-bold">+7.5% per RES &gt; 10 (+25% 1.0 buff)</span>
              </div>
              <div className="text-[10px] text-[#8b949e] mt-1">
                Also dictates Druid and Warlock summon stats.
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#141a23] border-l-4 border-l-[#58a6ff] text-xs font-mono text-[#8b949e]">
          <strong className="text-[#e6edf3]">Halberds (Update 9.7.7):</strong> Halberds have a default attack range of <strong>2 hexes</strong>, allowing second-rank melee reach behind the frontline wall.
        </div>
      </section>

      {/* Section 3: Tactical Environmental Modifiers */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="tactical-card p-6 space-y-3">
          <div className="font-mono text-xs text-[#f0883e] uppercase font-bold flex items-center gap-2">
            <span>❄</span> 3. Unstable Platforms (-33% Debuff)
          </div>
          <h3 className="font-heading text-lg font-bold text-[#e6edf3]">
            Mud, Snow, and Sand Terrain Hazard
          </h3>
          <p className="text-xs text-[#8b949e] leading-relaxed">
            Introduced in patch 9.7.3, units standing on mud, deep snow, or sand tiles suffer from the <strong className="text-[#f0883e]">Unstable Platform debuff</strong>:
          </p>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-2 font-mono text-xs">
            <div className="flex justify-between text-[#f0883e] font-bold">
              <span>Hit Chance Penalty:</span>
              <span>-33%</span>
            </div>
            <div className="flex justify-between text-[#f0883e] font-bold">
              <span>Damage Output Penalty:</span>
              <span>-33%</span>
            </div>
            <div className="pt-2 border-t border-[#30363d] text-[11px] text-[#3fb950]">
              ✓ <strong className="text-[#e6edf3]">Flying Units Exception (9.7.7):</strong> 20+ flying monsters (bats, harpies, winged demons) completely ignore terrain penalties.
            </div>
          </div>
        </div>

        <div className="tactical-card p-6 space-y-3">
          <div className="font-mono text-xs text-[#bc8cff] uppercase font-bold flex items-center gap-2">
            <span>👁</span> 4. Combat Fog of War (Caves &amp; Night)
          </div>
          <h3 className="font-heading text-lg font-bold text-[#e6edf3]">
            Line-of-Sight Visibility Rules
          </h3>
          <p className="text-xs text-[#8b949e] leading-relaxed">
            Fog of war in <em>The Adventurers</em> is strictly a combat map mechanic:
          </p>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-2 font-mono text-xs text-[#8b949e]">
            <div>• <strong className="text-[#e6edf3]">Cave Interiors:</strong> Extreme darkness limits visibility strictly to adjacent hexes around your adventurers.</div>
            <div>• <strong className="text-[#e6edf3]">Outdoor Night Battles:</strong> Provides <strong className="text-[#58a6ff]">+250% view distance</strong> compared to caves, but enemies outside direct sight can ambush from the darkness.</div>
            <div>• <strong className="text-[#e6edf3]">Scout General Passive:</strong> Essential in fog maps to reveal hidden enemy resistances before spending heavy energy.</div>
          </div>
        </div>
      </section>

      {/* Section 4: Bleed-out Permadeath & AI Archetypes */}
      <section className="tactical-card p-6 space-y-4">
        <div className="font-mono text-xs text-[#f85149] uppercase font-bold flex items-center gap-2">
          <span>💀</span> 5. Permadeath, Bleed-Out Clocks &amp; Brutal AI
        </div>
        <h3 className="font-heading text-lg font-bold text-[#e6edf3]">
          Permadeath Mechanics &amp; Survival Passives
        </h3>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          When an adventurer reaches 0 HP, they do not instantly vanish—they enter <strong className="text-[#f85149]">Bleed-Out state</strong>. If combat ends or they are healed with Mend Wounds before the clock expires, they survive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <div className="text-[#f85149] font-bold">Hard To Kill</div>
            <div className="text-[#8b949e]">Doubles total bleed-out turns before death occurs.</div>
          </div>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <div className="text-[#58a6ff] font-bold">Still In This</div>
            <div className="text-[#8b949e]">Fatal blow fails once per combat encounter.</div>
          </div>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <div className="text-[#3fb950] font-bold">Just Kidding (Thief)</div>
            <div className="text-[#8b949e]">Fatal strike leaves character at 5 HP instead.</div>
          </div>
        </div>

        <div className="p-3 bg-[#0d1117] border border-[#30363d] text-xs font-mono text-[#8b949e]">
          <strong className="text-[#e6edf3]">Enemy AI Types (9.3.0+):</strong> <strong className="text-[#f0883e]">Brutal</strong> and <strong className="text-[#f0883e]">Feral</strong> enemy archetypes will deliberately bypass frontline tanks to focus down squishy casters and bleed-out targets. Keep Clerics guarded!
        </div>
      </section>
    </div>
  );
}
