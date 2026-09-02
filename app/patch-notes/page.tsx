export default function PatchNotesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#30363d] pb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-[#58a6ff]">UPDATE LOG // STEAM 1.0 CHRONOLOGY</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e6edf3]">
          The Adventurers Patch Notes &amp; Changelog History
        </h2>
        <p className="text-xs text-[#8b949e] mt-1">
          Complete official changelog from Eternal Vigilance Entertainment: Full 1.0.0.0 release (Aug 31, 2026), late Early Access combat overhauls, modding integration, and balance history.
        </p>
      </div>

      {/* 1.0.0.0 Release Box */}
      <section className="tactical-card p-6 bg-[#161b22] border-l-4 border-l-[#3fb950] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#3fb950]"></span>
            <h3 className="font-heading text-xl font-bold text-[#e6edf3]">
              v1.0.0.0 Full Release — &quot;Out of Early Access&quot;
            </h3>
          </div>
          <div className="font-mono text-xs text-[#3fb950] bg-[#3fb950]/10 px-2.5 py-1 border border-[#3fb950]/30">
            LIVE // AUG 31, 2026
          </div>
        </div>

        <div className="space-y-3 text-xs font-mono text-[#8b949e]">
          <div>
            <span className="text-[#58a6ff] font-bold">[COMBAT BALANCE]</span>
            <ul className="list-disc pl-5 mt-1 space-y-1 font-sans text-xs">
              <li><strong className="text-[#e6edf3]">Agility Defense Nerf:</strong> Block chance reduced by 25%, Parry chance reduced by 33%. Pierce weapon damage remains on Agility.</li>
              <li><strong className="text-[#e6edf3]">Resolve Magic Buff:</strong> Magic damage scaling from Resolve increased by an additional +25%.</li>
              <li><strong className="text-[#e6edf3]">Social Relationship Visibility:</strong> Combat adjacency bonuses from party relationships now render dynamic tooltips showing current bonus values (+50% social bonus applied).</li>
            </ul>
          </div>

          <div>
            <span className="text-[#58a6ff] font-bold">[FORTS &amp; REQUESTS]</span>
            <ul className="list-disc pl-5 mt-1 space-y-1 font-sans text-xs">
              <li>Fixed goblin fort battle generation logic.</li>
              <li>Added comprehensive Fort Statistics telemetry screen.</li>
              <li>Fort request turnaround duration decreased by over 50% (minimum 2 days).</li>
              <li>Fort request rewards increased by approximately 30%.</li>
            </ul>
          </div>

          <div>
            <span className="text-[#58a6ff] font-bold">[QUESTS &amp; UI]</span>
            <ul className="list-disc pl-5 mt-1 space-y-1 font-sans text-xs">
              <li>Added formal quest completion narrative text to all active quests.</li>
              <li>Cleaned up dynamic tooltip caches to prevent displaying stale character state.</li>
              <li>Enhanced translations and layout spacing for wide monitors.</li>
            </ul>
          </div>

          <div>
            <span className="text-[#58a6ff] font-bold">[FULL MODDING EXPANSION]</span>
            <ul className="list-disc pl-5 mt-1 space-y-1 font-sans text-xs">
              <li>Exposed JSON data schemas for Abilities, Combat Actions, Fort Buildings, Fort Requests, Quests, and Towns.</li>
              <li>Supports custom icon overrides via relative <code className="text-[#58a6ff]">icons/filename.png</code> paths.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* v0.9.9.0 - Modding Foundation */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.9.0 (Beta / Live Prep) — Modding Systems Initial Rollout
          </div>
          <span className="font-mono text-xs text-[#8b949e]">AUG 9, 2026</span>
        </div>
        <p className="text-xs text-[#8b949e]">
          Introduced initial external modding framework exposing raw game definitions for Classes, Creatures, and Item data. Polished over 500+ item icons and resolved blacksmith rush order queues.
        </p>
      </section>

      {/* v0.9.7.7 - Halberd Reach & Flyer Terrain Pass */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.7 — Halberd Range &amp; Flying Creatures Terrain Immunity
          </div>
          <span className="font-mono text-xs text-[#8b949e]">JULY 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Halberds:</strong> Updated default attack range to <strong>2 hexes</strong>.</div>
          <div>• <strong className="text-[#e6edf3]">Flying Creatures:</strong> 20+ flying monsters (bats, harpies, winged demons) exempt from difficult terrain penalties.</div>
          <div>• <strong className="text-[#e6edf3]">Summoner XP:</strong> Summons now award full experience points to the summoner character upon kill.</div>
        </div>
      </section>

      {/* v0.9.7.5 - Fog of War Balance Pass */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.5 — Fog of War Calibration &amp; Social Buffs
          </div>
          <span className="font-mono text-xs text-[#8b949e]">JUNE 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Social Bonuses:</strong> Social relationship bonuses increased by +50%.</div>
          <div>• <strong className="text-[#e6edf3]">Cave Visibility:</strong> Cave line-of-sight increased by +50% from initial FOW release. Night battles increased by +20%.</div>
          <div>• <strong className="text-[#e6edf3]">Map Labels:</strong> Added optional setting for town labels on the world map.</div>
        </div>
      </section>

      {/* v0.9.7.3 & v0.9.7.2 - Unstable Platforms & Blacksmith Rush */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.2 – v0.9.7.3 — Unstable Platforms &amp; Blacksmith Timing
          </div>
          <span className="font-mono text-xs text-[#8b949e]">MAY 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Unstable Platforms:</strong> Added flat -33% hit chance and -33% damage penalty when standing in mud, sand, or snow.</div>
          <div>• <strong className="text-[#e6edf3]">Blacksmith Rush Jobs:</strong> Added instant craft/smelt rush orders (+5g fee). Standard weapon crafting reduced to 2 hours, smelting to 1 hour.</div>
          <div>• <strong className="text-[#e6edf3]">Economy Adjustment:</strong> Bag of Gems sale price reduced by 33%.</div>
        </div>
      </section>
    </div>
  );
}
