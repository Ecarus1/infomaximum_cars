import { observer } from "mobx-react-lite";
import { FC, useCallback, useMemo } from "react";
import Tools from "../../components/layouts/tools/Tools";

import catalog from "../../store/catalog";

const ToolsContainer:FC = ():JSX.Element => {

  const callbacks = {
    onSort: useCallback((sort: string) => {
      catalog.sorting(sort);
    }, []),

    onSearch: useCallback((search: string) => {
      catalog.searchFilter(search);
    }, [])
  }

  const options = {
    sort: useMemo(() => ([
      {value: "availability", title: "Сначала в наличии"},
      {value: '+name', title: "По имени (A-Z)"},
      {value: "-name", title: "По имени (Z-A)"},
      {value: "+year", title: "Сначала новее"},
      {value: "-year", title: "Сначала старше"},
      {value: "-price", title: "Сначала дешевле"},
      {value: "+price", title: "Сначала дороже"}
    ]), [])
  }

  return(
    <Tools 
      options={options.sort}
      onSort={callbacks.onSort} 
      valueSelect={catalog.getSort}
      onSearch={callbacks.onSearch}/>
  );
}

export default observer(ToolsContainer);