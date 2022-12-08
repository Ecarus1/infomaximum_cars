import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect } from "react";
import Item from "../../components/catalog/item/Item";
import Grid from "../../components/layouts/grid/Grid";
import carsJSON from "../../fake_cars.json";
import { Query } from "../../graphql/generated";
import catalog from "../../store/catalog";
import favorites from "../../store/favorites";


const CatalogGrid:FC = ():JSX.Element => {
  const cars: Query['cars'] = carsJSON;

  const callbacks = {
    addInFavorites: useCallback((id: number) => {
      favorites.pushCarId(id);
    }, [])
  }

  const renders = {
    item: useCallback((item: Query['car']) => {
      if(item) {
        return (
          <Item
            item={item}
            key={item?.id}
            favorites={favorites.getIds.includes(item?.id)}
            addInFavorites={callbacks.addInFavorites}
          />
        )
      }
    }, [favorites.getIds])
  }

  return(
    <Grid items={catalog.getCars} renderItem={renders.item}/>
  );
}

export default observer(CatalogGrid);