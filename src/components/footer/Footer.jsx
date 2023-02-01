import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"
import header_img from '../../images/header/header_img.png'
import card from '../../images/footer/card.png'
import twit from '../../images/footer/twit.png'
import fac from '../../images/footer/fac.png'
import inst from '../../images/footer/inst.png'


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__navigation">
                    <div className="footer__home">
                        <div>
                            <img src={header_img} alt="WOMAZING"></img>
                            <NavLink className="footer__title" to='/'>WOMAZING</NavLink>
                        </div>
                        <div className="footer__additionally-documents">
                            <p>© Все права защищены</p>
                            <NavLink to="/">Политика конфиденциальности</NavLink>
                            <NavLink to="/">Публичная оферта</NavLink>
                        </div>

                    </div>
                    <div className="footer__links">
                        <NavLink to='/main'>Главная</NavLink>
                        <div>
                            <NavLink to='/shop'>Магазин</NavLink>
                            <div className="footer__additionally-clothes">
                                <NavLink to="/">Пальто</NavLink>
                                <NavLink to="/">Свитеры</NavLink>
                                <NavLink to="/">Кардиганы</NavLink>
                                <NavLink to="/">Тостовки</NavLink>
                            </div>

                        </div>
                        <NavLink to='about'>О бренде</NavLink>
                        <NavLink to='contacts'>Контакты</NavLink>
                    </div>
                    <div className="footer__phone">
                        <div className="footer__phone-number">+7(999)823-54-12</div>
                        <div className="footer__email">
                            hello@womazing.com
                        </div>
                        <div className="footer__additionally-links">
                            <div className="links__web">
                                <img src={inst}></img>
                                <img src={fac}></img>
                                <img src={twit}></img>
                            </div>
                            <img src={card}></img>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer