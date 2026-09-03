import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All 8 Classes 1-10 Talent Trees & Leveling Progression Guide',
  description:
    'Complete level 1 to 10 talent tree progression for all 8 playable classes in The Adventurers 1.0. Exact skill unlock levels, AP costs, active verbs, passives, and synergy builds for Warrior, Archer, Thief, Wizard, Cleric, Paladin, Druid, and Warlock.',
  alternates: {
    canonical: '/talent-trees-guide',
  },
  keywords: [
    'The Adventurers talent trees',
    'The Adventurers class build guide',
    'The Adventurers level 1-10 progression',
    'The Adventurers skill unlock levels',
    'The Adventurers warrior talents',
    'The Adventurers archer build',
    'The Adventurers wizard spell tree',
  ],
};

interface ClassTalentProgression {
  className: string;
  role: string;
  statPriority: string;
  metaOverview: string;
  signatureCombos: string[];
  progression: {
    level: string;
    skills: { name: string; type: 'Action' | 'Bonus' | 'Passive' | 'Trigger'; desc: string; tacticalAdvice: string }[];
  }[];
}

const TALENT_TREES: ClassTalentProgression[] = [
  {
    className: 'Warrior',
    role: 'Frontline Chokepoint Tank & Two-Handed Cleaver',
    statPriority: 'Strength (Slash/Bash Damage) > Vitality (HP & Energy Recovery) > Agility (Block/Parry)',
    metaOverview: 'Warriors anchor every dungeon crawl. With Unstoppable at level 10, they become immune to flanking gang-up multipliers, making them the ultimate solo hex chokepoint holders in narrow ruins.',
    signatureCombos: [
      'Wide Swing (Lv 1) + Reckless (Lv 4) = 130% AoE Cleave across 3 frontline hexes',
      'Come At Me (Lv 2) + Protection (Lv 4) = Safe high-threat aggro pull with -30% damage taken',
      'Slam (Lv 6) + Aim For The Knee (Lv 8) = Complete turn denial and movement lock',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Wide Swing', type: 'Action', desc: 'Attacks enemies in a wide 3-hex arc directly in front of the warrior.', tacticalAdvice: 'Core AoE tool. Position carefully at chokepoints to hit 2-3 targets every round.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Come At Me', type: 'Bonus', desc: 'Forces an enemy within range to target only the warrior on their next turn.', tacticalAdvice: 'Save squishy Wizards and Clerics from flankers by peeling aggro as a bonus action.' },
          { name: 'Double Attack', type: 'Action', desc: 'Performs two basic physical strikes against a single target.', tacticalAdvice: 'High single-target burst when facing high-HP bosses or elite knights.' },
          { name: 'Wound', type: 'Action', desc: 'Strikes for physical damage and inflicts a 3-turn bleeding damage-over-time status.', tacticalAdvice: 'Apply early against heavily armored targets whose physical DR softens direct hits.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Protection', type: 'Bonus', desc: 'Reduces all incoming damage by 30%, but lowers damage dealt by 30%.', tacticalAdvice: 'Toggle ON when surrounded or tanking elite boss heavy windups.' },
          { name: 'Reckless', type: 'Bonus', desc: 'Increases damage dealt by 30%, but increases all damage taken by 30%.', tacticalAdvice: 'Toggle ON only when an enemy is stunned or pinned and cannot retaliate.' },
          { name: 'Leader', type: 'Bonus', desc: 'Aura: Grants other party members within 3 hexes +20% damage.', tacticalAdvice: 'Best for hybrid commander warriors supporting physical Archer backlines.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Slam', type: 'Action', desc: 'Bludgeons target, inflicting Stun and completely interrupting their next action.', tacticalAdvice: 'Save to interrupt dangerous enemy caster incantations or troll power swings.' },
          { name: 'Second Wind', type: 'Bonus', desc: 'Once per battle: Instantly recovers 50% max Energy and 50% max HP.', tacticalAdvice: 'Allows Warriors to fight through fatal bleedouts without wasting Cleric turns.' },
          { name: 'Save Them', type: 'Bonus', desc: 'Grants adjacent allies a +20% Dodge chance buffer.', tacticalAdvice: 'Form tight defensive shield walls with rogues or hybrid paladins.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Aim For The Knee', type: 'Action', desc: 'Pins target to their current hex, reducing movement range to 0.', tacticalAdvice: 'Prevents enemy heavy cavalry or berserkers from reaching your squishy backline.' },
          { name: 'Too Quick', type: 'Bonus', desc: 'Scales incoming damage reduction based on remaining Energy percentage.', tacticalAdvice: 'End turns with floating Energy reserves to act as a resilient fortress.' },
          { name: 'Shake It Off', type: 'Bonus', desc: 'Once per battle: Cleanses all debilitating stuns, bleeds, and debuffs.', tacticalAdvice: 'Instantly breaks crowd-control chains in high-difficulty wilderness ambushes.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Unstoppable', type: 'Passive', desc: 'Enemies cannot receive the Gang Up flanking damage multiplier against you.', tacticalAdvice: 'Game-changing passive. Allows diving into 5-enemy swarms without dying to multiplier burst.' },
          { name: 'Frenzy', type: 'Action', desc: 'Consumes massive Energy to unleash an all-out devastating sequence of blows.', tacticalAdvice: 'The ultimate boss execution tool when buffed by allied Leaders.' },
          { name: 'Roar', type: 'Bonus', desc: 'War cry that intimidates nearby foes, reducing their damage dealt by 20%.', tacticalAdvice: 'Use in round 1 immediately after closing distance into melee engagement range.' },
        ],
      },
    ],
  },
  {
    className: 'Archer',
    role: 'Long-Range Pierce Sniper & Critical Executioner',
    statPriority: 'Agility (Pierce Damage & Range Scaling) > Resolve (Energy Pool) > Luck (Crit Chance)',
    metaOverview: 'In 1.0, Agility block and parry were heavily nerfed (-25% and -33%), making Archers pure glass cannons. They must leverage elevation, high range, and the Better Alone passive to rain critical fire from safety.',
    signatureCombos: [
      'Eagle Focus (Lv 2) + Aimed Shot (Lv 2) = Guaranteed 125% Critical Headshot kill',
      'Pin (Lv 2) + Rain Of Arrows (Lv 8) = Trapping entire enemy packs inside ground hazard zones',
      'Better Alone (Lv 10) + Long Shot (Lv 8) = Massive solo damage bonus firing from extreme range',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Double Shot', type: 'Action', desc: 'Fires two rapid arrows at a single target.', tacticalAdvice: 'Standard early-game bread-and-butter damage tool against unarmored beasts.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Aimed Shot', type: 'Action', desc: 'Carefully line up a shot to guarantee a Critical Hit.', tacticalAdvice: 'Ideal for breaking high-health enemy commanders or squishy enemy mages.' },
          { name: 'Pin', type: 'Action', desc: 'Fires into enemy leg, pinning them to the hex for 1 turn.', tacticalAdvice: 'Essential crowd control tool to stall advancing melee threats.' },
          { name: 'Eagle Focus', type: 'Bonus', desc: 'Sharpens senses, boosting all attack damage by +25% for 2 turns.', tacticalAdvice: 'Pop as a bonus action right before executing Aimed Shot or Massive Shot.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Massive Shot', type: 'Action', desc: 'Consumes heavy Energy to launch a devastating armor-piercing projectile.', tacticalAdvice: 'Punch through heavily armored knights that resist normal arrows.' },
          { name: 'Dodge', type: 'Bonus', desc: 'Increases personal Dodge chance by 25%.', tacticalAdvice: 'Defensive safety net if enemy flanking dogs or wolves break your frontline.' },
          { name: 'Snap', type: 'Bonus', desc: 'Instantly cleanses a negative status effect.', tacticalAdvice: 'Removes cripple or blind debuffs that would prevent firing.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Mark', type: 'Bonus', desc: 'Designates an enemy, increasing all party damage dealt to them by 20%.', tacticalAdvice: 'Cast on dungeon bosses at the start of round 2 to amplify company burst.' },
          { name: 'Split Shot', type: 'Action', desc: 'Fires split arrows hitting two separate targets in line of sight.', tacticalAdvice: 'Efficient clean-up tool when multiple enemies are left on low health.' },
          { name: 'Disengage', type: 'Bonus', desc: 'Leaps backward 2 hexes without triggering enemy opportunity attacks.', tacticalAdvice: 'The ultimate survival tool when melee units close into your hex.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Rain Of Arrows', type: 'Action', desc: 'Blankets a 7-hex radius with falling arrows, hitting all enemies in the area.', tacticalAdvice: 'Superb AoE damage when enemy reinforcements bunch up in narrow canyons.' },
          { name: 'Long Shot', type: 'Action', desc: 'Fires at extended range; damage increases the further the target is.', tacticalAdvice: 'Snipe high-threat enemy necromancers before they even enter spell range.' },
          { name: 'Kill Shot', type: 'Action', desc: 'Execution strike that deals triple damage if target is below 25% HP.', tacticalAdvice: 'Guaranteed execution against tough trolls and high-tier bounty marks.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Better Alone', type: 'Passive', desc: 'Grants +25% damage and +20% Dodge when no allies are within 3 hexes.', tacticalAdvice: 'Position your sniper on isolated cliffs or far flanks for massive permanent buffs.' },
          { name: 'Arrow Storm', type: 'Action', desc: 'Unleashes an overwhelming barrage of arrows consuming all remaining Energy.', tacticalAdvice: 'The pinnacle single-turn ranged devastation tool.' },
          { name: 'Headhunter', type: 'Passive', desc: 'Killing an enemy with an arrow instantly refunds 50% Energy and AP.', tacticalAdvice: 'Chain kills across multiple low-health grunts in a single round.' },
        ],
      },
    ],
  },
  {
    className: 'Wizard',
    role: 'Arcane Controller & Large-Scale AoE Evoker',
    statPriority: 'Resolve (Energy Pool & Magic Damage Scaling) > Vitality (Energy Recovery)',
    metaOverview: 'Remember: There is NO Intelligence stat in The Adventurers. Wizard magic damage scales strictly from Resolve (+6% per point above 10, boosted by +25% in 1.0 balance). High Vitality is required to recover Energy per round.',
    signatureCombos: [
      'Frost Nova (Lv 2) + Fireball (Lv 4) = Freezing pack in place then incinerating for massive burst',
      'Mana Shield (Lv 4) + Ice Storm (Lv 8) = Channeling heavy blizzard without fear of being interrupted',
      'Chain Lightning (Lv 8) + Arcane Echo (Lv 10) = Devastating multi-target electrocution loops',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Arcane Bolt', type: 'Action', desc: 'Fires a concentrated beam of magic energy scaling strictly with Resolve.', tacticalAdvice: 'Reliable single-target damage that ignores physical armor DR.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Frost Nova', type: 'Action', desc: 'Explodes a ring of frost around the caster, chilling and rooting adjacent foes.', tacticalAdvice: 'Crucial self-peel when enemy melee flankers surround your wizard.' },
          { name: 'Focus', type: 'Bonus', desc: 'Channels energy, increasing spell critical strike chance by +30% for 1 turn.', tacticalAdvice: 'Pair with heavy spells like Fireball or Chain Lightning for screen-wipes.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Fireball', type: 'Action', desc: 'Hurls a massive explosive orb dealing heavy magic damage in a 7-hex radius.', tacticalAdvice: 'The defining AoE spell. Watch out for allied warriors caught in the blast radius.' },
          { name: 'Mana Shield', type: 'Bonus', desc: 'Converts 50% of incoming damage directly into Energy loss instead of HP loss.', tacticalAdvice: 'Lifesaver against enemy archer snipers aiming at your robe-wearing caster.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Blink', type: 'Bonus', desc: 'Instantly teleports to any unoccupied visible hex within 4 tiles.', tacticalAdvice: 'Escape dangerous hex terrain debuffs (snow/mud 33% penalty) and melee threat.' },
          { name: 'Slow', type: 'Action', desc: 'Casts an energy drain that cuts enemy Movement and AP by half for 2 turns.', tacticalAdvice: 'Neutralize aggressive enemy cavalry and brute melee units.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Chain Lightning', type: 'Action', desc: 'Strikes a primary target and arcs across up to 4 nearby enemies.', tacticalAdvice: 'Devastating against grouped enemy formations without risk of friendly fire.' },
          { name: 'Ice Storm', type: 'Action', desc: 'Summons a blizzard across a massive area that inflicts Frostbite and reduces hit chance.', tacticalAdvice: 'Creates difficult terrain that slows enemy advance by 50%.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Arcane Echo', type: 'Passive', desc: 'Casting a high-tier spell has a 35% chance to duplicate cast without Energy cost.', tacticalAdvice: 'When this procs on Fireball or Chain Lightning, entire encounters end immediately.' },
          { name: 'Meteor Swarm', type: 'Action', desc: 'Rains cataclysmic fire across half the battlefield, leaving burning hexes.', tacticalAdvice: 'The most destructive spell in the game. Requires maximum Resolve investment.' },
        ],
      },
    ],
  },
  {
    className: 'Cleric',
    role: 'Premier Radiant Healer & Anti-Undead Anchor',
    statPriority: 'Resolve (Healing Power & Radiant Damage) > Vitality (Durability) > Strength (Mace Defense)',
    metaOverview: 'The premier healer of Shion. Clerics do not just heal—their Purge Unholy and Celestial Ward abilities trivialize vampire and undead crypt expeditions while keeping company wounds low to prevent camp morale collapse.',
    signatureCombos: [
      'Bless (Lv 2) + Mend Wounds (Lv 1) = Boosting ally hit chances while topping off frontline health',
      'Purge Unholy (Lv 6) + Radiant Strike (Lv 4) = Massive burst multipliers againstskeletons and ghouls',
      'Celestial Heal (Lv 8) + Divine Mending (Lv 4) = Full company recovery in a single round',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Mend Wounds', type: 'Action', desc: 'Restores a moderate amount of Health to an adjacent ally scaling on Resolve.', tacticalAdvice: 'Keep frontline warriors above 50% HP to avoid death-door wound debuffs.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Bless', type: 'Bonus', desc: 'Blesses an ally with +15% Hit Chance and +10% Damage for 3 turns.', tacticalAdvice: 'Cast on Warriors or Thieves before they launch heavy multi-hit attacks.' },
          { name: 'Smite', type: 'Action', desc: 'Strikes with mace infused with radiant light, dealing Resolve-scaling magic damage.', tacticalAdvice: 'Solid offensive tool when allies do not require immediate healing.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Divine Mending', type: 'Action', desc: 'Ranged heal that cleanses bleeding status and restores high HP.', tacticalAdvice: 'Top off Archers and Rogues without having to step out of frontline cover.' },
          { name: 'Radiant Ward', type: 'Bonus', desc: 'Surrounds target in holy light, reducing next incoming magic attack by 50%.', tacticalAdvice: 'Counter enemy Warlock and Wizard spell bursts.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Purge Unholy', type: 'Action', desc: 'Unleashes radiant blast dealing 250% damage to Undead and Demons.', tacticalAdvice: 'Essential tool when clearing ancient tombs, catacombs, and vampire dens.' },
          { name: 'Sanctuary', type: 'Bonus', desc: 'Target ally cannot be targeted by single-target attacks for 1 round.', tacticalAdvice: 'Cast on an ally who is bleeding out to guarantee safe extraction.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Celestial Heal', type: 'Action', desc: 'Radiates divine energy healing all allies within 3 hexes simultaneously.', tacticalAdvice: 'The ultimate party-wide recovery tool after eating enemy AoE spells.' },
          { name: 'Holy Fervor', type: 'Passive', desc: 'Every time the Cleric heals an ally, both gain +15% Movement for 1 turn.', tacticalAdvice: 'Increases company tactical mobility on difficult hex terrain.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Divine Resurrection', type: 'Action', desc: 'Once per battle: Revives a fallen ally from death door with 50% HP.', tacticalAdvice: 'Prevents permanent permadeath loss of high-level companions in ironman mode.' },
          { name: 'Wrath Of The Heavens', type: 'Action', desc: 'Calls down radiant pillars that scorch all evil entities on the battlefield.', tacticalAdvice: 'Decisive endgame boss fight finisher.' },
        ],
      },
    ],
  },
  {
    className: 'Paladin',
    role: 'Frontline Hybrid Tank & Aura Commander',
    statPriority: 'Strength (Melee Scaling) = Resolve (Auras & Holy Smites) > Vitality',
    metaOverview: 'Paladins split their stats between Strength and Resolve. They wield heavy shields while projecting defensive auras that elevate everyone around them, making them ideal partners for squishy rogues.',
    signatureCombos: [
      'Lay On Hands (Lv 2) + Divine Fury (Lv 4) = Healing self while dealing bonus holy retaliation',
      'Smite Evil (Lv 2) + Radiant Strike (Lv 6) = High-damage anti-demon frontline crushing',
      'Aura Of Courage (Lv 8) + Shield Wall (Lv 4) = Absolute frontline immunity to fear and morale drop',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Radiant Strike', type: 'Action', desc: 'Melee weapon attack imbued with radiant holy damage.', tacticalAdvice: 'Splits damage into physical slash and holy magic to bypass physical armor.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Smite Evil', type: 'Action', desc: 'Devastating strike dealing bonus holy damage scaling on Resolve.', tacticalAdvice: 'High burst against corrupt bandits and unholy monstrosities.' },
          { name: 'Lay On Hands', type: 'Bonus', desc: 'Instant emergency heal restoring HP without consuming main attack AP.', tacticalAdvice: 'Keep frontline companions conscious without losing attack momentum.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Divine Fury', type: 'Bonus', desc: 'Temporarily adds radiant damage to all basic weapon attacks for 2 turns.', tacticalAdvice: 'Activate before unleashing multi-attack sequences.' },
          { name: 'Shield Wall', type: 'Action', desc: 'Raises shield, granting +35% Block and projectile deflection to adjacent hexes.', tacticalAdvice: 'Form chokepoint barriers against incoming archer volleys.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Aura Of Light', type: 'Passive', desc: 'Allies within 2 hexes regenerate 5 HP per turn and gain +10% magic resist.', tacticalAdvice: 'Tight formation play maximizes this passive aura across 3-4 party members.' },
          { name: 'Holy Vow', type: 'Bonus', desc: 'Takes 50% of the damage intended for an adjacent ally onto yourself.', tacticalAdvice: 'Protect your vulnerable backline snipers or casters.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Aura Of Courage', type: 'Passive', desc: 'Allies within 3 hexes cannot be Frightened and suffer no morale penalty from getting hit.', tacticalAdvice: 'Completely shuts down dragon roars, ghost screams, and intimidation debuffs.' },
          { name: 'Judgment', type: 'Action', desc: 'Slams shield into the ground, sending holy shockwaves that knock enemies back.', tacticalAdvice: 'Disrupts enemy formations and breaks flanking gang-up positions.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Avatar Of Justice', type: 'Bonus', desc: 'Transforms for 3 turns: +50% Damage, +30% Armor DR, and all attacks heal the lowest-HP ally.', tacticalAdvice: 'The ultimate raid boss frontline tanking transformation.' },
        ],
      },
    ],
  },
  {
    className: 'Thief',
    role: 'Flanking Assassin & Critical Executioner',
    statPriority: 'Agility (Dagger Scaling) > Luck (Critical Hit Multiplier) > Vitality',
    metaOverview: 'Thieves dominate hex positioning. With Double Stab and Finish Them, they exploit 6-neighbor flanking bonuses to delete priority targets, but die quickly if caught in open frontline trades.',
    signatureCombos: [
      'Throw Sand (Lv 2) + Double Stab (Lv 1) = Blinding target so they cannot dodge your backstab',
      'Shadow Step (Lv 4) + Finish Them (Lv 6) = Teleporting directly into rear hex for lethal execution',
      'Triple Threat (Lv 10) + Poison Blade (Lv 2) = Applying lethal triple poison stacks in one turn',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Double Stab', type: 'Action', desc: 'Strikes twice with dual daggers. Deals +50% damage when attacking from a flank hex.', tacticalAdvice: 'Always move behind enemies engaged by your Warrior to trigger flank bonuses.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Throw Sand', type: 'Bonus', desc: 'Throws sand into enemy eyes, inflicting Blind (-40% Hit Chance) for 1 turn.', tacticalAdvice: 'Neutralize enemy dangerous berserkers before stepping into their melee range.' },
          { name: 'Poison Blade', type: 'Bonus', desc: 'Coats daggers in venom, causing attacks to inflict stacking poison DoTs.', tacticalAdvice: 'Melts high-health bosses over multiple combat rounds.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Shadow Step', type: 'Action', desc: 'Vanishes and reappears on any unoccupied hex adjacent to an enemy.', tacticalAdvice: 'Bypasses frontlines to instantly engage backline archers and squishy mages.' },
          { name: 'Smoke Bomb', type: 'Bonus', desc: 'Drops smoke on self, granting 100% Dodge for 1 turn and breaking aggro.', tacticalAdvice: 'Emergency escape button when your assassination attempt fails to kill.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Finish Them', type: 'Action', desc: 'Lethal execution strike that deals triple damage if target is below 35% HP.', tacticalAdvice: 'Your primary boss-killing execution verb.' },
          { name: 'Opportunist', type: 'Passive', desc: 'Increases flanking damage bonus from +20% to +45% on all attacks.', tacticalAdvice: 'Mandatory passive for assassin builds.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Adrenaline Rush', type: 'Bonus', desc: 'Instantly refunds 2 AP and 30 Energy when landing a critical strike.', tacticalAdvice: 'Allows chaining multiple attacks and movement commands in a single round.' },
          { name: 'Hamstring', type: 'Action', desc: 'Slashes leg tendons, crippling enemy movement to 1 hex for 2 turns.', tacticalAdvice: 'Stops fleeing bounty targets or agile enemy scouts.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Triple Threat', type: 'Action', desc: 'Unleashes a blinding three-strike dagger flurry with bonus critical multiplier.', tacticalAdvice: 'Capable of dealing over 400 damage in a single round with Luck investment.' },
          { name: 'Master Of Shadows', type: 'Passive', desc: 'Starting combat in stealth; first attack from stealth is an automatic guaranteed crit.', tacticalAdvice: 'One-shots enemy spellcasters on turn 1 of combat.' },
        ],
      },
    ],
  },
  {
    className: 'Druid',
    role: 'Nature HoT Sustainer & Spirit Summoner (No Shapeshifting)',
    statPriority: 'Resolve (Nature Spell Scaling) > Vitality (Energy Recovery) > Agility',
    metaOverview: 'Important 1.0 Note: Druids in The Adventurers do NOT shapeshift. They are dedicated nature sustainers who excel at healing-over-time (Warm Embrace) and summoning spectral wolves and grove spirits to clog hex lines.',
    signatureCombos: [
      'Rotting Vines (Lv 4) + Summon Wolf Spirit (Lv 2) = Rooting enemies while wolves shred them',
      'Warm Embrace (Lv 1) + Nature Grace (Lv 6) = Stacking party-wide regeneration buffs',
      'Spirit Of The Grove (Lv 10) + Entangling Roots (Lv 8) = Battlefield lockdown with healing auras',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Warm Embrace', type: 'Action', desc: 'Applies a powerful Heal-over-Time (HoT) that restores HP at start of each round.', tacticalAdvice: 'Apply to frontline tanks before combat engagements start.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Summon Wolf Spirit', type: 'Action', desc: 'Summons a spectral wolf that occupies a hex, attacks foes, and draws aggro.', tacticalAdvice: 'Excellent for absorbing dangerous single-target enemy boss attacks.' },
          { name: 'Thorn Whip', type: 'Action', desc: 'Pulls an enemy 2 hexes closer and inflicts bleed damage.', tacticalAdvice: 'Drag backline enemy archers into your frontline melee cleave.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Rotting Vines', type: 'Action', desc: 'Vines erupt from ground, rooting enemies in place and reducing their Armor DR.', tacticalAdvice: 'Setup tool for allied Warrior Wide Swings or Wizard Fireballs.' },
          { name: 'Barkskin', type: 'Bonus', desc: 'Toughens ally skin, granting +25% physical damage resistance for 3 turns.', tacticalAdvice: 'Cast on frontline tanks facing heavy blunt and slash weapon users.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Nature Grace', type: 'Passive', desc: 'Allies affected by your HoTs gain +15% Dodge and +10% Movement speed.', tacticalAdvice: 'Turns heavy tanks into surprisingly agile evasive walls.' },
          { name: 'Regrowth', type: 'Action', desc: 'Instant burst heal that also removes poison and disease debuffs.', tacticalAdvice: 'Counter spider venom and wilderness swamp infection events.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Entangling Roots', type: 'Action', desc: 'Massive AoE root trapping all enemies in a 7-hex radius.', tacticalAdvice: 'Stops enemy flanking cavalry dead in their tracks.' },
          { name: 'Call Lightning', type: 'Action', desc: 'Calls a storm bolt that deals heavy nature damage; damage doubles in rain/water.', tacticalAdvice: 'Devastating when fighting in riverbeds or rainstorms.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Spirit Of The Grove', type: 'Action', desc: 'Summons an ancient grove treant spirit that casts auras of healing and regeneration.', tacticalAdvice: 'Turns the battlefield into an unyielding sanctuary for your entire company.' },
        ],
      },
    ],
  },
  {
    className: 'Warlock',
    role: 'Unholy Summoner & Dark Magic Specialist',
    statPriority: 'Resolve (Unholy Magic Scaling) > Vitality (Energy Pool)',
    metaOverview: 'Warlocks possess innate magic resistance and command the undead. Their demons and skeleton thralls drain Resolve but create expendable bodies that turn the tide of numbers in difficult encounters.',
    signatureCombos: [
      'Soul Leech (Lv 1) + Hex Of Weakness (Lv 2) = Draining enemy life while cutting their attack power',
      'Summon Skeleton (Lv 2) + Dark Sacrifice (Lv 4) = Spawning thralls and detonating them for unholy AoE',
      'Unholy Nova (Lv 8) + Drain Soul (Lv 10) = Massive health siphon across entire enemy battle lines',
    ],
    progression: [
      {
        level: 'Level 1 (Default)',
        skills: [
          { name: 'Soul Leech', type: 'Action', desc: 'Drains life force from an enemy, healing the Warlock for 60% of damage dealt.', tacticalAdvice: 'Maintains high Warlock HP without relying on party Cleric turns.' },
        ],
      },
      {
        level: 'Level 2',
        skills: [
          { name: 'Hex Of Weakness', type: 'Bonus', desc: 'Curses an enemy, reducing their physical damage dealt by 25% for 3 turns.', tacticalAdvice: 'Debuff enemy boss warriors before they strike your frontline.' },
          { name: 'Summon Skeleton', type: 'Action', desc: 'Raises a skeleton warrior that engages in melee and distracts enemy units.', tacticalAdvice: 'Spawn on flanking hexes to grant your Thief instant gang-up bonuses.' },
        ],
      },
      {
        level: 'Level 4',
        skills: [
          { name: 'Dark Sacrifice', type: 'Bonus', desc: 'Destroys an active summoned minion to instantly restore full Energy to the Warlock.', tacticalAdvice: 'Allows continuous high-cost spellcasting without running dry.' },
          { name: 'Shadow Curse', type: 'Action', desc: 'Inflicts dark rot that deals damage whenever the affected target takes an action.', tacticalAdvice: 'Apply to multi-attacking enemy archers and dual-wielding bandits.' },
        ],
      },
      {
        level: 'Level 6',
        skills: [
          { name: 'Summon Demon', type: 'Action', desc: 'Summons a powerful winged fiend that drains Resolve each round but deals high fire/unholy damage.', tacticalAdvice: 'High-risk high-reward summon for tough boss battles.' },
          { name: 'Fear', type: 'Action', desc: 'Horrifies an enemy, causing them to spend their turn fleeing away from the Warlock.', tacticalAdvice: 'Instantly removes an enemy attacker from the fight for 1 round.' },
        ],
      },
      {
        level: 'Level 8',
        skills: [
          { name: 'Unholy Nova', type: 'Action', desc: 'Releases a dark shockwave that damages all foes and heals all undead minions.', tacticalAdvice: 'Both an offensive nuke and a summon maintenance tool.' },
          { name: 'Curse Of Vulnerability', type: 'Bonus', desc: 'Lowers all enemy elemental and magic resistances by 30%.', tacticalAdvice: 'Cast before your allied Wizard casts Fireball or Chain Lightning.' },
        ],
      },
      {
        level: 'Level 10 (Mastery)',
        skills: [
          { name: 'Army Of The Dead', type: 'Action', desc: 'Raises 3 skeleton warriors simultaneously to overwhelm enemy positions.', tacticalAdvice: 'Completely tilts the action-economy in your favor during climactic encounters.' },
          { name: 'Drain Soul', type: 'Action', desc: 'Channels fatal necrotic energy; if the target dies, the Warlock permanently gains bonus Resolve for the battle.', tacticalAdvice: 'Target low-health elites to achieve massive late-battle spell scaling.' },
        ],
      },
    ],
  },
];

