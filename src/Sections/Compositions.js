import React from "react";
import './Bouquets.css';
import image_1 from './images/comp/comp_1.png'
import image_2 from './images/comp/comp_2.png'
import image_3 from './images/comp/comp_3.png'
import image_4 from './images/comp/comp_4.png'
import image_5 from './images/comp/comp_5.png'
import image_6 from './images/comp/comp_6.png'
import image_7 from './images/comp/comp_7.png'
import image_8 from './images/comp/comp_8.png'

function Compositions() {
    return(
        <div className="bouquets">
            <div className="card">
                <img src={image_1} alt="image"/>
                <h4>Вишневый пудинг</h4>
                <p>1 900 руб.</p>
            </div>
            <div className="card">
                <img src={image_2} alt="image"/>
                <h4>Романтика</h4>
                <p>2 100 руб.</p>
            </div>
            <div className="card">
                <img src={image_3} alt="image"/>
                <h4>Лиловый микс</h4>
                <p>1 600 руб.</p>
            </div>
            <div className="card">
                <img src={image_4} alt="image"/>
                <h4>Приятный вечер</h4>
                <p>1 500 руб.</p>
            </div>
            <div className="card">
                <img src={image_5} alt="image"/>
                <h4>Богема</h4>
                <p>4 100 руб.</p>
            </div>
            <div className="card">
                <img src={image_6} alt="image"/>
                <h4>Прованс</h4>
                <p>1 800 руб.</p>
            </div>
            <div className="card">
                <img src={image_7} alt="image"/>
                <h4>Розовое сердце</h4>
                <p>2 300 руб.</p>
            </div>
            <div className="card">
                <img src={image_8} alt="image"/>
                <h4>Сияние</h4>
                <p>2 100 руб.</p>
            </div>
        </div>
    )
}

export default Compositions;