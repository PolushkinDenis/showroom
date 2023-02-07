import React, {useEffect} from "react";
import Collection from "../../components/collection/Сollection";
import ImportantToUs from "../../components/importantToUs/ImportantToUs";
import Season from "../../components/season/Season";
import Team from "../../components/team/Team";
import { useLocation } from "react-router-dom";
import './Main.css'

const Main = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

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