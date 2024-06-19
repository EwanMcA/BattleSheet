import Unit from './Unit'

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
      />
    </>
  )
}

export default App
