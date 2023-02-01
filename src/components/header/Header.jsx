import React from "react";
import './Header.css'
import { NavLink } from "react-router-dom";
import header_img from '../../images/header/header_img.png'
import telephone from '../../images/header/telephone.png'
import basket from '../../images/header/basket.png'
const Header = () => {

    return (
        <header className="content header">
            <div className="header__home">
                <img src={header_img} alt="WOMAZING"></img>
                <NavLink className="header__title" to='/'>WOMAZING</NavLink>
            </div>
            <div className="header__links">
                <NavLink to='/main'>Главная</NavLink>
                <NavLink to='/shop'>Магазин</NavLink>
                <NavLink to='about'>О бренде</NavLink>
                <NavLink to='contacts'>Контакты</NavLink>
            </div>
            <div className="header__phone">
                <img className="phone__img" src={telephone}></img>
                <div className="phone__number">+7(999)823-54-12</div>
                <img className="basket" src={basket}></img>
            </div>

        </header>
    )
}

export default Header