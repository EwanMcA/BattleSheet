export type Stats = {
  move: string;
  toughness: string;
  save: string;
  wounds: string;
  LD: string;
  OC: string;
  invuln?: string;
};

export type RangedWeapon = {
  name: string;
  range: string;
  attacks: string;
  bs: string;
  strength: string;
  ap: string;
  damage: string;
  abilities: string[];
};

export type Ability = {
  name: string;
  description: string;
};
