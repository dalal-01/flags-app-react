import React, { Fragment } from "react";
import FilterBySearch from "./FilterBySearch.jsx";
import FilterByList from "./FilterByList.jsx";

function FilterSection() {
  return (
    <Fragment>
      <section className="filter-section px-4 px-md-5 py-4 py-md-5 d-flex justify-content-between flex-wrap gap-5">
        <FilterBySearch />
        <FilterByList />
      </section>
    </Fragment>
  );
}

export default FilterSection;
