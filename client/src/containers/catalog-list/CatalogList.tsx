import { FC, useCallback } from "react";
import List from "../../components/layouts/list/List";
import CountFavorites from "../../components/layouts/count-favorites/CountFavorites";
import ItemFavorites from "../../components/catalog/item-favorites/ItemFavorites";
import { Query } from "../../graphql/generated";
import {observer} from "mobx-react-lite"

import favorites from "../../store/favorites";

const CatalogList:FC = ():JSX.Element => {

  const callbacks = {
    deleteInFavorites: useCallback((id: number) => {
      favorites.deleteCarFacorites(id);
    }, [])
  }

  const renders = {
    item: useCallback((item: Query['car']) => (
      <ItemFavorites
        item={item}
        key={item?.id}
        deleteInFavorites={callbacks.deleteInFavorites}
      />
    ), [])
  }

  return(
    <>
      <CountFavorites count={favorites.count}/>
      <List items={favorites.getFavorites} renderItem={renders.item}/>
    </>
  );
}

export default observer(CatalogList);