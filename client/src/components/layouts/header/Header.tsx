import { FC, memo } from "react";
import Logo from "../../../assets/logo";
import Heart from "../../../assets/heart";
import Button from "../../elemets/button/Button";
import Burger from "../../../assets/burger";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const Header:FC = ():JSX.Element => {
  const navigate = useNavigate();

  const pageTo = () => {
    navigate("/");
  }

  return(
    <div className="header">
      <div className="header__body">
        <div className="left-box">
          <Logo/>

          <div className="left-box__navigate">
            <Button text="Каталог" size="small" callback={pageTo}>
              <Burger/>
            </Button>
          </div>
        </div>

        <div className="right-header">
          <div className="right-header__info">
            <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
            <a href="tel:+78005553535" className="right-header__phone">+7 800 555 35 35</a>
          </div>

          <div className="right-header__favorites">
            <Heart/>
            <Link to="/favorites" className="right-header__link">Избранное</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);