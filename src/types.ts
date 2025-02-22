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

export enum Keyword {
  BATTLELINE = "BATTLELINE",
  BATTLESUIT = "BATTLESUIT",
  BREACHER_TEAM = "BREACHER TEAM",
  BROADSIDE = "BROADSIDE",
  CADRE_FB = "CADRE FIREBLADE",
  CHARACTER = "CHARACTER",
  COLDSTAR = "COMMANDER IN COLDSTAR BATTLESUIT",
  CRISIS = "CRISIS",
  DEADLY_DEMISE = "DEADLY DEMISE",
  DEEP_STRIKE = "DEEP STRIKE",
  DEDICATED_TRANSPORT = "DEDICATED TRANSPORT",
  DEVILFISH = "DEVILFISH",
  ENFORCER = "COMMANDER IN ENFORCER BATTLESUIT",
  EPIC_HERO = "EPIC HERO",
  FIRE_WARRIOR = "FIRE WARRIOR",
  FIREKNIFE = "FIREKNIFE",
  FLY = "FLY",
  GHOSTKEEL = "GHOSTKEEL",
  GRENADES = "GRENADES",
  HAMMERHEAD = "HAMMERHEAD GUNSHIP",
  INFANTRY = "INFANTRY",
  INFILTRATORS = "INFILTRATORS",
  LONE_OPERATIVE = "LONE OPERATIVE",
  MARKERLIGHT = "MARKERLIGHT",
  SCOUTS = "SCOUTS",
  SHADOWSUN = "COMMANDER SHADOWSUN",
  SMOKE = "SMOKE",
  STEALTH = "STEALTH",
  SUNFORGE = "SUNFORGE",
  TRANSPORT = "TRANSPORT",
  VEHICLE = "VEHICLE",
  WALKER = "WALKER",
}
