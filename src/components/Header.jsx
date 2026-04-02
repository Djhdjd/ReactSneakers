import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import Logo from "../assets/img/image 4.svg";
import "../assets/style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={Logo} alt="logo" />

        <div className="header__info">
          <h1 className="header__title">REACT SNEAKERS</h1>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="header__right">
        <div className="header__cart">
          <FiShoppingCart size={22} />
          <span>1205 руб.</span>
        </div>

        <FiHeart size={22} className="header__icon" />
        <FiUser size={22} className="header__icon" />
      </div>
    </header>
  );
}