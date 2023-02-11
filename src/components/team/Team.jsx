import React from "react";
import "./Team.css"
import team from "../../images/team/team.png"
import { NavLink } from "react-router-dom";
const Team = () => {

    return (
        <div className="team">
            <h2>Команда мечты Womazing</h2>
            <div className="team__content">
                <img src={team} alt="team"></img>
                <div className="team__about">
                    <div className="team__about-header">Для каждой</div>
                    <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                    <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                    <NavLink to="/showroom/about">Подробнее о бренде</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Team