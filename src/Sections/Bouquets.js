import React from "react";
import './Bouquets.css';
import image_1 from './images/bouquet/bouquet_1.png'
import image_2 from './images/bouquet/bouquet_2.png'
import image_3 from './images/bouquet/bouquet_3.png'
import image_4 from './images/bouquet/bouquet_4.png'
import image_5 from './images/bouquet/bouquet_5.png'
import image_6 from './images/bouquet/bouquet_6.png'
import image_7 from './images/bouquet/bouquet_7.png'
import image_8 from './images/bouquet/bouquet_8.png'

function Bouquets() {
    return(
        <div className="bouquets">
            <div className="card">
                <img src={image_1} alt="image"/>
                <h4>Весеннее утро</h4>
                <p>2 100 руб.</p>
            </div>
            <div className="card">
                <img src={image_2} alt="image"/>
                <h4>Очарование</h4>
                <p>1 900 руб.</p>
            </div>
            <div className="card">
                <img src={image_3} alt="image"/>
                <h4>Лунная мелодия</h4>
                <p>1 500 руб.</p>
            </div>
            <div className="card">
                <img src={image_4} alt="image"/>
                <h4>Розовый микс</h4>
                <p>3 900 руб.</p>
            </div>
            <div className="card">
                <img src={image_5} alt="image"/>
                <h4>Теплая встреча</h4>
                <p>2 900 руб.</p>
            </div>
            <div className="card">
                <img src={image_6} alt="image"/>
                <h4>Нежность</h4>
                <p>2 300 руб.</p>
            </div>
            <div className="card">
                <img src={image_7} alt="image"/>
                <h4>После дождя</h4>
                <p>1 500 руб.</p>
            </div>
            <div className="card">
                <img src={image_8} alt="image"/>
                <h4>Дуэт</h4>
                <p>4 100 руб.</p>
            </div>
        </div>
    )
}

export default Bouquets;