import { Keyword } from "./types";
import styles from "./Filters.module.css";

const filters = [
  Keyword.SCOUTS,
  Keyword.INFILTRATORS,
  Keyword.STEALTH,
  Keyword.FLY,
  Keyword.LONE_OPERATIVE,
  Keyword.DEADLY_DEMISE,
];

const Filters = ({
  toggleFilter,
  activeFilters,
}: {
  toggleFilter: () => void;
  activeFilters: Keyword[];
}) => {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          className={activeFilters.includes(filter) ? styles.active : ""}
          onClick={() => toggleFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
