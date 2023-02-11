import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, decrement, increment } from "../../store/cardSlice";
import PageName from '../../components/pageName/PageName'
import './Card.css'
import { useNavigate } from "react-router-dom";

const Card = () => {
    const navige = useNavigate()
    const clothes = useSelector(state => state.card.clothes)
    const dispatch = useDispatch()
    const [count, setCount] = useState()

    console.log(clothes)

    const changeTotalCount = (e, id) => {
        dispatch(changeCount({ count: e.target.value, id: id }))
    }

    if (clothes.length === 0) {
        return (
            <div className="card">
                <PageName name="Корзина" />
                <h2 className="card__empty">В корзине ничего нет</h2>
                <div className="season__content-buttons">
                    <button onClick={() => navige("/showroom/shop")}>Открыть магазин</button>
                </div>
            </div>
        )
    }

    return (
        <div className="card">
            <PageName name="Корзина" />
            <table>
                <tbody>
                    <tr className="card__table-title">
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Цвет</th>
                        <th>Размер</th>
                        <th>Количество</th>
                        <th>Всего</th>
                    </tr>
                </tbody>
                {clothes.length > 0 && clothes.map((item) => (
                    <tbody key={item.id}>
                        <tr className="card__table-content" >
                            <td >
                                <div className="content-named">
                                    <button>x</button>
                                    <img src={item.img}></img>
                                    <p>{item.title}</p>

                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td><div className="table__color" style={{ backgroundColor: item.color }}></div></td>
                            <td>{item.size}</td>
                            <td><input id={item.id} onChange={e => changeTotalCount(e, item.id)} value={item.count}></input></td>
                            <td>${item.price.substring(1) * item.count}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Card