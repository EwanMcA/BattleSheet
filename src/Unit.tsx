import { useState } from "react";
import classNames from "classnames";
import styles from "./Unit.module.css";

type Stats = {
  move: string;
  toughness: string;
  save: string;
  wounds: string;
  LD: string;
  OC: string;
};

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

type Ability = {
  name: string;
  description: string;
};

const Unit = ({
  name,
  stats,
  ranged,
  abilities = [],
}: {
  name: string;
  stats: Stats;
  ranged: RangedWeapon[];
  abilities: Ability[];
}) => {
  const [open, setOpen] = useState<number>(-1);
  const toggleOpen = (i: number) => setOpen(open === i ? -1 : i);

  return (
    <section className={styles.card}>
      <div className={styles.card_header}>
        <h3 className={styles.name}>{name}</h3>
        <table>
          <thead>
            <tr className={styles.header}>
              <th scope="col">M</th>
              <th scope="col">T</th>
              <th scope="col">Sv</th>
              <th scope="col">W</th>
              <th scope="col">LD</th>
              <th scope="col">OC</th>
            </tr>
            <tr>
              <td scope="col">{stats.move}</td>
              <td scope="col">{stats.toughness}</td>
              <td scope="col">{stats.save}</td>
              <td scope="col">{stats.wounds}</td>
              <td scope="col">{stats.LD}</td>
              <td scope="col">{stats.OC}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.details}>
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
            {ranged.map((weapon) => (
              <>
                <tr>
                  <th className={styles.weapon} scope="row">
                    {weapon.name}
                  </th>
                  <td>{weapon.range}</td>
                  <td>{weapon.attacks}</td>
                  <td>{weapon.bs}</td>
                  <td>{weapon.strength}</td>
                  <td>{weapon.ap}</td>
                  <td>{weapon.damage}</td>
                </tr>
                <tr>
                  <td colspan="7">
                    {weapon.abilities.map((ability) => (
                      <span className={styles.weapon_ability}>{ability}</span>
                    ))}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <ul className={styles.abilities}>
          {abilities.map((ability, i) => (
            <li
              onClick={() => toggleOpen(i)}
              className={classNames({ [styles.closed]: open !== i })}
            >
              {open === i ? <>&#x25BF;</> : <>&#x25B5;</>}{" "}
              <strong>{ability.name}</strong>: {ability.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Unit;
