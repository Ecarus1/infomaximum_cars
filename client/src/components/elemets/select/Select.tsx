import { ChangeEvent, FC, memo, useCallback } from "react";
import Sort from "../../../assets/sort";

import "./style.css";

interface IOptions {
  value: string;
  title: string;
}

interface ISelect {
  options: Array<IOptions>;
  onSort: Function;
  valueSelect: string;
}

const Select: FC<ISelect> = ({options, onSort, valueSelect}): JSX.Element => {

  /**
   * Функция для для поднятия значение в контейнер
   */
  const onSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onSort(e.target.value)
  }, []);

  return(
    <div className="select">
      <Sort/>
      <select className="select__list" onChange={(e) => onSelect(e)} value={valueSelect}>
        {options.map((item: IOptions) => (<option value={item.value} key={item.value}>{item.title}</option>))}
      </select>
    </div>
  );
}

export default memo(Select);