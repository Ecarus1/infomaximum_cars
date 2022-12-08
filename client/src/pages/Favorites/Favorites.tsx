import { FC } from "react";
import TopContainer from "../../containers/top-container/TopContainer";
import CatalogList from "../../containers/catalog-list/CatalogList";

import useInit from "../../hooks/useInit";
import favorites from "../../store/favorites";

const Favorites:FC = ():JSX.Element => {

  useInit(async () => {
    await Promise.all(favorites.ids.map(item => favorites.fetchCar(item)));
  }, [favorites.getIds]);

  return(
    <>
      <TopContainer/>
      <CatalogList/>
    </>
  );
}

export default Favorites;