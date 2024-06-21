import Unit from "./Unit";

const enum ABILITIES {
  ASSAULT = "Assault",
  DEV_WOUNDS = "Devastating Wounds",
  HEAVY = "Heavy",
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
    </>
  );
}

export default App;
