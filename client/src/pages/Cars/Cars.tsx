import { FC } from "react";
import TopContainer from "../../containers/top-container/TopContainer";
import ToolsContainer from "../../containers/tools-container/ToolsContainer";
import CatalogGrid from "../../containers/catalog-grid/CatalogGrid";
import catalog from "../../store/catalog";

import useInit from "../../hooks/useInit";

const Cars:FC = ():JSX.Element => {

  useInit(async () => {
    await catalog.init();
    catalog.sorting();
  }, []);

  return (
    <>
      <TopContainer />
      <ToolsContainer />
      <CatalogGrid/>
    </>
  );
};

export default Cars;
