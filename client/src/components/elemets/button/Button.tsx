import {ReactNode, FC, memo, useEffect, useLayoutEffect} from "react";

import "./style.css";

type Size = "big" | "small" | "large";

interface Button {
  children?: ReactNode | null;
  text: string;
  size: Size;
  disable?: boolean;
  callback?: Function;
}

const Button: FC<Button> = ({text = "Кнопка", children = null, size = "small", disable, callback = () => {}}):JSX.Element => {

  /**
   * Функция для определения, какой наложить стил для кнопки
   * @returns Object
   */
  const typeDefinition = () => {
    switch (size) {
      case "big":
        return {
          minWidth: "254px",
          height: "56px"
        }
  
      case "small":
        return {
          minWidth: "135px",
          height: "36px"
        }
  
      case "large":
        return {
          minWidth: "259px",
          height: "56px"
        }
    }
  }

  return(
    <button className="button" style={typeDefinition()} disabled={disable} onClick={() => callback()}>
      {children}
      <span className="button__text" style={children ? {margin: "0 0 0 7px"} : {}}>{text}</span>
    </button>
  );
}

export default memo(Button);