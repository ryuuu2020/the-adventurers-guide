'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  level: number | 'Default';
  type: 'Action' | 'Bonus' | 'Passive' | 'Trigger' | 'Area Influence';
  desc: string;
}

interface ClassData {
  name: string;
  role: string;
  primaryStat: string;
  weaponAffinities: string[];
  balance10Notes: string;
  allyBonusName: string;
  allyBonusMax: string;
  overview: string;
  skills: Skill[];
}

const CLASSES_DATA: Record<string, ClassData> = {
  Warrior: {
    name: 'Warrior',
    role: 'Frontline Tank & Striker',
    primaryStat: 'Strength (Slash/Bash), Vitality (HP/Energy Rec)',
    weaponAffinities: ['Swords', 'Axes', 'Maces', 'Shields', 'Two-Handers'],
    balance10Notes: 'Unstoppable denies flanking Gang Up bonuses. Halberds hit at Range 2. Armor proficiency mitigates heavy armor energy penalty by 25%.',
    allyBonusName: 'Reduced Damage Taken',
    allyBonusMax: '-21% at Cherished',
    overview: 'The quintessential frontline anchor. Built around holding choke hexes with Wide Swing, forcing aggro via Come At Me, and absorbing damage without giving up gang-up bonuses.',
    skills: [
      { name: 'Wide Swing', level: 'Default', type: 'Action', desc: 'Attacks enemies in a wide arc in front of the warrior.' },
      { name: 'Come At Me', level: 2, type: 'Bonus', desc: 'Forces an enemy to target the warrior.' },
      { name: 'Double Attack', level: 2, type: 'Action', desc: 'Performs two basic physical attacks on a single target.' },
      { name: 'Wound', level: 2, type: 'Action', desc: 'Wounds the target and causes a Bleed effect over time.' },
      { name: 'Protection', level: 4, type: 'Bonus', desc: 'Reduces damage taken by 30% and damage dealt by 30%.' },
      { name: 'Reckless', level: 4, type: 'Bonus', desc: 'Increases damage dealt by 30% but increases damage taken by 30%.' },
      { name: 'Leader', level: 4, type: 'Bonus', desc: 'Increases other party members’ damage by 20%.' },
      { name: 'Save Them', level: 6, type: 'Bonus', desc: 'Gives adjacent allies +20% Dodge chance.' },
      { name: 'Slam', level: 6, type: 'Action', desc: 'Stuns the target, interrupting enemy turn.' },
      { name: 'Second Wind', level: 6, type: 'Bonus', desc: 'Restores 50% Energy and 50% Health. Usable once per battle.' },
      { name: 'Shake It Off', level: 8, type: 'Bonus', desc: 'Removes all debilitating status effects. Usable once per battle.' },
      { name: 'Aim For The Knee', level: 8, type: 'Action', desc: 'Stops a target from moving (Pins enemy to hex).' },
      { name: 'Too Quick', level: 8, type: 'Bonus', desc: 'Reduces incoming damage proportionally to remaining energy.' },
      { name: 'Frenzy', level: 10, type: 'Action', desc: 'Performs a massive strike using a large portion of energy.' },
      { name: 'Roar', level: 10, type: 'Bonus', desc: 'Shouts at nearby enemies, reducing their damage by 20%.' },
      { name: 'Unstoppable', level: 10, type: 'Passive', desc: 'Enemies cannot receive the Gang Up damage bonus against you.' },
    ],
  },
  Archer: {
    name: 'Archer',
    role: 'Backline Pierce Striker & Sniper',
    primaryStat: 'Agility (Pierce Damage), Resolve (Energy)',
    weaponAffinities: ['Bows (Pierce Scaling)'],
    balance10Notes: '1.0 nerfed Agility block (-25%) and parry (-33%), so Archers must rely on range and Better Alone resistance rather than melee evasion.',
    allyBonusName: 'Critical Hit Chance',
    allyBonusMax: '+21% at Cherished',
    overview: 'Long-range precision specialist. Scales damage from Agility. Excels at pinning runners, executing single targets with Aimed Shot crits, and holding isolated backline perches with Better Alone.',
    skills: [
      { name: 'Double Shot', level: 'Default', type: 'Action', desc: 'Fires 2 precision arrows at one single target.' },
      { name: 'Aimed Shot', level: 2, type: 'Action', desc: 'Guarantees a Critical Hit on the target.' },
      { name: 'Pin', level: 2, type: 'Action', desc: 'Temporarily stops an enemy from moving across the hex grid.' },
      { name: 'Eagle Focus', level: 2, type: 'Bonus', desc: 'Increases attack damage by 25%.' },
      { name: 'Dodge', level: 4, type: 'Bonus', desc: 'Increases Dodge Chance by 25%.' },
      { name: 'Snap', level: 4, type: 'Bonus', desc: 'Instantly removes a debilitating negative effect.' },
      { name: 'Massive Shot', level: 4, type: 'Action', desc: 'Fires a high-velocity arrow that consumes heavy energy.' },
      { name: 'Mark', level: 6, type: 'Bonus', desc: 'Marks an enemy, increasing all incoming damage by 20%.' },
      { name: 'Stun', level: 6, type: 'Action', desc: 'Stuns an enemy, preventing attacks and movement.' },
      { name: 'Long Shot', level: 6, type: 'Action', desc: 'Fires an arrow twice as far as a normal shot.' },
      { name: 'Poisoned Arrow', level: 8, type: 'Action', desc: 'Poisons the target and deals damage over time.' },
      { name: 'Sleep', level: 8, type: 'Action', desc: 'Prevents a target from acting until it takes damage.' },
      { name: 'Burst Shot', level: 8, type: 'Action', desc: 'Fires a shot that strikes the primary target and adjacent hexes.' },
      { name: 'Barbed Arrow', level: 10, type: 'Action', desc: 'Causes severe Bleed on hit.' },
      { name: 'Blinding Shot', level: 10, type: 'Action', desc: 'Fires an arrow that applies Blind (reduces hit/defense by 50%).' },
      { name: 'Better Alone', level: 10, type: 'Area Influence', desc: 'Grants 30% damage resistance when standing isolated with no adjacent allies.' },
    ],
  },
  Thief: {
    name: 'Thief',
    role: 'Flanking Assassin & Critical Striker',
    primaryStat: 'Agility (Pierce), Luck (Crit & Search)',
    weaponAffinities: ['Daggers (Pierce)'],
    balance10Notes: 'Finish Them auto-crits targets below 30% HP. Hamstring bonus action properly respects action economy in 1.0.',
    allyBonusName: 'Hit Chance Bonus',
    allyBonusMax: '+32% at Cherished',
    overview: 'High-risk flanker that thrives on positioning. Uses Throw Sand to cripple enemy defense, exploits Gang Up multipliers, and finishes low-health targets instantly.',
    skills: [
      { name: 'Double Stab', level: 'Default', type: 'Action', desc: 'Performs two quick dagger strikes on a target.' },
      { name: 'Poison Blade', level: 2, type: 'Action', desc: 'Applies Poison to main weapon attacks for 5 turns.' },
      { name: 'Throw Sand', level: 2, type: 'Bonus', desc: 'Reduces an enemy’s Block, Dodge, and Parry chances by 50%.' },
      { name: 'Gang Up', level: 2, type: 'Bonus', desc: 'Increases Critical Hit chance for every ally surrounding the target.' },
      { name: 'Finish Them', level: 4, type: 'Bonus', desc: 'Automatically deals critical hits against targets below 30% Health.' },
      { name: 'Elusive', level: 4, type: 'Bonus', desc: 'Dodging an attack grants a 50% chance to Crit on the next strike.' },
      { name: 'Hamstring', level: 4, type: 'Bonus', desc: 'Stops an enemy from moving across the hex grid.' },
      { name: 'Hit The Mark', level: 6, type: 'Bonus', desc: 'Guarantees a Critical Hit on the next attack.' },
      { name: 'Tricksy', level: 6, type: 'Bonus', desc: 'Increases Dodge Chance by 50%.' },
      { name: 'Burst Of Adrenaline', level: 6, type: 'Bonus', desc: 'Restores all Energy instantly but sacrifices 50% of current Health.' },
      { name: 'With A Twist', level: 8, type: 'Action', desc: 'Inflicts a vicious Bleed effect on the target.' },
      { name: 'Distract', level: 8, type: 'Bonus', desc: 'Forces an enemy to stop targeting you if an ally is adjacent.' },
      { name: 'We Finish This', level: 8, type: 'Action', desc: 'Applies Poison and empowers all party members to score guaranteed critical hits.' },
      { name: 'Triple Threat', level: 10, type: 'Action', desc: 'Performs three lightning-fast dagger strikes in one action.' },
      { name: 'Just Kidding', level: 10, type: 'Bonus', desc: 'A fatal blow leaves you at 5 Health instead of death.' },
      { name: 'In This Together', level: 10, type: 'Passive', desc: 'Grants +10% bonus damage for every ally touching the enemy.' },
    ],
  },
  Wizard: {
    name: 'Wizard',
    role: 'Arcane Controller & Elemental AoE',
    primaryStat: 'Resolve (Magic Damage & Energy Pool)',
    weaponAffinities: ['Quarterstaves', 'Magic Staves'],
    balance10Notes: 'Version 1.0 increased Resolve magic damage scaling by +25%. Chain Lightning and Ice Storm deal massive cluster damage.',
    allyBonusName: 'Magic Damage Bonus',
    allyBonusMax: '+25% at Cherished',
    overview: 'The elemental powerhouse of Shion. Spends Resolve energy to freeze chokepoints with Frost Nova, incinerate clumps with Fireball, and bounce Chain Lightning between 4 foes.',
    skills: [
      { name: 'Frost Nova', level: 'Default', type: 'Action', desc: 'Fires an icy projectile with a high chance to stun the target.' },
      { name: 'Missiles', level: 2, type: 'Action', desc: 'Fires 3 separate arcane magic missiles at a target.' },
      { name: 'Fireball', level: 2, type: 'Action', desc: 'Conjures an explosive Fireball striking the target and adjacent hexes.' },
      { name: 'Arcane Shield', level: 2, type: 'Bonus', desc: 'Grants the wizard temporary health via a protective barrier.' },
      { name: 'Energy Drain', level: 4, type: 'Action', desc: 'Converts enemy health into energy for the caster.' },
      { name: 'Chain Lightning', level: 4, type: 'Action', desc: 'Shocks up to 4 adjacent enemies in a continuous arc.' },
      { name: 'Ice Armor', level: 4, type: 'Bonus', desc: 'Reduces all incoming damage by 25%.' },
      { name: 'Ignite', level: 6, type: 'Action', desc: 'Sets a target ablaze, dealing persistent fire damage each turn.' },
      { name: 'Freeze Target', level: 6, type: 'Action', desc: 'Completely freezes a target, preventing all actions.' },
      { name: 'Blind', level: 6, type: 'Bonus', desc: 'Reduces target Block, Dodge, and Parry chances by 50%.' },
      { name: 'Lightning Bolt', level: 8, type: 'Action', desc: 'Conjures a single devastating strike of concentrated lightning.' },
      { name: 'Ice Storm', level: 8, type: 'Action', desc: 'Blasts adjacent targets with severe cold damage and stun chance.' },
      { name: 'Phase Shift', level: 8, type: 'Bonus', desc: 'Temporarily reduces all incoming damage by 100% for one round.' },
      { name: 'Life Drain', level: 10, type: 'Action', desc: 'Converts enemy health into healing energy for the wizard.' },
      { name: 'Time Warp', level: 10, type: 'Action', desc: 'Speeds up an ally’s turn order immediately.' },
      { name: 'Mystic Barrier', level: 10, type: 'Bonus', desc: 'Grants all nearby allies temporary shielding health.' },
    ],
  },
  Cleric: {
    name: 'Cleric',
    role: 'Premier Radiant Healer & Buffer',
    primaryStat: 'Resolve (Healing Power & Radiant Damage), Vitality',
    weaponAffinities: ['Maces', 'Staves'],
    balance10Notes: 'Full restores (Divine Mending & Celestial Heal) only restore living allies. There is NO Resurrection spell in 1.0 — fallen allies must be stabilized before bleed-out expires.',
    allyBonusName: 'Healing Received',
    allyBonusMax: '+30% at Cherished',
    overview: 'The irreplaceable support backbone. Delivers instant triage via Mend Wounds, doubles party energy recovery with Divine Energy, and smites unholy foes with Purge Unholy.',
    skills: [
      { name: 'Mend Wounds', level: 'Default', type: 'Bonus', desc: 'Provides a quick, small heal to an ally.' },
      { name: 'Blessing Of Valor', level: 2, type: 'Bonus', desc: 'Increases physical damage of allies within range by 20%.' },
      { name: 'Healing Light', level: 2, type: 'Bonus', desc: 'Touches an ally to restore a moderate amount of Health.' },
      { name: 'Holy Light', level: 2, type: 'Action', desc: 'Strikes an enemy with radiant damage and lowers their attack by 20%.' },
      { name: 'Holy Protection', level: 4, type: 'Bonus', desc: 'Grants an ally a temporary health shield.' },
      { name: 'Prayer Of Restoration', level: 4, type: 'Bonus', desc: 'Heals all allies within range for a small amount.' },
      { name: 'Celestial Nova', level: 4, type: 'Action', desc: 'Releases radiant energy damaging all surrounding enemies.' },
      { name: 'Holy Sanctuary', level: 6, type: 'Bonus', desc: 'Halves all incoming damage by 50%.' },
      { name: 'Divine Mending', level: 6, type: 'Action', desc: 'Fully restores a living ally’s health to 100%.' },
      { name: 'Divine Judgment', level: 6, type: 'Action', desc: 'Summons a radiant pillar dealing heavy damage with a stun chance.' },
      { name: 'Divine Energy', level: 8, type: 'Bonus', desc: 'Doubles other allies’ Energy Recovery rates.' },
      { name: 'Beacon Of Light', level: 8, type: 'Bonus', desc: 'Places a potent healing-over-time effect on an ally.' },
      { name: 'Radiant Wave', level: 8, type: 'Action', desc: 'Heals allies and damages enemies simultaneously in range.' },
      { name: 'Celestial Heal', level: 10, type: 'Action', desc: 'Restores all other living allies to full Health (once per combat).' },
      { name: 'Sacrificial Surge', level: 10, type: 'Action', desc: 'Sacrifices all remaining Energy to heal all allies equally.' },
      { name: 'Purge Unholy', level: 10, type: 'Action', desc: 'Deals massive radiant damage with a chance to instant kill vulnerable undead/demons.' },
    ],
  },
  Paladin: {
    name: 'Paladin',
    role: 'Frontline Hybrid Tank & Protector',
    primaryStat: 'Strength (Slash/Bash), Resolve (Smites & Heals)',
    weaponAffinities: ['Swords', 'Maces', 'Heavy Shields'],
    balance10Notes: 'Divine Fury boosts main attack by 50%. Lay On Hands converts Resolve energy into ally health directly on the front line.',
    allyBonusName: 'Parry Bonus',
    allyBonusMax: '+23% at Cherished',
    overview: 'The holy warrior bridging tanking and sustain. Part of the default 1.0 start with Wizard and Cleric. Commands frontlines with Righteous Command and smites evil.',
    skills: [
      { name: 'Divine Fury', level: 'Default', type: 'Bonus', desc: 'Increases the paladin’s main attack damage by 50%.' },
      { name: 'Righteous Command', level: 2, type: 'Bonus', desc: 'Lowers enemy attack damage by 50%.' },
      { name: 'Smite Evil', level: 2, type: 'Action', desc: 'Deals heavy radiant damage and reduces enemy attack by 20%.' },
      { name: 'Lay On Hands', level: 2, type: 'Action', desc: 'Converts Energy into direct Health for an ally.' },
      { name: 'Inspiring Presence', level: 4, type: 'Bonus', desc: 'Increases all allies’ attack power by 20%.' },
      { name: 'Blinding Light', level: 4, type: 'Action', desc: 'Deals damage to all enemies within radiant range.' },
      { name: 'Purifying Touch', level: 4, type: 'Action', desc: 'Heals an ally and cleanses one negative status effect.' },
      { name: 'Judgment’s Burden', level: 6, type: 'Bonus', desc: 'Marks an enemy, increasing damage taken by 30%.' },
      { name: 'Radiant Strike', level: 6, type: 'Action', desc: 'Strikes with radiant blade with a chance to stun.' },
      { name: 'Radiant Renewal', level: 6, type: 'Action', desc: 'Places a healing-over-time buff on an ally.' },
      { name: 'Holy Resolve', level: 8, type: 'Bonus', desc: 'Grants immunity to debuffs and increases healing by 50%.' },
      { name: 'Vengeance Burst', level: 8, type: 'Action', desc: 'Releases a wide blast wave of holy energy.' },
      { name: 'Divine Sacrifice', level: 8, type: 'Action', desc: 'Channels half the paladin’s current Health into an ally.' },
      { name: 'Oathkeeper’s Vow', level: 10, type: 'Action', desc: 'Grants immunity to status effects and increases incoming healing by 50%.' },
      { name: 'Sacred Blade', level: 10, type: 'Action', desc: 'Summons a pure light blade dealing massive single-target damage.' },
      { name: 'Guardian’s Grace', level: 10, type: 'Action', desc: 'Grants an ally a durable protective temporary health shield.' },
    ],
  },
  Druid: {
    name: 'Druid',
    role: 'Nature HoT & Spirit Summoner (No Shapeshifting)',
    primaryStat: 'Resolve (Summons & Nature Magic), Vitality',
    weaponAffinities: ['Staves', 'Quarterstaves'],
    balance10Notes: 'Druid does NOT shapeshift. Summons (Rat, Spider, Wolf, Werewolf, Yeti) drain the Druid’s energy until combat ends. Summon kills award XP to the summoner as of 9.7.7.',
    allyBonusName: 'Energy Recovered',
    allyBonusMax: '+23% at Cherished',
    overview: 'Nature controller and summoner. Sustains the company through Warm Embrace and Blooming Renewal HoTs, controls terrain with Rotting Vines, and fields persistent spirit beasts.',
    skills: [
      { name: 'Warm Embrace', level: 'Default', type: 'Bonus', desc: 'Places a gentle healing-over-time effect on an ally.' },
      { name: 'Poisoned Thorns', level: 2, type: 'Action', desc: 'Deals Nature damage each turn and reduces healing received.' },
      { name: 'Summon Rat Spirit', level: 2, type: 'Action', desc: 'Summons a Rat Spirit that drains Druid energy until combat ends.' },
      { name: 'Rotting Vines', level: 2, type: 'Action', desc: 'Immobilizes an enemy on their hex and deals nature damage over time.' },
      { name: 'Blooming Renewal', level: 4, type: 'Bonus', desc: 'Channels a moderate group HoT on all allies and cleanses 1 debuff.' },
      { name: 'Summon Spider Spirit', level: 4, type: 'Action', desc: 'Summons a Spider Spirit that drains Druid energy until combat ends.' },
      { name: 'Wither', level: 4, type: 'Action', desc: 'Increases damage taken by 50% and inflicts low nature damage.' },
      { name: 'Lifeweaver’s Touch', level: 6, type: 'Bonus', desc: 'Places a large burst heal on an ally and amplifies incoming healing.' },
      { name: 'Summon Wolf Spirit', level: 6, type: 'Action', desc: 'Summons a Wolf Spirit that drains Druid energy until combat ends.' },
      { name: 'Corrupted Growth', level: 6, type: 'Action', desc: 'Reduces target damage output while inflicting periodic rot damage.' },
      { name: 'Roots Of Recovery', level: 8, type: 'Bonus', desc: 'Roots an ally in place while massively restoring health over time.' },
      { name: 'Summon Werewolf Spirit', level: 8, type: 'Action', desc: 'Summons a ferocious Werewolf Spirit that drains Druid energy.' },
      { name: 'Blightstorm', level: 8, type: 'Action', desc: 'Spore storm: periodic damage, +dmg taken, and reduces enemy output by 50%.' },
      { name: 'Emerald Harmony', level: 10, type: 'Action', desc: 'Channels large HoT on nearby allies and removes all debuffs.' },
      { name: 'Summon Yeti Spirit', level: 10, type: 'Action', desc: 'Summons an endgame Yeti Spirit that drains Druid energy.' },
      { name: 'Spirit Of The Grove', level: 10, type: 'Action', desc: 'Fully heals all other living allies once per battle.' },
    ],
  },
  Warlock: {
    name: 'Warlock',
    role: 'Unholy Summoner & Dark Sacrificial Caster',
    primaryStat: 'Resolve (Necrotic Magic & Summons), Vitality',
    weaponAffinities: ['Staves'],
    balance10Notes: 'Passive combat bonus gives increased Magic Resistance. Summons demons and skeletons that drink Resolve. Unholy Nova deals severe damage while sacrificing health.',
    allyBonusName: 'Magic Resistance',
    allyBonusMax: '+23% at Cherished',
    overview: 'High-tier summoner wielding necrotic curses and extra magic resistance. Drains vitality via Soul Leech and summons hordes of imps, skeletons, and demons to control the hex field.',
    skills: [
      { name: 'Soul Leech', level: 'Default', type: 'Action', desc: 'Drains life from a target each turn, restoring personal health.' },
      { name: 'Summon Imp', level: 2, type: 'Action', desc: 'Summons an Imp draining Warlock energy until combat ends.' },
      { name: 'Summon Skeleton Warrior', level: 2, type: 'Action', desc: 'Summons a Skeleton Warrior draining Warlock energy.' },
      { name: 'Hex Of Weakness', level: 2, type: 'Bonus', desc: 'Reduces enemy damage output and doubles damage taken.' },
      { name: 'Summon Starved Demon', level: 4, type: 'Action', desc: 'Summons a melee Starved Demon on the energy upkeep rule.' },
      { name: 'Summon Skeleton Archer', level: 4, type: 'Action', desc: 'Summons a ranged Skeleton Archer on energy upkeep.' },
      { name: 'Dark Pact', level: 4, type: 'Bonus', desc: 'Sacrifices 50% Health to instantly restore an equal amount of Energy.' },
      { name: 'Summon Wing Demon', level: 6, type: 'Action', desc: 'Summons a mobile winged demon on energy upkeep.' },
      { name: 'Summon Skeleton Mage', level: 6, type: 'Action', desc: 'Summons a spellcasting Skeleton Mage on energy upkeep.' },
      { name: 'Curse Of Decay', level: 6, type: 'Action', desc: 'Increases damage taken and deals Necrotic damage over time.' },
      { name: 'Summon Warlock Demon', level: 8, type: 'Action', desc: 'Summons a powerful Warlock Demon on energy upkeep.' },
      { name: 'Summon Skeleton Hero', level: 8, type: 'Action', desc: 'Summons a resilient Skeleton Hero frontliner on energy upkeep.' },
      { name: 'Mark Of The Damned', level: 8, type: 'Bonus', desc: 'Marks a priority target to take triple damage from all sources.' },
      { name: 'Summon Spiked Demon', level: 10, type: 'Action', desc: 'Summons an endgame Spiked Demon on energy upkeep.' },
      { name: 'Summon Skeleton Giant', level: 10, type: 'Action', desc: 'Summons a massive Skeleton Giant on energy upkeep.' },
      { name: 'Unholy Nova', level: 10, type: 'Action', desc: 'Releases a necrotic shockwave hitting all enemies in range while sacrificing health.' },
    ],
  },
};

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<string>('Warrior');
  const classData = CLASSES_DATA[selectedClass];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#30363d] pb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-[#58a6ff]">TACTICAL DATABASE // 8 ARCHETYPES</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e6edf3]">
          Playable Classes &amp; Verified Talent Verbs
        </h2>
        <p className="text-xs text-[#8b949e] mt-1">
          Comprehensive 1.0 talent verbs, weapon affinities, 1.0 balance adjustments, and relationship ally bonuses for all eight classes.
        </p>
      </div>

      {/* Class Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#30363d] pb-4">
        {Object.keys(CLASSES_DATA).map((className) => {
          const isSelected = selectedClass === className;
          return (
            <button
              key={className}
              onClick={() => setSelectedClass(className)}
              className={`px-3.5 py-2 text-xs font-mono font-bold transition-all border ${
     isSelected
                  ? 'bg-[#58a6ff] text-[#0d1117] border-[#58a6ff]'
                  : 'bg-[#161b22] text-[#8b949e] border-[#30363d] hover:text-[#e6edf3] hover:border-[#485460]'
              }`}
            >
              {className}
            </button>
          );
        })}
      </div>

      {/* Selected Class Deep Dive */}
      <div className="space-y-6">
        {/* Class Identity Header Card */}
        <div className="tactical-card p-6 bg-[#161b22] space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#30363d] pb-4">
            <div>
              <div className="font-mono text-xs text-[#58a6ff] uppercase">{classData.role}</div>
              <h3 className="font-heading text-3xl font-bold text-[#e6edf3]">{classData.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <div className="p-2 bg-[#0d1117] border border-[#30363d]">
                <span className="text-[#8b949e]">Primary Stats: </span>
                <span className="text-[#e6edf3] font-bold">{classData.primaryStat}</span>
              </div>
              <div className="p-2 bg-[#0d1117] border border-[#30363d]">
                <span className="text-[#8b949e]">Ally Adjacency Bonus: </span>
                <span className="text-[#3fb950] font-bold">{classData.allyBonusName} ({classData.allyBonusMax})</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#8b949e] leading-relaxed">
            {classData.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-mono">
            <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
              <div className="text-[#58a6ff] font-bold">WEAPON AFFINITIES</div>
              <div className="text-[#e6edf3]">{classData.weaponAffinities.join(', ')}</div>
            </div>
            <div className="p-3 bg-[#0d1117] border border-[#30363d] space-y-1">
              <div className="text-[#f0883e] font-bold">1.0.0.0 BALANCE &amp; MECHANICS NOTE</div>
              <div className="text-[#8b949e]">{classData.balance10Notes}</div>
            </div>
          </div>
        </div>

        {/* Complete Talent Tree Table */}
        <div className="tactical-card p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
            <h4 className="font-mono text-sm font-bold text-[#e6edf3] uppercase">
              {classData.name} Signature Skill Verbs (Levels 1 – 10)
            </h4>
            <span className="font-mono text-xs text-[#8b949e]">
              Total Signature Verbs: {classData.skills.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="bg-[#0d1117] border-b border-[#30363d] text-[#8b949e] uppercase">
                  <th className="p-3">Level</th>
                  <th className="p-3">Ability Name</th>
                  <th className="p-3">Action Type</th>
                  <th className="p-3">Mechanics &amp; Strategic Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#30363d]">
                {classData.skills.map((skill, index) => {
                  const isDefault = skill.level === 'Default';
                  const isCap = skill.level === 10;
                  return (
                    <tr
                      key={index}
                      className={`hover:bg-[#1c2433] transition-colors ${
                        isCap ? 'bg-[#1c2433]/40' : ''
                      }`}
                    >
                      <td className="p-3 font-bold text-[#58a6ff]">
                        {isDefault ? 'DEF' : `LV.${skill.level}`}
                      </td>
                      <td className="p-3 font-bold text-[#e6edf3]">
                        {skill.name}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 text-[10px] border ${
                            skill.type === 'Action'
                              ? 'bg-[#58a6ff]/10 text-[#58a6ff] border-[#58a6ff]/30'
                              : skill.type === 'Bonus'
                              ? 'bg-[#3fb950]/10 text-[#3fb950] border-[#3fb950]/30'
                              : skill.type === 'Passive'
                              ? 'bg-[#bc8cff]/10 text-[#bc8cff] border-[#bc8cff]/30'
                              : 'bg-[#f0883e]/10 text-[#f0883e] border-[#f0883e]/30'
                          }`}
                        >
                          {skill.type}
                        </span>
                      </td>
                      <td className="p-3 font-sans text-xs text-[#8b949e]">
                        {skill.desc}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* General Passives Reference */}
        <div className="tactical-card p-6 bg-[#141a23] space-y-3">
          <div className="font-mono text-xs font-bold text-[#bc8cff] uppercase">
            ◈ Universal General Passives Available to All Classes
          </div>
          <p className="text-xs text-[#8b949e]">
            Unlocked at Levels 2, 4, 6, 8, and 10 across all classes: <strong>Scout</strong> (reveals combat resistances &amp; event detail), <strong>Gifted</strong> (+20% XP gained), <strong>Quick Breaths</strong> (doubles combat energy recovery), <strong>Merchant</strong> (±10% store prices), <strong>Born Leader</strong> (-20% recruit cost), <strong>Hard To Kill</strong> (doubles bleed-out clock), and <strong>Weapon Masteries</strong> (Sword, Bow, Axe, Dagger, Mace, Flail, Staff +10% dmg/acc).
          </p>
        </div>
      </div>
    </div>
  );
}
