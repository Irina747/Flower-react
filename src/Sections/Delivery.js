import React, {Component} from 'react'
import '../index.css'
import flower from './images/1.png'


function Delivery() {
        return (
            <section id="main">
                <div id="text">
                    <img src={flower} alt="flower"/>
                    <h1>Доставка цветов</h1>
                    <p>Доставим в любую <br/> точку мира по вашей заявке</p>
                </div>
                <div id="form">
                    <h2>Заказать обратный звонок</h2>
                    <form>
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" id="name" name="name" placeholder="Введите имя" required/>
                        <label htmlFor="phone">Ваш телефон</label>
                        <input type="tel" id="phone" name="phone" placeholder="Введите телефон" required/>
                        <button id="submit" type='submit'>Заказать</button>
                    </form>
                </div>
            </section>
        );
}

export default Delivery;