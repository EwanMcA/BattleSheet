import styles from './Unit.module.css'

type RangedWeapon = {
    name: string;
    range: string;
    attacks: string;
    bs: string;
    strength: string;
    ap: string;
    damage: string;
};

const Unit = ({ name, ranged }: { name: string, ranged: RangedWeapon[] }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <table>
        <thead>
          <tr>
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
              <td>10"</td>
              <td>2</td>
              <td>3+</td>
              <td>6</td>
              <td>-1</td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default Unit;
