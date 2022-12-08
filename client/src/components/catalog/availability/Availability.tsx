import React, { FC, memo } from "react";

import "./style.css";

interface IAvailability {
  availability?: boolean;
  img_src?: string
}

const Availability:FC<IAvailability> = ({availability, img_src}):JSX.Element => {
  // if(!availability) {
  //   return(
  //     <div className="availability">Нет в наличии</div>
  //   );
  // } else return null
  return(
    <>
      <img className={!availability ? "availability__img availability__img_null" : "availability__img"} src={`http://localhost:4000${img_src}`} alt=""/>
      {!availability ? <div className="availability__block">Нет в наличии</div> : null}
    </>
  );
}

export default memo(Availability);