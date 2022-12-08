import { FC, memo } from "react";
import Select from "../../elemets/select/Select";
import Input from "../../elemets/input/Input";

import "./style.css";

interface IOptions {
  value: string;
  title: string;
}

interface ITools {
  options: Array<IOptions>;
  onSort: Function;
  valueSelect: string;
  onSearch: (search: string) => void;
}

const Tools:FC<ITools> = ({options, onSort, valueSelect, onSearch}): JSX.Element => {
  return(
    <div className="tools">
      <Select options={options} onSort={onSort} valueSelect={valueSelect}/>
      <Input placeholder="Найти авто" onSearch={onSearch}/>
    </div>
  );
}

export default memo(Tools);