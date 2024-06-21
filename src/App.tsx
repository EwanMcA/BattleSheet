import Unit from "./Unit";

const enum ABILITIES {
  ASSAULT = "Assault",
  DEV_WOUNDS = "Devastating Wounds",
  HEAVY = "Heavy",
  MELTA_2 = "Melta 2",
  ONE_SHOT = "One Shot",
  PISTOL = "Pistol",
  RAPID_1 = "Rapid Fire 1",
  TWIN_LINKED = "Twin-linked",
}

function App() {
  return (
    <>
      <Unit
        name="Breachers"
        stats={{
          move: '6"',
          toughness: "3",
          save: "4+",
          wounds: "3",
          LD: "7+",
          OC: "1",
        }}
        ranged={[
          {
            name: "Pulse blaster",
            range: '10"',
            attacks: "2",
            bs: "3+",
            strength: "6",
            ap: "-1",
            damage: "1",
            abilities: [ABILITIES.ASSAULT],
          },
          {
            name: "Pulse pistol",
            range: '12"',
            attacks: "1",
            bs: "4+",
            strength: "5",
            ap: "0",
            damage: "1",
            abilities: [ABILITIES.PISTOL],
          },
        ]}
        abilities={[
          {
            name: "Breach and Clear",
            description:
              "Each time a model in this unit makes a ranged attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll.",
          },
          {
            name: "DS8 Support Turret",
            description:
              "In your Movement phase, if this unit Remains Stationary, until the start of your next turn, its Shas'ui model is equipped with the support turret weapon.",
          },
          {
            name: "Guardian Drone",
            description:
              "Each time a model makes a ranged attack that targets the bearer's unit, subtract 1 from the Wound roll.",
          },
          {
            name: "Marker Drone",
            description:
              "The bearer's unit has the Markerlight keyword and can act as an Observer unit for another unit even if it Advanced this turn.",
          },
        ]}
      />
      <Unit
        name="Cadre FB"
        stats={{
          move: '6"',
          toughness: "3",
          save: "4+",
          wounds: "3",
          LD: "7+",
          OC: "1",
        }}
        ranged={[
          {
            name: "FB Pulse Rifle",
            range: '30"',
            attacks: "1",
            bs: "3+",
            strength: "5",
            ap: "0",
            damage: "2",
            abilities: [ABILITIES.RAPID_1],
          },
        ]}
        abilities={[
          {
            name: "Volley Fire",
            description:
              "While this model is leading a unit, add 1 to the Attacks characteristic of ranged weapons equipped by models in that unit.",
          },
          {
            name: "Crack Shot",
            description:
              "Each time this model makes a ranged attack, on a Critical Wound, that attack has an Armour Penetration characteristic of -3.",
          },
        ]}
      />
      <Unit
        name="Broadside Battlesuits"
        stats={{
          move: '6"',
          toughness: "3",
          save: "4+",
          wounds: "3",
          LD: "7+",
          OC: "1",
        }}
        ranged={[
          {
            name: "Heavy rail rifle",
            range: '60"',
            attacks: "2",
            bs: "4+",
            strength: "12",
            ap: "-4",
            damage: "D6+1",
            abilities: [ABILITIES.HEAVY, ABILITIES.DEV_WOUNDS],
          },
          {
            name: "Twin plasma rifle",
            range: '18"',
            attacks: "1",
            bs: "4+",
            strength: "8",
            ap: "-3",
            damage: "3",
            abilities: [ABILITIES.TWIN_LINKED],
          },
          {
            name: "Seeker missile",
            range: '48"',
            attacks: "1",
            bs: "4+",
            strength: "14",
            ap: "-3",
            damage: "D6+1",
            abilities: [ABILITIES.ONE_SHOT],
          },
        ]}
        abilities={[
          {
            name: "Shield Drone",
            description: "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Shield Drone",
            description: "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Advanced Armour",
            description:
              "Models in this unit have the Feel No Pain 4+ ability against mortal wounds.",
          },
        ]}
      />
      <Unit
        name="Commander Shadowsun" // TODO: invuln save
        stats={{
          move: '10"',
          toughness: "4",
          save: "3+",
          wounds: "6",
          LD: "6+",
          OC: "1",
        }}
        ranged={[
          {
            name: "Flechette lcr",
            range: '18"',
            attacks: "5",
            bs: "2+",
            strength: "3",
            ap: "0",
            damage: "1",
            abilities: [],
          },
          {
            name: "High-energy fsn",
            range: '18"',
            attacks: "1",
            bs: "2+",
            strength: "10",
            ap: "-4",
            damage: "D6",
            abilities: [ABILITIES.MELTA_2],
          },
          {
            name: "Light missile pod",
            range: '24"',
            attacks: "2",
            bs: "2+",
            strength: "7",
            ap: "0",
            damage: "2",
            abilities: [],
          },
          {
            name: "Pulse pistol",
            range: '12"',
            attacks: "1",
            bs: "3+",
            strength: "5",
            ap: "0",
            damage: "1",
            abilities: [ABILITIES.PISTOL],
          }
        ]}
        abilities={[
          {
            name: "Adv Guardian Drone",
            description: "Each time a ranged attack targets the bearer, subtract 1 from the Wound roll.",
          },
          {
            name: "Command-link Drone (aura)",
            description: "While a friendly T'au Empire unit is within 6\" of the bearer, each time you select that unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.",
          },
          {
            name: "Agile Combatant",
            description:
              "This model is eligible to shoot in a turn in which it Fell Back.",
          },
          {
            name: "Hero of the Empire (Aura)",
            description:
              "While a friendly T'au Empire unit is within 6\" of this model, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
          },
        ]}
      />
      <Unit
        name="Coldstar Commander"
        stats={{
          move: '12"',
          toughness: "5",
          save: "3+",
          wounds: "6",
          LD: "7+",
          OC: "2",
        }}
        ranged={[
          {
            name: "4 x Fusion blaster",
            range: '12"',
            attacks: "1",
            bs: "3+",
            strength: "9",
            ap: "-4",
            damage: "D6",
            abilities: [ABILITIES.MELTA_2],
          },
        ]}
        abilities={[
          {
            name: "Shield Drone",
            description:
              "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Shield Drone",
            description:
              "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Coldstar",
            description:
              "While this model is leading a unit, models in that unit have a Move characteristic of 12\" and ranged weapons equipped by models in that unit have the [ASSAULT] ability.",
          },
        ]}
      />
      <Unit
        name="Enforcer Commander"
        stats={{
          move: '8"',
          toughness: "5",
          save: "2+",
          wounds: "6",
          LD: "7+",
          OC: "2",
        }}
        ranged={[
          {
            name: "4 x Plasma rifle",
            range: '18"',
            attacks: "1",
            bs: "3+",
            strength: "8",
            ap: "-3",
            damage: "3",
            abilities: [],
          },
        ]}
        abilities={[
          {
            name: "Shield Drone",
            description:
              "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Shield Drone",
            description:
              "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Enforcer",
            description:
              "While this model is leading a unit, each time a ranged attack targets that unit, worsen the AP characteristic of that attack by 1.",
          },
        ]}
      />
      <Unit
        name="Crisis Fireknife Suits"
        stats={{
          move: '10"',
          toughness: "5",
          save: "3+",
          wounds: "4",
          LD: "7+",
          OC: "2",
        }}
        ranged={[
          {
            name: "2 x Plasma rifle",
            range: '18"',
            attacks: "1",
            bs: "4+",
            strength: "8",
            ap: "-3",
            damage: "3",
            abilities: [],
          },
        ]}
        abilities={[
          {
            name: "Shield Drone",
            description:
              "Add 1 to the bearer's Wounds characteristic.",
          },
          {
            name: "Gun Drone",
            description:
              "20\" 2 5+ 5 0 1 [Assault] [Twin-linked]",
          },
          {
            name: "Fireknife",
            description:
              "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit that is at its Starting Strength, you can re-roll the Hit roll instead.",
          },
        ]}
      />
    </>
  );
}

export default App;
