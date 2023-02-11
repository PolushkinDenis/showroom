import React from "react";
import "./Season.css";
import seasonMain from '../../images/season/season-main.png'
import seasonRight from '../../images/season/season-right.png'
import seasonLeft from '../../images/season/season-left.png'
import { useNavigate } from "react-router-dom";

const Season = () => {
    const navige = useNavigate()

    return (
        <div className="season content">
            <div className="season__content">
                <h1>Новые поступления <br /> в этом сезоне</h1>
                <div className="season__content-text">
                    <p>
                        Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                        Время исследовать.
                    </p>
                </div>
                <div className="season__content-buttons">
                    <button onClick={() => navige("/showroom/shop")}>Открыть магазин</button>
                </div>

            </div>
            <div className="season__images">
                <img className="season__images-left" src={seasonLeft}></img>
                <img className="season__images-main" src={seasonMain}></img>
                <img className="season__images-right" src={seasonRight}></img>
            </div>
           
        </div>
    )
}

export default Season