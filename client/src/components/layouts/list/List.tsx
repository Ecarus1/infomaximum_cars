import { FC, memo } from "react";
import ItemFavorites from "../../catalog/item-favorites/ItemFavorites";
import { Query } from "../../../graphql/generated";

import "./style.css";

interface IList {
  items: Query['cars'];
  renderItem: Function
}

const List:FC<IList> = ({items, renderItem}):JSX.Element => {
  return(
    <div className="list">
      {/* <ItemFavorites/>
      <ItemFavorites/>
      <ItemFavorites/> */}
      {items.map(item => renderItem(item))}
    </div>
  );
}

export default memo(List);