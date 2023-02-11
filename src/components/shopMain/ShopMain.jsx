import React, { useEffect, useState } from "react";
import { collections } from '../../data/collections'
import Thing from "./things/Thing";
import './ShopMain.css'
import PageName from "../pageName/PageName";

const ShopMain = () => {
    const [viewClother, setViewClother] = useState([])
    const [pages, setPages] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [sorted, setSorted] = useState(collections)
    const [selectedType, setSelectedType] = useState("all")

    const paginate = (e) => {
        const start = (e.target.id - 1) * 9
        const end = e.target.id * 9
        setViewClother(sorted.slice(start, end))
        setActivePage(e.target.id)
        window.scrollTo(0, 150);
    }

    const sorting = (type) => {
        let sortedClothes = []
        if (type === "all") {
            sortedClothes.push(...collections)
            setSorted(collections)
        }
        else {
            sortedClothes.push(...collections.filter(collection => collection.type === type))
            setSorted(sortedClothes)
        }
        const pagesCount = Math.ceil(sortedClothes.length / 9)
        let pagesArr = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i)
        }
        setPages(pagesArr)
        setViewClother(sortedClothes.slice(0, 9))
        setActivePage(1)
        setSelectedType(type)
    }

    useEffect(() => {
        const pagesCount = Math.ceil(collections.length / 9)
        let pagesArr = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i)
        }
        setPages(pagesArr)
        setViewClother(collections.slice(0, 9))
    }, [collections])

    console.log(viewClother)

    return (
        <div className="shop">
            <PageName name={"Магазин"}/>
            <div className="shop__sort">
                <button className={selectedType === "all" ? "btn_active" : "btn"} onClick={() => sorting("all")}>Все</button>
                <button className={selectedType === "shirt" ? "btn_active" : "btn"} onClick={() => sorting("shirt")}>Футболки</button>
                <button className={selectedType === "sweatshirt" ? "btn_active" : "btn"} onClick={() => sorting("sweatshirt")}>Свитшоты</button>
                <button className={selectedType === "swimsuit" ? "btn_active" : "btn"} onClick={() => sorting("swimsuit")}>Купальники</button>
                <button className={selectedType === "hoodies" ? "btn_active" : "btn"} onClick={() => sorting("hoodies")}>Толстовки</button>
            </div>
            <div className="shop__view_1">
                Показано: {viewClother.length} из {collections.length} товаров
            </div>
            <div className="shop__collection">
                {viewClother.map((collection) => (
                    <Thing collection={collection} key={collection.id} />
                ))}
            </div>
            <div className="shop__view_2">
                Показано: {viewClother.length} из {collections.length} товаров
            </div>
            <div className="shop__page">
                {pages.map((page) => (
                    <button disabled={activePage == page ? true : false} className={activePage == page ? 'page__active' : 'page'} id={page} onClick={e => paginate(e)} key={page}>{page}</button>
                ))}
            </div>
        </div>
    )
}

export default ShopMain