import { useState } from "react";

import UnitDetails from "./UnitDetails";
import { Ability, RangedWeapon, BaseStats } from "./types";
import styles from "./Unit.module.css";

const Unit = ({
  name,
  stats,
  ranged,
  abilities = [],
  keywords = [],
}: {
  name: string;
  stats: BaseStats;
  ranged: RangedWeapon[];
  abilities: Ability[];
  keywords: string[];
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className={styles.card} onClick={() => setOpen(!open)}>
      <div className={styles.card_header}>
        <div className={styles.title_row}>
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
                <td>{stats.move}</td>
                <td>{stats.toughness}</td>
                <td>{stats.save}</td>
                <td>{stats.wounds}</td>
                <td>{stats.LD}</td>
                <td>{stats.OC}</td>
              </tr>
            </thead>
          </table>
        </div>
        {!!stats.invuln && (
          <div className={styles.invuln}>Invulnerable Save: {stats.invuln}</div>
        )}
      </div>
      {open && (
        <UnitDetails
          ranged={ranged}
          abilities={abilities}
          keywords={keywords}
        />
      )}
    </section>
  );
};

export default Unit;
