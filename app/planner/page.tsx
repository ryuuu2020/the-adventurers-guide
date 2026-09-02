'use client';

import { useState } from 'react';

interface Character {
  id: string;
  name: string;
  classType: string;
  personality: string;
  level: number;
  str: number;
  agi: number;
  res: number;
  vit: number;
  cha: number;
  lck: number;
  hasGifted: boolean;
  hasMerchant: boolean;
  hasQuickBreaths: boolean;
  hasBornLeader: boolean;
}

const CLASS_INFO: Record<string, { role: string; weapon: string; primary: string; defaultWage: number }> = {
  Warrior: { role: 'Frontline Tank / Striker', weapon: 'Sword / Axe / Mace (Slash & Bash)', primary: 'Strength', defaultWage: 12 },
  Archer: { role: 'Backline Pierce Striker', weapon: 'Bow (Pierce)', primary: 'Agility', defaultWage: 12 },
  Thief: { role: 'Flanking Assassin / Crit', weapon: 'Daggers (Pierce)', primary: 'Agility & Luck', defaultWage: 11 },
  Wizard: { role: 'Arcane Controller / AoE', weapon: 'Staves (Resolve Magic)', primary: 'Resolve', defaultWage: 15 },
  Cleric: { role: 'Premier Radiant Healer', weapon: 'Maces / Staves (Resolve)', primary: 'Resolve', defaultWage: 14 },
  Paladin: { role: 'Frontline Hybrid Tank', weapon: 'Sword & Shield (STR + RES)', primary: 'Strength & Resolve', defaultWage: 15 },
  Druid: { role: 'Nature HoT & Spirit Summoner', weapon: 'Staves (Resolve)', primary: 'Resolve', defaultWage: 14 },
  Warlock: { role: 'Unholy Summoner & Magic Resist', weapon: 'Staves (Resolve)', primary: 'Resolve', defaultWage: 16 },
};

