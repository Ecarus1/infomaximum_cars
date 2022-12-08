import { FC, memo, useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import Search from "../../../assets/search";

import "./style.css";

interface Input {
  placeholder: string;
  onSearch: (search: string) => void;
}

const Input:FC<Input> = ({placeholder = "Текст", onSearch}):JSX.Element => {
  const [value, setValue] = useState('');
  const boxRef = useRef<HTMLDivElement>(null);            // Ссылка на DOM-элемент блока
  const inputRef = useRef<HTMLInputElement>(null);        // Ссылка на DOM-элемент инпута
  const buttonRef = useRef<HTMLButtonElement>(null);      // Ссылка на DOM-элемент кнопки
  const logicClick = useRef(true);

  /**
   * Функция для поднятие значение введённого значение поля в контейнер
   * Уже в контейнере это значение отправляется в store
   */
  const handleSearch = () => {
    if(logicClick.current) {
      logicClick.current = false;
      onSearch(value)
    }
  }

  /**
   * Ставим в переменной logicClick true - говорим функции handleSearch, что можно поднимать данные
   * Далее создаём запихиваем данные в локальный стейт
   * @param e ChangeEvent
   */
  const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
    logicClick.current = true;
    setValue(e.target.value);
  }

  /**
   * Функция для обработки действия пользователя
   * Подразумевается что пользователь пользуется Tab для перемещения
   * Если пользователь нажал на Enter, то появляется возможность для ввода поискового слова
   * @param e KeyboardEvent
   */
  const controlEventBox = (e:KeyboardEvent<HTMLDivElement>) => {
    if(e.key === "Enter" && inputRef.current) {
      inputRef.current.focus();
    }
  }

  /**
   * Функция для обработки действия пользователя
   * Если пользователь нажмёт нажмёт на Enter (будучи зафокушеным на инпуте)
   * То вызываем встроенный метод click
   * @param e KeyboardEvent
   */
  const controlEventInput = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && buttonRef.current) {
      buttonRef.current.click();
    }
  }

  /**
   * Функция для обработки нажатия на сам гланый Div (classname = input)
   * Если пользователь нажимает на край блока - то фокус падает на инпут и можно будет писать 
   */
  const clickBox = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }

  return(
    <div className="input" ref={boxRef} tabIndex={0} onKeyDown={(e) => controlEventBox(e)} onClick={() => clickBox()}>
      <input 
        className="input__field" 
        ref={inputRef} 
        tabIndex={-1} 
        type="text" 
        placeholder={placeholder} 
        onChange={(e) => onChangeValue(e)} 
        value={value}
        onKeyDown={(e) => controlEventInput(e)}
      />
      <button className="input__btn" onClick={() => handleSearch()} tabIndex={-1} ref={buttonRef}>
        <Search/>
      </button>
    </div>
  );
}

export default memo(Input);