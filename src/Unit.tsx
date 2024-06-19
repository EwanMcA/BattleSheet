import styles from './Unit.module.css'

type RangedWeapon = {
    name: string;
    range: string;
    attacks: string;
    bs: string;
    strength: string;
    ap: string;
    damage: string;
    abilities: string[];
};

const Unit = ({ name, ranged, abilities = [] }: { name: string, ranged: RangedWeapon[], abilities: string[] }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <table>
        <thead>
          <tr className={styles.header}>
            <th scope="col">Weapon</th>
            <th scope="col">R</th>
            <th scope="col">A</th>
            <th scope="col">BS</th>
            <th scope="col">S</th>
            <th scope="col">AP</th>
            <th scope="col">D</th>
          </tr>
        </thead>
        <tbody>
          { ranged.map((weapon) => (
            <tr>
              <th className={styles.weapon} scope="row">{weapon.name}</th>
              <td>{weapon.range}</td>
              <td>{weapon.attacks}</td>
              <td>{weapon.bs}</td>
              <td>{weapon.strength}</td>
              <td>{weapon.ap}</td>
              <td>{weapon.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className={styles.abilities}>
        {abilities.map((ability) => (<li>{ability}</li>))}
      </ul>
      </div>
  );
};

export default Unit;
