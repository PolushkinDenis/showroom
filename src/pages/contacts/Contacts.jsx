import React, { useEffect, useState } from 'react'
import PageName from '../../components/pageName/PageName'
import "./Contacts.css"

const Contacts = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [successfulError, setSuccessfulError] = useState(false)

    const send = () => {
        let check = true
        if(name === null || name.split('').length <= 1) {
            setNameError(true)
            check = false
            setTimeout(() => (
                setNameError(false)
            ), [2000]) 
        }
        if(email === null || email.split('').length <= 1) {
            setEmailError(true)
            check = false
            setTimeout(() => (
                setEmailError(false)
            ), [2000])
        }
        if(phone === null || phone.split('').length <= 1) {
            setPhoneError(true)
            check = false
            setTimeout(() => (
                setPhoneError(false)
            ), [2000])
        }
        if(message === null || message.split('').length <= 5) {
            setMessageError(true)
            check = false
            setTimeout(() => (
                setMessageError(false)
            ), [2000])
        }
        if(check) {
            setSuccessful(true)
        }
        
    }


    useEffect(() => {
        setTimeout(() => (
            setSuccessful(false)
        ), [3000])
    }, [successful])


    return (
        <div className='contacts'>
            <PageName name={"Контакты"}/>
            <div className='contacts__map'>

            </div>
            <div className='contacts__list'>
                <div className='contacts__list-item'>
                    <p className='item-first'>Телефон</p>
                    <p className='item-second'>+7 (927) 163-63-63</p>
                </div>
                <div className='contacts__list-item'>
                    <p className='item-first'>E-mail</p>
                    <p className='item-second'>tigraszver@gmail.com</p>
                </div>
                <div className='contacts__list-item'>
                    <p className='item-first'>Адрес</p>
                    <p className='item-second'>г. Самара, Московское шоссе, 34Б</p>
                </div>
            </div>
            <div className='writeToUs'>
                <h3>Напишите нам</h3>
                <div className='writeToUs__inputs'>
                    <input className={nameError ? 'input-error' : ''} type='text' placeholder='Имя' value={name} onChange={e => setName(e.target.value)}  ></input>
                    <input className={emailError ? 'input-error' : ''} type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className={phoneError ? 'input-error' : ''} type='text' placeholder='Телефон'value={phone} onChange={e => setPhone(e.target.value)}></input>
                    <input className={messageError ? 'input-error' : ''} type='text' placeholder='Сообщение' value={message} onChange={e => setMessage(e.target.value)}></input>
                </div>
                <button className='btn-send' onClick={send}>Оправить</button>
                <div className={successful ? 'successful-active' : 'successful'} >
                    Сообщение успешно отправлено
                </div>
            </div>
        </div>
    )
}

export default Contacts