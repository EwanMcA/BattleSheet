import Unit from './Unit'

const enum ABILITIES {
  RAPID_1,
};

function App() {
  return (
    <>
      <Unit
        name="Breachers"
        ranged={[{
          name: "Pulse Blaster",
          range: "10\"",
          attacks: "2",
          bs: "3+",
          strength: "6",
          ap: "-1",
          damage: "1"
        }]}
        abilities={[
          "Breach and Clear: Each time a model in this unit makes a ranged attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll.",
          "DS8 Support Turret: In your Movement phase, if this unit Remains Stationary, until the start of your next turn, its Shas'ui model is equipped with the support turret weapon.",
        ]}
      />
      <Unit
        name="Cadre FB"
        ranged={[{
          name: "FB Pulse Rifle",
          range: "30\"",
          attacks: "1",
          bs: "3+",
          strength: "5",
          ap: "0",
          damage: "2",
          abilities: [ABILITIES.RAPID_1],
        }]}
        abilities={[
          "Volley Fire: While this model is leading a unit, add 1 to the Attacks characteristic of ranged weapons equipped by models in that unit.",
          "Crack Shot: Each time this model makes a ranged attack, on a Critical Wound, that attack has an Armour Penetration characteristic of -3."
        ]}
      />
    </>
  )
}

export default App
