import { useState } from "react";
import classNames from "classnames";

import { Ability, RangedWeapon } from "./types";
import styles from "./Unit.module.css";

const UnitDetails = ({
  ranged,
  abilities = [],
}: {
  ranged: RangedWeapon[];
  abilities: Ability[];
}) => {
  const [open, setOpen] = useState<number>(-1);
  const toggleOpen = (i: number) => setOpen(open === i ? -1 : i);

  return (
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
              <tr className={styles.weapon_row}>
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
              <tr className={styles.weapon_ability_row}>
                <td colSpan={7}>
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
  );
};

export default UnitDetails;
