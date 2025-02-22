import React, { useState } from "react";

import Army from "./Army";
import Filters from "./Filters";
import { Keyword } from "./types";

function App() {
  const [filters, setFilters] = useState<Keyword[]>([]);

  const toggleFilter = (filter: Keyword) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <>
      <Filters toggleFilter={toggleFilter} activeFilters={filters}/>
      <Army filters={filters} />
    </>
  );
}

export default App;
