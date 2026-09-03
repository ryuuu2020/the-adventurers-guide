import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '15 Personalities Morale Guide & Camp Duty Matrix',
  description:
    'Complete breakdown of all 15 personality traits in The Adventurers 1.0. Optimal camp assignment matrix for cooking, guarding, hunting, repair, and tavern resting to eliminate desertion and mutiny.',
  alternates: {
    canonical: '/camp-morale-guide',
  },
  keywords: [
    'The Adventurers personalities',
    'The Adventurers camp duties',
    'The Adventurers morale guide',
    'The Adventurers personality clashes',
    'The Adventurers camp assignment matrix',
    'The Adventurers wage morale',
  ],
};

interface PersonalityRule {
  name: string;
  archetype: string;
  likes: string[];
  dislikes: string[];
  bestCampDuty: string;
  worstMistake: string;
  recommendedRole: string;
  synergyWith: string[];
  conflictWith: string[];
}

const PERSONALITY_DATABASE: PersonalityRule[] = [
  {
    name: 'Adventurer',
    archetype: 'Combat Explorer',
    likes: ['Hit Something In Combat', 'Hunting For Food', 'Long Rest In Camp'],
    dislikes: ['Commission Equipment', 'Noone Hurt In Combat', 'Sleep In Tavern'],
    bestCampDuty: 'Hunting / Foraging (Zero Morale Burn, Free Rations)',
    worstMistake: 'Leaving them in town taverns or paying high blacksmith commissioning fees.',
    recommendedRole: 'Frontline Warrior or Roaming Thief',
    synergyWith: ['Hermit', 'Guardian'],
    conflictWith: ['Caregiver', 'Connector'],
  },
  {
    name: 'Caregiver',
    archetype: 'Empathic Sustainer',
    likes: ['Donate To Town', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Getting Hit', 'Hit Something In Combat', 'Sleep In Tavern'],
    bestCampDuty: 'Tending Sick / Morale Watch (Never put on offensive hunting)',
    worstMistake: 'Forcing them into aggressive melee trades or skipping town donations.',
    recommendedRole: 'Cleric or Backline Druid',
    synergyWith: ['Idealist', 'Guardian'],
    conflictWith: ['Rebel', 'Adventurer'],
  },
  {
    name: 'Connector',
    archetype: 'Social Diplomat',
    likes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
    bestCampDuty: 'Camp Socializing / Tavern Negotiation (Price Buffs)',
    worstMistake: 'Assigning to night watch or tool repair duties.',
    recommendedRole: 'Party Face / Bard-hybrid Paladin',
    synergyWith: ['Diplomat', 'Performer'],
    conflictWith: ['Hermit', 'Traditionalist'],
  },
  {
    name: 'Diplomat',
    archetype: 'Negotiator & Merchant',
    likes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Hit Something In Combat', 'Long Rest In Camp'],
    bestCampDuty: 'Shop Quartermaster (Combine with high Charisma for -20% purchase price)',
    worstMistake: 'Forcing onto dangerous guard shifts in wilderness camps.',
    recommendedRole: 'Wizard / Support Cleric',
    synergyWith: ['Connector', 'Leader'],
    conflictWith: ['Rebel', 'Hermit'],
  },
  {
    name: 'Guardian',
    archetype: 'Vigilant Protector',
    likes: ['Guarding The Camp', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Hunting For Food', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
    bestCampDuty: 'Camp Night Watch (Eliminates wilderness ambush surprise turns)',
    worstMistake: 'Wasting gold on luxury tavern suites or assigning to hunting.',
    recommendedRole: 'Paladin or Defensive Warrior',
    synergyWith: ['Traditionalist', 'Protector'],
    conflictWith: ['Innovator', 'Performer'],
  },
  {
    name: 'Hermit',
    archetype: 'Self-Reliant Wilderness Master',
    likes: ['Hunting For Food', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
    dislikes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
    bestCampDuty: 'Equipment Maintenance (Saves Blacksmith Gold) & Hunting',
    worstMistake: 'Forcing into camp gossip circles or paying urban church tithes.',
    recommendedRole: 'Sniper Archer or Solitary Thief',
    synergyWith: ['Adventurer', 'Traditionalist'],
    conflictWith: ['Connector', 'Performer', 'Diplomat'],
  },
  {
    name: 'Idealist',
    archetype: 'Righteous Believer',
    likes: ['Donate To Town', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Getting Hit', 'Long Rest In Camp', 'Order Normal Food And Drink'],
    bestCampDuty: 'Field Doctor / Shrine Keeper',
    worstMistake: 'Allowing company members to take critical bleeds or skipping alms.',
    recommendedRole: 'Cleric or Divine Paladin',
    synergyWith: ['Caregiver', 'Guardian'],
    conflictWith: ['Warlock', 'Mercenary-mindset Rebels'],
  },
  {
    name: 'Innovator',
    archetype: 'Artisan Crafter',
    likes: ['Cook Food In Camp', 'Equipment Enchanted', 'Order Fancy Food And Drink'],
    dislikes: ['Guarding The Camp', 'Heal Self', 'Maintain Equipment In Camp'],
    bestCampDuty: 'Camp Chef (Boosts company-wide recovery buffers per ration)',
    worstMistake: 'Assigning to repetitive tool scraping or boring night watches.',
    recommendedRole: 'Wizard or Alchemical Support',
    synergyWith: ['Performer', 'Connector'],
    conflictWith: ['Traditionalist', 'Guardian'],
  },
  {
    name: 'Leader',
    archetype: 'Expedition Commander',
    likes: ['Guarding The Camp', 'Commission Equipment', 'Noone Hurt In Combat'],
    dislikes: ['Heal Self', 'Hunting For Food', 'Sleep In Tavern'],
    bestCampDuty: 'Tactical Watch / Contract Briefing',
    worstMistake: 'Putting them on basic food foraging while staying in taverns.',
    recommendedRole: 'Commander Warrior or Born Leader Archetype',
    synergyWith: ['Diplomat', 'Traditionalist'],
    conflictWith: ['Rebel'],
  },
  {
    name: 'Performer',
    archetype: 'Troubadour & Morale Anchor',
    likes: ['Order Fancy Food And Drink', 'Sleep In Tavern', 'Socialize In Camp'],
    dislikes: ['Commission Equipment', 'Guarding The Camp', 'Maintain Equipment In Camp'],
    bestCampDuty: 'Campfire Storyteller (Recovers company morale by +15 per rest)',
    worstMistake: 'Forcing into harsh manual equipment upkeep or cold night patrols.',
    recommendedRole: 'Flank Thief or Support Caster',
    synergyWith: ['Connector', 'Innovator'],
    conflictWith: ['Hermit', 'Guardian'],
  },
  {
    name: 'Protector',
    archetype: 'Aegis Defender',
    likes: ['Guarding The Camp', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Commission Equipment', 'Hunting For Food', 'Sleep In Tavern'],
    bestCampDuty: 'Perimeter Defense & Chokepoint Reinforcement',
    worstMistake: 'Wasting company treasury in urban taverns.',
    recommendedRole: 'Shield Paladin or Heavy Warrior',
    synergyWith: ['Guardian', 'Caregiver'],
    conflictWith: ['Adventurer', 'Rebel'],
  },
  {
    name: 'Rebel',
    archetype: 'Wildcard Maverick',
    likes: ['Hit Something In Combat', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
    dislikes: ['Donate To Town', 'Maintain Equipment In Camp', 'Noone Hurt In Combat'],
    bestCampDuty: 'High-Risk Scouting or Forward Choke Defense',
    worstMistake: 'Enforcing rigid camp chores or donating hard-earned gold to town nobles.',
    recommendedRole: 'Two-Handed Berserker Warrior or Assassin Thief',
    synergyWith: ['Adventurer'],
    conflictWith: ['Caregiver', 'Leader', 'Guardian', 'Traditionalist'],
  },
  {
    name: 'Scholar',
    archetype: 'Lore Analyst',
    likes: ['Commission Equipment', 'Equipment Enchanted', 'Socialize In Camp'],
    dislikes: ['Getting Hit', 'Hunting For Food', 'Maintain Equipment In Camp'],
    bestCampDuty: 'Grimoire Deciphering & Magic Item Enchantment',
    worstMistake: 'Sending them to hunt beasts in snowy marshes.',
    recommendedRole: 'Wizard or Warlock',
    synergyWith: ['Innovator', 'Diplomat'],
    conflictWith: ['Rebel', 'Hermit'],
  },
  {
    name: 'Survivor',
    archetype: 'Hardened Veteran',
    likes: ['Hunting For Food', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
    dislikes: ['Donate To Town', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
    bestCampDuty: 'Equipment Maintenance (0 Gold Cost Weapon Durability Restore)',
    worstMistake: 'Buying luxury lifestyle drinks in port cities.',
    recommendedRole: 'Archer or Frontline Tank',
    synergyWith: ['Hermit', 'Adventurer'],
    conflictWith: ['Connector', 'Performer'],
  },
  {
    name: 'Traditionalist',
    archetype: 'Discipline Master',
    likes: ['Guarding The Camp', 'Maintain Equipment In Camp', 'Order Normal Food And Drink'],
    dislikes: ['Donate To Town', 'Equipment Enchanted', 'Hunting For Food'],
    bestCampDuty: 'Rigid Equipment Maintenance & Weapon Sharpening',
    worstMistake: 'Spending company funds on experimental enchantments or wild hunting.',
    recommendedRole: 'Warrior or Paladin',
    synergyWith: ['Guardian', 'Leader', 'Survivor'],
    conflictWith: ['Innovator', 'Rebel'],
  },
];

export default function CampMoraleGuidePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-3 border-b border-[#30363d] pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#f0883e] font-mono text-xs">
          <span>⚠️ 1.0 EXPEDITION LOGISTICS</span>
          <span>//</span>
          <span>PREVENT MUTINY &amp; DESERTION</span>
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#e6edf3] tracking-tight">
          15 Personalities Morale Guide &amp; Camp Duty Matrix
        </h1>
        <p className="text-sm text-[#8b949e] max-w-3xl leading-relaxed font-sans">
          In <strong className="text-[#e6edf3]">The Adventurers</strong>, gold is only half the battle. If an adventurer&apos;s morale drops below threshold due to conflicting personality duties, they suffer severe combat hit penalties, demand double daily wages, or permanently desert your company during the night.
        </p>
      </section>

      {/* Core Rules Callout */}
      <section className="tactical-card p-6 bg-[#161b22] border-l-4 border-l-[#58a6ff] space-y-3">
        <div className="flex items-center justify-between text-[#58a6ff] font-mono text-xs font-bold">
          <span>◈ THE GOLDEN RULE OF EXPEDITION MORALE</span>
          <span className="text-[10px] bg-[#58a6ff]/20 px-2 py-0.5 border border-[#58a6ff]/40">PATCH 1.0 VERIFIED</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#8b949e] font-mono">
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <span className="text-[#e6edf3] font-bold block">1. Never Clash Opposites</span>
            <p className="text-[11px] font-sans">Pairing a <em>Hermit</em> with a <em>Connector</em> guarantees someone loses -10 morale every single camp rest.</p>
          </div>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <span className="text-[#e6edf3] font-bold block">2. Assign Strict Camp Roles</span>
            <p className="text-[11px] font-sans">Assign duties strictly matching Likes: Guardians guard, Survivors repair, Innovators cook, Hermits hunt.</p>
          </div>
          <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
            <span className="text-[#e6edf3] font-bold block">3. Tavern vs Camp Rules</span>
            <p className="text-[11px] font-sans">Rebels and Performers thrive in Taverns. Hermits, Guardians, and Survivors hate them. Plan city stops carefully.</p>
          </div>
        </div>
      </section>

      {/* Quick Matrix Table */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#58a6ff]">⬡</span> Optimal Camp Duty Quick-Reference Matrix
          </h2>
          <span className="text-xs font-mono text-[#8b949e]">15 Active Archetypes</span>
        </div>
        <div className="overflow-x-auto border border-[#30363d]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#161b22] text-[#8b949e] uppercase border-b border-[#30363d]">
              <tr>
                <th className="p-3">Personality</th>
                <th className="p-3">Best Camp Assignment</th>
                <th className="p-3">Combat Affinity</th>
                <th className="p-3">Fatal Mistake to Avoid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d] bg-[#0d1117]">
              {PERSONALITY_DATABASE.map((p) => (
                <tr key={p.name} className="hover:bg-[#161b22]/50 transition-colors">
                  <td className="p-3 font-bold text-[#58a6ff]">{p.name}</td>
                  <td className="p-3 text-[#3fb950]">{p.bestCampDuty}</td>
                  <td className="p-3 text-[#e6edf3] font-sans text-[11px]">{p.recommendedRole}</td>
                  <td className="p-3 text-[#f0883e] font-sans text-[11px]">{p.worstMistake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Deep Dive Cards */}
      <section className="space-y-6">
        <h2 className="font-heading text-lg font-bold text-[#e6edf3] flex items-center gap-2">
          <span className="text-[#58a6ff]">⚔</span> Full Breakdown &amp; Likes / Dislikes Data
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONALITY_DATABASE.map((p) => (
            <div key={p.name} className="tactical-card p-5 space-y-3 bg-[#161b22] flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
                  <span className="font-mono font-bold text-base text-[#e6edf3]">{p.name}</span>
                  <span className="hex-badge text-[#58a6ff] border-[#58a6ff]/40 text-[10px]">{p.archetype}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px]">
                    <span className="font-mono text-[#3fb950] font-semibold block">LIKES (+Morale):</span>
                    <ul className="list-disc list-inside text-[#8b949e] pl-1 font-sans">
                      {p.likes.map((like) => (
                        <li key={like}>{like}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px]">
                    <span className="font-mono text-[#f85149] font-semibold block">DISLIKES (-Morale):</span>
                    <ul className="list-disc list-inside text-[#8b949e] pl-1 font-sans">
                      {p.dislikes.map((dislike) => (
                        <li key={dislike}>{dislike}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#30363d] space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between text-[#8b949e]">
                  <span>Best Synergy:</span>
                  <span className="text-[#58a6ff]">{p.synergyWith.join(', ')}</span>
                </div>
                <div className="flex justify-between text-[#8b949e]">
                  <span>High Risk With:</span>
                  <span className="text-[#f85149]">{p.conflictWith.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA */}
      <section className="tactical-card p-6 bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-base text-[#e6edf3]">
            Test Your Roster In The Party Planner
          </h3>
          <p className="text-xs text-[#8b949e] mt-1 font-sans">
            Our interactive 6-stat calculator actively cross-checks personality traits and alerts you if any member suffers morale clash in camp.
          </p>
        </div>
        <Link
          href="/planner"
          className="px-4 py-2.5 bg-[#58a6ff] hover:bg-[#478ed8] text-[#0d1117] font-mono text-xs font-bold transition-all shrink-0"
        >
          OPEN PARTY PLANNER →
        </Link>
      </section>
    </div>
  );
}
