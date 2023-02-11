import React from "react";
import './PageName.css'

const PageName = ({name}) => {

    return (
        <>
            <h2 className="page-h2">{name}</h2>
            <div className="page__links">
                <pre className="page__links-p">
                    <p className="link__main">Главная — </p>
                    <p className="link__secondary">{name}</p>
                </pre>
            </div>
        </>
    )
}

export default PageName