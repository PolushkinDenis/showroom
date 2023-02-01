import React from "react";
import "./ImportantToUs.css"
import responsibility from '../../images/importantToUs/responsibility.png'
import speed from '../../images/importantToUs/speed.png'
import quality from '../../images/importantToUs/quality.png'


const ImportantToUs = () => {

    return (
        <div className="importantToUs">
            <h2>Что для нас важно</h2>
            <div className="importantToUs__table">
                <div className="importantToUs__table-1">
                    <img src={quality} alt="quality"></img>
                    <h3>Качество</h3>
                    <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                </div>
                <div className="importantToUs__table-1">
                    <img src={speed} alt="speed"></img>
                    <h3>Скорость</h3>
                    <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                </div>
                <div className="importantToUs__table-1">
                    <img src={responsibility} alt="responsibility"></img>
                    <h3>Ответственность</h3>
                    <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                </div>
            </div>

        </div>
    )
}

export default ImportantToUs