const PERSONALITIES: Record<string, { likes: string[]; dislikes: string[] }> = {
  Adventurer: {
    likes: ['Hit Something In Combat', 'Hunting For Food', 'Long Rest In Camp'],
    dislikes: ['Commission Equipment', 'Noone Hurt In Combat', 'Sleep In Tavern'],
  },
  Caregiver: {
    likes: ['Donate To Town', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Getting Hit', 'Hit Something In Combat', 'Sleep In Tavern'],
  },
  Connector: {
    likes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
  },
  Diplomat: {
    likes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Hit Something In Combat', 'Long Rest In Camp'],
  },
  Guardian: {
    likes: ['Guarding The Camp', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Hunting For Food', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
  },
  Hermit: {
    likes: ['Hunting For Food', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
    dislikes: ['Donate To Town', 'Order Normal Food And Drink', 'Socialize In Camp'],
  },
  Idealist: {
    likes: ['Donate To Town', 'Heal Others', 'Noone Hurt In Combat'],
    dislikes: ['Getting Hit', 'Long Rest In Camp', 'Order Normal Food And Drink'],
  },
  Innovator: {
    likes: ['Cook Food In Camp', 'Equipment Enchanted', 'Order Fancy Food And Drink'],
    dislikes: ['Guarding The Camp', 'Heal Self', 'Maintain Equipment In Camp'],
  },
  Leader: {
    likes: ['Guarding The Camp', 'Commission Equipment', 'Noone Hurt In Combat'],
    dislikes: ['Heal Self', 'Hunting For Food', 'Sleep In Tavern'],
  },
  Performer: {
    likes: ['Cook Food In Camp', 'Order Fancy Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
  },
  Rebel: {
    likes: ['Hit Something In Combat', 'Hunting For Food', 'Order Fancy Food And Drink'],
    dislikes: ['Donate To Town', 'Heal Others', 'Noone Hurt In Combat'],
  },
  Strategist: {
    likes: ['Guarding The Camp', 'Commission Equipment', 'Noone Hurt In Combat'],
    dislikes: ['Cook Food In Camp', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
  },
  Survivor: {
    likes: ['Hunting For Food', 'Long Rest In Camp', 'Maintain Equipment In Camp'],
    dislikes: ['Getting Hit', 'Order Fancy Food And Drink', 'Sleep In Tavern'],
  },
  Thinker: {
    likes: ['Cook Food In Camp', 'Commission Equipment', 'Equipment Enchanted'],
    dislikes: ['Hit Something In Combat', 'Order Fancy Food And Drink', 'Socialize In Camp'],
  },
  Trickster: {
    likes: ['Hunting For Food', 'Order Fancy Food And Drink', 'Socialize In Camp'],
    dislikes: ['Guarding The Camp', 'Heal Self', 'Noone Hurt In Combat'],
  },
};

const INITIAL_PARTY: Character[] = [
  {
    id: 'p1',
    name: 'Valerius',
    classType: 'Paladin',
    personality: 'Guardian',
    level: 3,
    str: 14,
    agi: 10,
    res: 13,
    vit: 13,
    cha: 10,
    lck: 10,
    hasGifted: false,
    hasMerchant: false,
    hasQuickBreaths: false,
    hasBornLeader: false,
  },
  {
    id: 'p2',
    name: 'Ignis',
    classType: 'Wizard',
    personality: 'Thinker',
    level: 3,
    str: 9,
    agi: 10,
    res: 16,
    vit: 11,
    cha: 10,
    lck: 10,
    hasGifted: true,
    hasMerchant: false,
    hasQuickBreaths: false,
    hasBornLeader: false,
  },
  {
    id: 'p3',
    name: 'Elowen',
    classType: 'Cleric',
    personality: 'Caregiver',
    level: 3,
    str: 10,
    agi: 10,
    res: 15,
    vit: 12,
    cha: 14,
    lck: 10,
    hasGifted: false,
    hasMerchant: true,
    hasQuickBreaths: false,
    hasBornLeader: true,
  },
];

export default function PlannerPage() {
  const [party, setParty] = useState<Character[]>(INITIAL_PARTY);
  const [selectedCharId, setSelectedCharId] = useState<string>('p1');
  const [tavernRoomType, setTavernRoomType] = useState<'none' | 'normal' | 'fancy'>('normal');

  const selectedChar = party.find((c) => c.id === selectedCharId) || party[0];

  const updateSelectedChar = (fields: Partial<Character>) => {
    if (!selectedChar) return;
    setParty((prev) =>
      prev.map((c) => (c.id === selectedChar.id ? { ...c, ...fields } : c))
    );
  };

  const addCharacter = () => {
    if (party.length >= 6) return;
    const newId = `char-${Date.now()}`;
    const newChar: Character = {
      id: newId,
      name: `Recruit #${party.length + 1}`,
      classType: 'Warrior',
      personality: 'Adventurer',
      level: 1,
      str: 12,
      agi: 10,
      res: 10,
      vit: 12,
      cha: 10,
      lck: 10,
      hasGifted: false,
      hasMerchant: false,
      hasQuickBreaths: false,
      hasBornLeader: false,
    };
    setParty([...party, newChar]);
    setSelectedCharId(newId);
  };

  const removeCharacter = (id: string) => {
    if (party.length <= 1) return;
    const filtered = party.filter((c) => c.id !== id);
    setParty(filtered);
    if (selectedCharId === id) {
      setSelectedCharId(filtered[0].id);
    }
  };

  // Calculations for Selected Character
  const maxHealth = selectedChar ? selectedChar.vit * 10 : 0;
  const maxEnergy = selectedChar ? selectedChar.res * 10 : 0;
  
  // Vitality energy recovery bonus: base recovery + 1 per point above 10
  const energyRecoveryBase = 5;
  const vitRecoveryBonus = selectedChar ? Math.max(0, selectedChar.vit - 10) : 0;
  const totalEnergyRecovery = (energyRecoveryBase + vitRecoveryBonus) * (selectedChar?.hasQuickBreaths ? 2 : 1);

  // Strength bash/slash damage: +5% / -5% from 10
  const slashBashBonus = selectedChar ? (selectedChar.str - 10) * 5 : 0;

  // Agility pierce damage: +5% / -5% from 10
  const pierceBonus = selectedChar ? (selectedChar.agi - 10) * 5 : 0;

  // Agility block and parry (with 1.0 nerfed rates)
  // Base 1.0 formula: block 3% per pt above 10 * 0.75 (25% nerf) = +2.25%/pt
  // Parry 3% per pt above 10 * 0.67 (33% nerf) = +2.01%/pt
  const blockMod = selectedChar ? ((selectedChar.agi - 10) * 3 * 0.75).toFixed(1) : '0.0';
  const parryMod = selectedChar ? ((selectedChar.agi - 10) * 3 * 0.67).toFixed(1) : '0.0';

  // Resolve magic damage: +6% per point above 10 * 1.25 (1.0 25% buff)
  const magicBonus = selectedChar
    ? selectedChar.res >= 10
      ? ((selectedChar.res - 10) * 6 * 1.25).toFixed(1)
      : ((selectedChar.res - 10) * 6).toFixed(1)
    : '0.0';

  // Luck crit chance: +2% / -2% from 10
  const critMod = selectedChar ? (selectedChar.lck - 10) * 2 : 0;

  // Party-wide Calculations
  const highestCharisma = party.reduce((max, c) => Math.max(max, c.cha), 0);
  const chaDiscount = (highestCharisma - 10) * 2;
  const hasMerchantInParty = party.some((c) => c.hasMerchant);
  const effectiveShopDiscount = chaDiscount + (hasMerchantInParty ? 10 : 0);

  // Total Party Daily Cost
  const totalWages = party.reduce((sum, c) => {
    const baseWage = CLASS_INFO[c.classType]?.defaultWage || 12;
    const levelMultiplier = 1 + (c.level - 1) * 0.2;
    return sum + Math.round(baseWage * levelMultiplier);
  }, 0);

  const tavernCost = tavernRoomType === 'fancy' ? 15 : tavernRoomType === 'normal' ? 6 : 0;
  const totalDailyCost = totalWages + tavernCost;

  // Personality Clash Analysis
  const personalityCounts: Record<string, number> = {};
  party.forEach((c) => {
    personalityCounts[c.personality] = (personalityCounts[c.personality] || 0) + 1;
  });

  const clashWarnings: string[] = [];
  const hasCaregiver = party.some((c) => c.personality === 'Caregiver');
  const hasRebel = party.some((c) => c.personality === 'Rebel');
  const hasHermit = party.some((c) => c.personality === 'Hermit');
  const hasConnector = party.some((c) => c.personality === 'Connector');
  const hasAdventurer = party.some((c) => c.personality === 'Adventurer');

  if (hasCaregiver && hasRebel) {
    clashWarnings.push(
      'Caregiver & Rebel Friction: Caregiver gains morale when no damage is taken and hates hitting things, while Rebel demands hitting things and hates pacifist runs.'
    );
  }
  if (hasHermit && hasConnector) {
    clashWarnings.push(
      'Hermit & Connector Camp Clash: Hermits love camp gear maintenance and wilderness rest, but despise camp socialization. Connectors demand socializing.'
    );
  }
  if (hasAdventurer && party.some((c) => c.personality === 'Leader')) {
    clashWarnings.push(
      'Adventurer & Leader Town Conflict: Adventurers hate commissioning equipment in towns, while Leaders gain morale from custom blacksmith orders.'
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#30363d] pb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-[#58a6ff]">TACTICAL CALCULATOR // V1.0.0.0</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#e6edf3]">
          Party Planner &amp; 6-Attribute Stat Engine
        </h2>
        <p className="text-xs text-[#8b949e] mt-1">
          Configure active company roster, calculate live formulas (Vitality HP/Energy recovery, Resolve Magic, Agility Pierce/Defense), track daily wage burn, and detect personality action clashes.
        </p>
      </div>

      {/* Main Grid: Roster Bar + Character Editor + Real-Time Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Party Roster & Wage Summary (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="tactical-card p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
              <span className="font-mono text-xs font-bold text-[#e6edf3]">
                ACTIVE COMPANY ({party.length}/6)
              </span>
              <button
                onClick={addCharacter}
                disabled={party.length >= 6}
                className="px-2 py-1 bg-[#58a6ff] hover:bg-[#478ed8] disabled:opacity-40 disabled:cursor-not-allowed text-[#0d1117] font-mono text-[11px] font-bold"
              >
                + RECRUIT
              </button>
            </div>

            <div className="space-y-2">
              {party.map((char) => {
                const isSelected = char.id === selectedChar.id;
                return (
                  <div
                    key={char.id}
                    onClick={() => setSelectedCharId(char.id)}
                    className={`p-3 border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1c2433] border-[#58a6ff]'
                        : 'bg-[#141a23] border-[#30363d] hover:border-[#485460]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-[#e6edf3]">
                          {char.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#0d1117] text-[#58a6ff] border border-[#30363d]">
                          Lv.{char.level} {char.classType}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-[#8b949e] mt-1">
                        Trait: <span className="text-[#e6edf3]">{char.personality}</span> · Wage: {CLASS_INFO[char.classType]?.defaultWage}g/day
                      </div>
                    </div>
                    {party.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeCharacter(char.id);
                        }}
                        className="text-[#8b949e] hover:text-[#f85149] font-mono text-xs px-1.5 py-0.5"
                        title="Dismiss Adventurer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Daily Cost & Economy Telemetry Card */}
          <div className="tactical-card p-4 space-y-3 bg-[#141a23]">
            <div className="font-mono text-xs font-bold text-[#f0883e] uppercase flex items-center gap-1.5 border-b border-[#30363d] pb-2">
              <span>⚖</span> Company Daily Cost Burn
            </div>
            <div className="space-y-2 font-mono text-xs text-[#8b949e]">
              <div className="flex justify-between">
        <span>Roster Wages:</span>
                <span className="text-[#e6edf3] font-bold">{totalWages} Gold / Day</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tavern Lifestyle:</span>
                <select
                  value={tavernRoomType}
                  onChange={(e) => setTavernRoomType(e.target.value as any)}
                  className="bg-[#0d1117] border border-[#30363d] text-[#e6edf3] text-[11px] px-2 py-0.5 font-mono"
                >
                  <option value="none">Camp (0g)</option>
                  <option value="normal">Normal Food &amp; Rest (6g)</option>
                  <option value="fancy">Top-Shelf Tavern (15g)</option>
                </select>
              </div>
              <div className="pt-2 border-t border-[#30363d] flex justify-between text-sm">
                <span className="text-[#e6edf3]">Total Daily Cost:</span>
                <span className="text-[#f0883e] font-bold">{totalDailyCost} Gold / Day</span>
              </div>
            </div>

            {/* Shop Charisma Discount Status */}
            <div className="p-2.5 bg-[#0d1117] border border-[#30363d] space-y-1 font-mono text-[11px]">
              <div className="flex justify-between text-[#8b949e]">
                <span>Party Max Charisma:</span>
                <span className="text-[#58a6ff] font-bold">{highestCharisma}</span>
              </div>
              <div className="flex justify-between text-[#8b949e]">
                <span>Store Price Modifier:</span>
                <span className={effectiveShopDiscount > 0 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                  {effectiveShopDiscount >= 0 ? `-${effectiveShopDiscount}%` : `+${Math.abs(effectiveShopDiscount)}%`}
                </span>
              </div>
              {hasMerchantInParty && (
                <div className="text-[10px] text-[#3fb950]">
                  ✓ Merchant Passive Active (+10% buy/sell advantage)
                </div>
              )}
            </div>
          </div>

          {/* Personality Action Clash Alert */}
          <div className="tactical-card p-4 space-y-2 bg-[#141a23]">
            <div className="font-mono text-xs font-bold text-[#bc8cff] uppercase border-b border-[#30363d] pb-2">
              ◈ Personality Dynamics ({party.length} Trait Matrix)
            </div>
            {clashWarnings.length > 0 ? (
              <div className="space-y-2">
                {clashWarnings.map((warn, i) => (
                  <div key={i} className="p-2.5 bg-[#0d1117] border-l-2 border-l-[#bc8cff] text-[11px] text-[#8b949e]">
                    {warn}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-[11px] text-[#3fb950] font-mono">
                ✓ No critical personality polarities detected. Roster morale stable.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Character Stat Sliders + Real-Time Engine (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Identity Bar */}
          <div className="tactical-card p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#30363d] pb-3">
              <div>
                <span className="font-mono text-[10px] text-[#58a6ff] uppercase">TACTICAL PROFILE</span>
                <h3 className="font-heading text-xl font-bold text-[#e6edf3]">
                  {selectedChar.name}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={selectedChar.classType}
                  onChange={(e) => updateSelectedChar({ classType: e.target.value })}
                  className="bg-[#0d1117] border border-[#30363d] text-[#e6edf3] font-mono text-xs px-2.5 py-1"
                >
                  {Object.keys(CLASS_INFO).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedChar.personality}
                  onChange={(e) => updateSelectedChar({ personality: e.target.value })}
                  className="bg-[#0d1117] border border-[#30363d] text-[#e6edf3] font-mono text-xs px-2.5 py-1"
                >
                  {Object.keys(PERSONALITIES).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1 bg-[#0d1117] border border-[#30363d] px-2 py-1 text-xs font-mono">
                  <span className="text-[#8b949e]">Lv:</span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={selectedChar.level}
                    onChange={(e) => updateSelectedChar({ level: Math.max(1, Math.min(10, parseInt(e.target.value) || 1)) })}
                    className="w-8 bg-transparent text-[#e6edf3] text-center outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Class Role Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono bg-[#0d1117] p-3 border border-[#30363d]">
              <div>
                <span className="text-[#8b949e]">Combat Role:</span>{' '}
                <span className="text-[#e6edf3]">{CLASS_INFO[selectedChar.classType]?.role}</span>
              </div>
              <div>
                <span className="text-[#8b949e]">Weapon Affinity:</span>{' '}
                <span className="text-[#58a6ff]">{CLASS_INFO[selectedChar.classType]?.weapon}</span>
              </div>
            </div>

            {/* 6 Attribute Sliders (Base 10 Pivot) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase font-bold text-[#e6edf3]">
                  Core 6 Attributes (Base 10 Calibration)
                </span>
                <span className="font-mono text-[11px] text-[#8b949e]">
                  Base 10 = Zero Modifier Pivot
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* STR */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">STR (Strength)</span>
                    <span className="text-[#58a6ff]font-bold">{selectedChar.str}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.str}
                    onChange={(e) => updateSelectedChar({ str: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>Slash/Bash Dmg:</span>
                    <span className={slashBashBonus >= 0 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                      {slashBashBonus >= 0 ? `+${slashBashBonus}%` : `${slashBashBonus}%`}
                    </span>
                  </div>
                </div>

                {/* AGI */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">AGI (Agility)</span>
                    <span className="text-[#58a6ff] font-bold">{selectedChar.agi}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.agi}
                    onChange={(e) => updateSelectedChar({ agi: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>Pierce Dmg:</span>
                    <span className={pierceBonus >= 0 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                      {pierceBonus >= 0 ? `+${pierceBonus}%` : `${pierceBonus}%`}
                    </span>
                  </div>
                </div>

                {/* RES */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">RES (Resolve)</span>
                    <span className="text-[#58a6ff] font-bold">{selectedChar.res}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.res}
                    onChange={(e) => updateSelectedChar({ res: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>1.0 Magic Dmg:</span>
                    <span className={parseFloat(magicBonus) >= 0 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                      {parseFloat(magicBonus) >= 0 ? `+${magicBonus}%` : `${magicBonus}%`}
                    </span>
                  </div>
                </div>

                {/* VIT */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">VIT (Vitality)</span>
                    <span className="text-[#58a6ff] font-bold">{selectedChar.vit}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.vit}
                    onChange={(e) => updateSelectedChar({ vit: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>Health Pool:</span>
                    <span className="text-[#3fb950] font-bold">{maxHealth} HP</span>
                  </div>
                </div>

                {/* CHA */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">CHA (Charisma)</span>
                    <span className="text-[#58a6ff] font-bold">{selectedChar.cha}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.cha}
                    onChange={(e) => updateSelectedChar({ cha: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>Speech &amp; Shop Mod:</span>
                    <span className={selectedChar.cha >= 10 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                      {(selectedChar.cha - 10) * 2 >= 0 ? `-${(selectedChar.cha - 10) * 2}% buy` : `+${Math.abs((selectedChar.cha - 10) * 2)}% buy`}
                    </span>
                  </div>
                </div>

                {/* LCK */}
                <div className="p-3 bg-[#141a23] border border-[#30363d] space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#e6edf3] font-bold">LCK (Luck)</span>
                    <span className="text-[#58a6ff] font-bold">{selectedChar.lck}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    value={selectedChar.lck}
                    onChange={(e) => updateSelectedChar({ lck: parseInt(e.target.value) })}
                    className="w-full accent-[#58a6ff]"
                  />
                  <div className="text-[10px] font-mono text-[#8b949e] flex justify-between">
                    <span>Critical Strike Mod:</span>
                    <span className={critMod >= 0 ? 'text-[#3fb950]' : 'text-[#f85149]'}>
                      {critMod >= 0 ? `+${critMod}%` : `${critMod}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Passives Toggle Strip */}
            <div className="space-y-2 pt-2 border-t border-[#30363d]">
              <span className="font-mono text-xs uppercase font-bold text-[#e6edf3]">
                Equipped General Passives (Level 2/4/6/8/10)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <label className="flex items-center gap-2 p-2 bg-[#0d1117] border border-[#30363d] cursor-pointer text-xs font-mono">
                  <input
                    type="checkbox"
                    checked={selectedChar.hasQuickBreaths}
                    onChange={(e) => updateSelectedChar({ hasQuickBreaths: e.target.checked })}
                    className="accent-[#58a6ff]"
                  />
                  <span>Quick Breaths (2x Eng Rec)</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-[#0d1117] border border-[#30363d] cursor-pointer text-xs font-mono">
                  <input
                    type="checkbox"
                    checked={selectedChar.hasGifted}
                    onChange={(e) => updateSelectedChar({ hasGifted: e.target.checked })}
                    className="accent-[#58a6ff]"
                  />
                  <span>Gifted (+20% XP)</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-[#0d1117] border border-[#30363d] cursor-pointer text-xs font-mono">
                  <input
                    type="checkbox"
                    checked={selectedChar.hasMerchant}
                    onChange={(e) => updateSelectedChar({ hasMerchant: e.target.checked })}
                    className="accent-[#58a6ff]"
                  />
                  <span>Merchant (±10% Store)</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-[#0d1117] border border-[#30363d] cursor-pointer text-xs font-mono">
                  <input
                    type="checkbox"
                    checked={selectedChar.hasBornLeader}
                    onChange={(e) => updateSelectedChar({ hasBornLeader: e.target.checked })}
                    className="accent-[#58a6ff]"
                  />
                  <span>Born Leader (-20% Recruit)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Real-Time Combat Output Dashboard */}
          <div className="tactical-card p-5 bg-[#161b22] border-t-4 border-t-[#58a6ff] space-y-4">
            <div className="flex items-center justify-between border-b border-[#30363d] pb-2">
              <div className="font-mono text-xs font-bold text-[#58a6ff] uppercase flex items-center gap-2">
                <span>⬡</span> Live Combat Performance Engine
              </div>
              <span className="text-[10px] font-mono text-[#8b949e]">1.0.0.0 ENGINE MATHEMATICS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Total Health (HP)</div>
                <div className="text-xl font-bold text-[#3fb950]">{maxHealth}</div>
                <div className="text-[10px] text-[#8b949e]">10 × {selectedChar.vit} VIT</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Max Energy Pool</div>
                <div className="text-xl font-bold text-[#58a6ff]">{maxEnergy}</div>
                <div className="text-[10px] text-[#8b949e]">10 × {selectedChar.res} RES</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Energy Recovery / Rd</div>
                <div className="text-xl font-bold text-[#bc8cff]">+{totalEnergyRecovery}</div>
                <div className="text-[10px] text-[#8b949e]">Base 5 + {vitRecoveryBonus} (VIT&gt;10)</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Magic Damage Scaling</div>
                <div className="text-xl font-bold text-[#e6edf3]">
                  {parseFloat(magicBonus) >= 0 ? `+${magicBonus}%` : `${magicBonus}%`}
                </div>
                <div className="text-[10px] text-[#8b949e]">Resolve + 25% 1.0 Buff</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">1.0 Block Modifier</div>
                <div className="text-xl font-bold text-[#e6edf3]">
                  {parseFloat(blockMod) >= 0 ? `+${blockMod}%` : `${blockMod}%`}
                </div>
                <div className="text-[10px] text-[#8b949e]">-25% 1.0 Nerf Applied</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">1.0 Parry Modifier</div>
                <div className="text-xl font-bold text-[#e6edf3]">
                  {parseFloat(parryMod) >= 0 ? `+${parryMod}%` : `${parryMod}%`}
                </div>
                <div className="text-[10px] text-[#8b949e]">-33% 1.0 Nerf Applied</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Pierce Damage Mod</div>
                <div className="text-xl font-bold text-[#3fb950]">
                  {pierceBonus >= 0 ? `+${pierceBonus}%` : `${pierceBonus}%`}
                </div>
                <div className="text-[10px] text-[#8b949e]">Bows &amp; Daggers (AGI)</div>
              </div>

              <div className="p-3 bg-[#0d1117] border border-[#30363d]">
                <div className="text-[10px] text-[#8b949e] uppercase">Slash / Bash Dmg</div>
                <div className="text-xl font-bold text-[#58a6ff]">
                  {slashBashBonus >= 0 ? `+${slashBashBonus}%` : `${slashBashBonus}%`}
                </div>
                <div className="text-[10px] text-[#8b949e]">Swords &amp; Maces (STR)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
