import { FC, memo, useCallback } from "react";
import Button from "../../elemets/button/Button";
import Heart from "../../../assets/heart";
import HeartStroke from "../../../assets/heart-stroke";
import { Query } from "../../../graphql/generated";
import { formatPrice } from "../../../utils/formatPrice";
import Availability from "../availability/Availability";

import "./style.css";

interface Item {
  item: Query['car'];
  addInFavorites: Function;
  favorites: boolean;
}

const Item:FC<Item> = ({item, favorites, addInFavorites}):JSX.Element => {

  const picture = () => {
    if (favorites) {
      return <Heart color={"#240C86"}/>
    } 
    return <HeartStroke color={!item?.availability ? "#D9D9D9" : "#000000"}/>
  }

  return(
    <div className="item">
      <div className="item__img-box">
        <Availability availability={item?.availability} img_src={item?.img_src}/>
      </div>

      <div className="item__info">
        <h3 className="item__model">{item?.brand + " " + item?.model}</h3>
        <div className="item__addition">
          <span className="item__year">Год: {item?.model_year}</span>
          <span>Цвет: {item?.color}</span>
        </div>
        <h4 className="item__price">от {item?.price && formatPrice(item?.price)}</h4>
      </div>

      <div className="item__controls">
        <Button text="Купить" size="big" disable={!item?.availability}/>
        <div className="item__icon-box" onClick={() => addInFavorites(item?.id)}>
          {picture()}
        </div>
      </div>
    </div>
  );
}

export default memo(Item);