export default function TalentTreesGuidePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-3 border-b border-[#30363d] pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#58a6ff] font-mono text-xs">
          <span>⚔ COMPLETE BUILD DATABASE</span>
          <span>//</span>
          <span>1.0 TALENT TREES</span>
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#e6edf3] tracking-tight">
          All 8 Classes 1-10 Talent Trees &amp; Progression Guide
        </h1>
        <p className="text-sm text-[#8b949e] max-w-3xl leading-relaxed font-sans">
          Character progression in <strong className="text-[#e6edf3]">The Adventurers</strong> awards talent points at levels 2, 4, 6, 8, and 10. Every class features distinct branching choices between active offensive verbs, utility buffs, defensive bonus actions, and capstone passives. Below is the complete verified 1.0.0.0 progression breakdown for all 8 archetypes.
        </p>
      </section>

      {/* Class Index Anchor Bar */}
      <section className="flex flex-wrap gap-2">
        {TALENT_TREES.map((cls) => (
          <a
            key={cls.className}
            href={`#${cls.className.toLowerCase()}`}
            className="px-3 py-1.5 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-xs font-mono text-[#e6edf3] transition-colors"
          >
            ▶ {cls.className}
          </a>
        ))}
      </section>

      {/* Talent Deep Dives */}
      <div className="space-y-12">
        {TALENT_TREES.map((cls) => (
          <section key={cls.className} id={cls.className.toLowerCase()} className="space-y-4 scroll-mt-20">
            {/* Class Header */}
            <div className="tactical-card p-6 bg-[#161b22] border-l-4 border-l-[#58a6ff] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-3">
                <div>
                  <h2 className="font-heading text-xl font-bold text-[#e6edf3] flex items-center gap-2">
                    <span className="text-[#58a6ff]">⚔</span> {cls.className} Progression
                  </h2>
                  <p className="text-xs font-mono text-[#8b949e] mt-0.5">{cls.role}</p>
                </div>
                <div className="text-xs font-mono text-[#3fb950] bg-[#0d1117] px-3 py-1 border border-[#30363d]">
                  {cls.statPriority}
                </div>
              </div>

              <p className="text-xs text-[#8b949e] font-sans pt-1 leading-relaxed">{cls.metaOverview}</p>

              {/* Signature Combos */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#f0883e] font-bold block mb-1">
                  CORE COMBAT SYNERGIES:
                </span>
                <ul className="space-y-1 text-xs text-[#8b949e] font-sans">
                  {cls.signatureCombos.map((combo, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#58a6ff] font-mono">▸</span>
                      <span>{combo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Level Tier Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cls.progression.map((tier) => (
                <div key={tier.level} className="tactical-card p-4 space-y-3 bg-[#0d1117] border border-[#30363d] flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#30363d] pb-1.5">
                      <span className="font-mono text-xs font-bold text-[#58a6ff] uppercase">{tier.level}</span>
                      <span className="text-[10px] font-mono text-[#8b949e]">{tier.skills.length} Choices</span>
                    </div>

                    <div className="space-y-3">
                      {tier.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1 bg-[#161b22] p-2.5 border border-[#30363d]/60">
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-semibold text-xs text-[#e6edf3]">{skill.name}</span>
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.5 border ${
                                skill.type === 'Action'
                                  ? 'text-[#f0883e] border-[#f0883e]/40 bg-[#f0883e]/10'
                                  : skill.type === 'Bonus'
                                  ? 'text-[#58a6ff] border-[#58a6ff]/40 bg-[#58a6ff]/10'
                                  : 'text-[#3fb950] border-[#3fb950]/40 bg-[#3fb950]/10'
                              }`}
                            >
                              {skill.type}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#8b949e] leading-normal font-sans">{skill.desc}</p>
                          <div className="text-[10px] font-mono text-[#3fb950] pt-1 border-t border-[#30363d]/40">
                            <span>Tactic: </span>
                            <span className="text-[#8b949e] font-sans">{skill.tacticalAdvice}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="tactical-card p-6 bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-base text-[#e6edf3]">
            Plan Your 4-Member Tactical Company
          </h3>
          <p className="text-xs text-[#8b949e] mt-1 font-sans">
            Ready to test talent combinations against real hex formulas? Launch our interactive party calculator.
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
