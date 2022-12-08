import { FC, memo } from "react";
import Delete from "../../../assets/delete";
import Button from "../../elemets/button/Button";
import { Query } from "../../../graphql/generated";
import { formatPrice } from "../../../utils/formatPrice";
import Availability from "../availability/Availability";

import "./style.css";

interface IItemFavorites {
  item: Query['car'];
  deleteInFavorites: Function;
}

const ItemFavorites:FC<IItemFavorites> = ({item, deleteInFavorites}):JSX.Element => {
  return(
    <div className="item-favorites">
      <div className="item-favorites__box-img">
        <Availability availability={item?.availability} img_src={item?.img_src}/>
      </div>

      <div className="item-favorites__box-info">
        <h2 className="item-favorites__name">{item?.brand + " " + item?.model}</h2>

        <div className="item-favorites__paragraphs">
          <p className="item-favorites__text">{item?.description}</p>
          <p className="item-favorites__text item-favorites__text-medium">Год: {item?.model_year}</p>
          <p className="item-favorites__text">Цвет: {item?.color}</p>
        </div>

        <h3 className="item-favorites__price">от {item?.price && formatPrice(item?.price)}</h3>

        <div className="item-favorites__controls">
          <Button text="Выбрать комплектацию" size="large" disable={!item?.availability}/>

          <div className="item-favorites__delete" onClick={() => deleteInFavorites(item?.id)}>
            <Delete/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ItemFavorites);