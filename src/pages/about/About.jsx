import React, {useEffect} from "react";
import './About.css'
import first from '../../images/about/first.png'
import second from '../../images/about/second.png'
import { useLocation, useNavigate } from "react-router-dom";
import PageName from "../../components/pageName/PageName";


const About = () => {

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return (
        <div className="about">
            {/* <h1>О бренде</h1>
            <div className="about__links">
                <pre className="clothersItem__links-p">
                    <p className="link__main">Главная — </p>
                    <p className="link__secondary">О бренде</p>
                </pre>
            </div> */}
            <PageName name={"О бренде"}/>
            <div className="about__content">
                <div className="about__content-first">
                    <img src={first} alt="first"></img>
                    <div className="text-first">
                        <h3>Идея и женщина</h3>
                        <div className="content__text">
                            <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны.
                                Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов
                                семьи не является модельером.</p>
                            <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций.
                                Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества,
                                характерная для ряда итальянских prêt-a-porter компаний.</p>
                        </div>
                    </div>
                </div>
                <div className="about__content-second">
                    <div className="text-second">
                        <h3>Магия в деталях</h3>
                        <div className="content__text">
                            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году.
                                Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                            <p>Несмотря на то, что по образованию основательница была адвокатом,
                                ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила
                                одежду для женщин, а мать основала профессиональную школу кроя и шитья).
                                Стремление производить одежду для масс несло в себе большие перспективы,
                                особенно в то время, когда высокая мода по-прежнему доминировала, а
                                рынка качественного prêt-a-porter попросту не существовало.</p>
                        </div>
                    </div>
                    <img src={second} alt="second"></img>
                </div>
                <div className="btn-navigate">
                    <button onClick={() => navigate('/showroom/shop')}>Перейти к магазину</button>
                </div>

            </div>
        </div>
    )
}


export default About