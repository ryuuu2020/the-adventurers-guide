import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patch Notes & Changelog: 1.0.0.0 and Early Access History',
  description:
    'Official changelog for The Adventurers: 1.0.0.0 release balance changes, Agility defence nerf, Resolve magic buff, fort request retiming and the full Early Access patch history.',
  alternates: { canonical: '/patch-notes/' },
};

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
        <p className="font-mono text-[10px] text-[#8b949e] mt-2">
          Last verified 2026-09-07 against the Steam news feed for appid 3062500 and the matching patch announcements.
        </p>
      </div>

      {/* How to read this log */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <h3 className="font-mono text-sm font-bold text-[#e6edf3] uppercase tracking-wider">
          // HOW TO READ THIS CHANGELOG
        </h3>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          The Adventurers left Early Access on August 31, 2026 with the 1.0.0.0 full-release build, and every entry below is drawn from the developer&apos;s official Steam announcements rather than second-hand summaries. Throughout late Early Access, Eternal Vigilance Entertainment ran a dual-branch cadence: risky experiments such as the Fog of War system and the modding framework landed on the beta branch first, while validated balance fixes shipped to the live branch in the same announcement cycle. That rhythm matters when you are reading this log, because a change listed under a beta header sometimes reached the live build weeks later.
        </p>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          For players returning after the 1.0 launch, the short version is this: Agility-built defenders lost a large share of their block and parry reliability, Resolve-scaled casters gained another 25% on magic damage scaling, fort requests became dramatically faster and more rewarding, and the game now ships with an external JSON modding schema. If you are rebuilding a party around those swings, our <Link href="/talent-trees-guide" className="text-[#58a6ff] hover:underline">talent trees database</Link> and <Link href="/camp-morale-guide" className="text-[#58a6ff] hover:underline">camp morale guide</Link> both reflect the 1.0.0.0 numbers.
        </p>
      </section>

      {/* 1.0.0.0 Release Box */}
      <section className="tactical-card p-6 bg-[#161b22] border-l-4 border-l-[#3fb950] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#3fb950]"></span>
            <h3 className="font-heading text-xl font-bold text-[#e6edf3]">
              v1.0.0.0 Full Release: &quot;Out of Early Access&quot;
            </h3>
          </div>
          <div className="font-mono text-xs text-[#3fb950] bg-[#3fb950]/10 px-2.5 py-1 border border-[#3fb950]/30">
            LIVE // AUG 31, 2026
          </div>
        </div>

        <p className="text-xs text-[#8b949e] leading-relaxed">
          The 1.0 release announcement, posted by developer Eternal Vigilance Ent on the day of launch, framed the update as the end of a long community-driven Early Access run; the developer described the project as having been &quot;mostly a solo side project,&quot; supported by contracted artists and a feedback-heavy player base. Alongside the combat and fort changes listed below, the announcement confirmed that the world of Shion will continue beyond 1.0, that more game elements are planned to open up to modding based on demand, and that three new official guides now exist: The Adventurer Guide (covering the adventurers and their surrounding systems), The Towns Guide (town features, shops, prosperity and relationships), and The Modding Guide (creating mods and uploading them to the Steam Workshop).
        </p>

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

        <p className="text-xs text-[#8b949e] leading-relaxed">
          Practically, the 1.0.0.0 modding schema is the headline for long-term players: with Abilities, Combat Actions, Fort Buildings, Fort Requests, Quests, and Towns all exposed as editable JSON, community balance patches and total conversions are now possible without touching compiled game files. The fort request retiming is the headline for everyone else: a halved wait on fort turnarounds changes how often you can realistically bank on fort rewards during a long expedition, which in turn changes camp and economy decisions documented in our other guides.
        </p>
      </section>

      {/* v0.9.9.0 - Modding Foundation */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.9.0 (Beta / Live Prep): Modding Systems Initial Rollout
          </div>
          <span className="font-mono text-xs text-[#8b949e]">AUG 9, 2026</span>
        </div>
        <p className="text-xs text-[#8b949e]">
          Introduced initial external modding framework exposing raw game definitions for Classes, Creatures, and Item data. Polished over 500+ item icons and resolved blacksmith rush order queues.
        </p>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          In the developer&apos;s own announcement, the beta branch rollout was described as an intentionally cautious first step: the classes, creatures and items definitions went live first precisely because modding without the game&apos;s internal safety checks &quot;could cause oddities,&quot; so the developer wanted to validate the pipeline before exposing more systems. The same post confirmed that when mod support hit the live branch, a full guide on overriding icons and portraits via relative paths (for example, dropping a replacement into <code className="text-[#58a6ff]">icons/filename.png</code>) would follow. The guide structure that later became the official Modding Guide shipped with 1.0.
        </p>
      </section>

      {/* Final Demo Update */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            Final Demo Update: Pre-Release Snapshot of the 1.0 Build
          </div>
          <span className="font-mono text-xs text-[#8b949e]">AUG 2, 2026</span>
        </div>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          Roughly a month before launch, the developer pushed an update to the demo branch, the first in over nine months, and flagged it as likely the final demo update until after release. The announcement previewed changes landing in the demo, including an extended demo length, giving prospective players a representative slice of the near-final 1.0 systems. If you tried the demo before June 2026, you were playing a snapshot of the game as it stood nearly a full development cycle earlier; the fog of war, unstable-terrain, and social-bonus changes listed below all postdate that older demo build.
        </p>
      </section>

      {/* v0.9.7.7 - Halberd Reach & Flyer Terrain Pass */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.7: Halberd Range &amp; Flying Creatures Terrain Immunity
          </div>
          <span className="font-mono text-xs text-[#8b949e]">JULY 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Halberds:</strong> Updated default attack range to <strong>2 hexes</strong>.</div>
          <div>• <strong className="text-[#e6edf3]">Flying Creatures:</strong> 20+ flying monsters (bats, harpies, winged demons) exempt from difficult terrain penalties.</div>
          <div>• <strong className="text-[#e6edf3]">Summoner XP:</strong> Summons now award full experience points to the summoner character upon kill.</div>
        </div>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          This was the patch that made reach weapons a genuine positioning tool rather than a niche pick: a two-hex default reach means a halberd line can strike over a front-row ally, which pairs naturally with the difficult-terrain penalties introduced in the v0.9.7.x series. The flyer immunity change is equally tactical: twenty-plus flying creature types now ignore mud, sand, and snow slowdowns, so the terrain traps you set for ground packs simply do not apply to the bat and harpy encounters in the same region.
        </p>
      </section>

      {/* v0.9.7.5 - Fog of War Balance Pass */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.5: Fog of War Calibration &amp; Social Buffs
          </div>
          <span className="font-mono text-xs text-[#8b949e]">JUNE 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Social Bonuses:</strong> Social relationship bonuses increased by +50%.</div>
          <div>• <strong className="text-[#e6edf3]">Cave Visibility:</strong> Cave line-of-sight increased by +50% from initial FOW release. Night battles increased by +20%.</div>
          <div>• <strong className="text-[#e6edf3]">Map Labels:</strong> Added optional setting for town labels on the world map.</div>
        </div>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          Announced as a rapid calibration pass, this patch walked back some of the harsher edge cases from the first Fog of War release while simultaneously strengthening the social system it interacts with. A +50% bump to social relationship bonuses, later surfaced in tooltips at 1.0, turned party composition from a pure combat spreadsheet into a relationship-management problem, which is the entire premise of our <Link href="/camp-morale-guide" className="text-[#58a6ff] hover:underline">camp morale guide</Link>.
        </p>
      </section>

      {/* v0.9.7.2 & v0.9.7.3 - Unstable Platforms & Blacksmith Rush */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
          <div className="font-mono text-sm font-bold text-[#e6edf3]">
            v0.9.7.2 to v0.9.7.3: Unstable Platforms &amp; Blacksmith Timing
          </div>
          <span className="font-mono text-xs text-[#8b949e]">MAY 2026</span>
        </div>
        <div className="space-y-2 text-xs font-mono text-[#8b949e]">
          <div>• <strong className="text-[#e6edf3]">Unstable Platforms:</strong> Added flat -33% hit chance and -33% damage penalty when standing in mud, sand, or snow.</div>
          <div>• <strong className="text-[#e6edf3]">Blacksmith Rush Jobs:</strong> Added instant craft/smelt rush orders (+5g fee). Standard weapon crafting reduced to 2 hours, smelting to 1 hour.</div>
          <div>• <strong className="text-[#e6edf3]">Economy Adjustment:</strong> Bag of Gems sale price reduced by 33%.</div>
        </div>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          The unstable-platform debuff was described by the developer as a follow-up to the broader difficult-terrain update: fighting from mud, sand, or snow now carries a flat -33% to both hit chance and damage, which reshapes lure-and-ambush play on outdoor maps and makes high ground worth contesting. On the economy side, the blacksmith rush system (+5g for instant craft or smelt) cut standard weapon crafting to two hours and smelting to one, while the Bag of Gems vendor price dropped by a third, a quiet nerf to the gem-dump gold strategy many Early Access parties relied on.
        </p>
      </section>

      {/* Tracking future updates */}
      <section className="tactical-card p-6 bg-[#141a23] space-y-3">
        <h3 className="font-mono text-sm font-bold text-[#e6edf3] uppercase tracking-wider">
          // TRACKING FUTURE UPDATES
        </h3>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          Post-1.0, the developer&apos;s stated direction is continued modding expansion and deeper documentation of the game&apos;s many interlocking systems, with the world of Shion set to continue. This page tracks balance-relevant changes to those systems; when a new patch lands, entries are added only after the numbers are verified against the official announcement. For the mechanical detail behind the versions listed here, including the 10-point pivot stat formulas, terrain penalties, and camp personality clashes, start with the <Link href="/" className="text-[#58a6ff] hover:underline">guide index</Link> or run your own party through the <Link href="/planner" className="text-[#58a6ff] hover:underline">Party Planner</Link>.
        </p>
      </section>
    </div>
  );
}
