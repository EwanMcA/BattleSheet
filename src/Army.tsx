import Unit from "./Unit";

import { Keyword } from "./types";

const Army = ({ army, filters }: { army: Unit[], filters: Keyword[] }) => (
  <>
    {army
      .filter((unit) =>
        filters.every((filter) => unit.keywords.includes(filter)),
      )
      .map((unit) => (
        <Unit {...unit} />
      ))}
  </>
);

export default Army;
