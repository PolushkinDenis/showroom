import React from "react";
import Collection from "../../components/collection/Сollection";
import ImportantToUs from "../../components/importantToUs/ImportantToUs";
import Season from "../../components/season/Season";
import Team from "../../components/team/Team";
import './Main.css'

const Main = () => {

    return (
        <div className="main content">
            <div className="season">
                <Season />
            </div>
            <div>
                <Collection />
            </div>
            <ImportantToUs />
            <Team />

        </div>
    )
}

export default Main