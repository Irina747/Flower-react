import React from "react";
import './Bouquets.css';
import image_1 from './images/sort/sort_1.png'
import image_2 from './images/sort/sort_2.png'
import image_3 from './images/sort/sort_3.png'
import image_4 from './images/sort/sort_4.png'
import image_5 from './images/sort/sort_5.png'
import image_6 from './images/sort/sort_6.png'
import image_7 from './images/sort/sort_7.png'
import image_8 from './images/sort/sort_8.png'

function Range() {
    return(
        <div className="bouquets">
            <div className="card">
                <img src={image_1} alt="image"/>
                <h4>Розы</h4>
                <p>от 100 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_2} alt="image"/>
                <h4>Пионы</h4>
                <p>от 200 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_3} alt="image"/>
                <h4>Тюльпаны</h4>
                <p>от 80 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_4} alt="image"/>
                <h4>Герберы</h4>
                <p>от 90 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_5} alt="image"/>
                <h4>Лилии</h4>
                <p>от 200 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_6} alt="image"/>
                <h4>Гортензии</h4>
                <p>от 300 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_7} alt="image"/>
                <h4>Ромашки</h4>
                <p>от 80 руб./шт.</p>
            </div>
            <div className="card">
                <img src={image_8} alt="image"/>
                <h4>Ранункулюсы</h4>
                <p>от 400 руб./шт.</p>
            </div>
        </div>
    )
}

export default Range;