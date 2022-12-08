import { FC, memo } from "react";
import plural from "plural-ru";

import "./style.css";

interface CountFavorites {
  count: number;
}

const CountFavorites:FC<CountFavorites> = ({count}):JSX.Element => {
  
  const countFav = `${count} ${plural(count, "позиция", "позиции", "позиций")}`;

  return(
    <div className="count-favorites">
      <span>Избранные товары — {countFav}</span>
    </div>
  );
}

export default memo(CountFavorites);