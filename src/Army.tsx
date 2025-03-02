import Unit from "./Unit";

import { Keyword } from "./types";

const Army = ({ army, filters }: { army: any, filters: Keyword[] }) => (
  <>
    {army
      .filter((unit: any) =>
        filters.every((filter) => unit.keywords.includes(filter)),
      )
      .map((unit: any) => (
        <Unit {...unit} />
      ))}
  </>
);

export default Army;
