import { FC, memo } from "react";
import { Query } from "../../../graphql/generated";

import "./style.css";

interface Grid {
  items: Query['cars'];
  renderItem: Function;
}
 
const Grid:FC<Grid> = ({items, renderItem}):JSX.Element => {
  return(
    <div className="grid">
      {items.map(item => renderItem(item))}
    </div>
  );
}

export default memo(Grid);