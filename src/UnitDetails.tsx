import { MouseEvent, useState } from "react";
import classNames from "classnames";

import { Ability, MeleeWeapon, RangedWeapon } from "./types";
import styles from "./Unit.module.css";

const UnitDetails = ({
  ranged = [],
  melee = [],
  core_abilities = [],
  faction_abilities = [],
  ds_abilities = [],
  keywords = [],
}: {
  ranged: RangedWeapon[];
  melee: MeleeWeapon[];
  abilities: Ability[];
  keywords: string[];
}) => {
  const [open, setOpen] = useState<number>(-1);
  const toggleOpen = (e: MouseEvent, i: number) => {
    setOpen(open === i ? -1 : i);
    e.stopPropagation();
  };

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
          {ranged.map((weapon: RangedWeapon) => (
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
          {melee.map((weapon: MeleeWeapon) => (
            <>
              <tr className={styles.weapon_row}>
                <th className={styles.weapon} scope="row">
                  {weapon.name}
                </th>
                <td>⚔️</td>
                <td>{weapon.attacks}</td>
                <td>{weapon.ws}</td>
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
        {!!core_abilities.length && (
          <div>
            {core_abilities.map((ability, i) => (
              <span className={styles.core_ability}><strong>{ability.name}</strong></span>
            ))}
          </div>
        )}
        {!!faction_abilities.length && (
          <div>
            {faction_abilities.map((ability, i) => (
              <span className={styles.core_ability}><strong>{ability.name}</strong></span>
            ))}
          </div>
       )}
        <div>
        {ds_abilities.map((ability, i) => (
          <li
            onClick={(e) => toggleOpen(e, i)}
            className={classNames({ [styles.closed]: open !== i })}
          >
          {ability.description ? (
            <>
              {open === i ? <>&#x25BF;</> : <>&#x25B5;</>}{" "}
              <strong>{ability.name}</strong>: {ability.description}
            </>
          ) : (
            <strong>{ability.name}</strong>
          )}
          </li>
        ))}
        </div>
      </ul>
      <div className={styles.keywords}>
        {keywords.map((k) => (
          <span className={styles.keyword}>{k}</span>
        ))}
      </div>
    </div>
  );
};

export default UnitDetails;
