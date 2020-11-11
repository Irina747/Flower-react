import React from "react";
import './Main.css';
import image_1 from './images/2.png'

function Main() {
    return (
        <div>
            <img src={image_1} className='leftImg' alt="image"/>
            <div className='primary'>
                <h1>PINKROSE PREMIUM FLORIST</h1>
                <p>
                    Хотите заказать доставку цветов? Тогда PinkRose Premium Florist – именно то, что вы ищете.
                    Мы предлагаем большой выбор букетов и композиций из свежих цветов.
                    Все композиции на сайте авторские и отвечают тенденциям современной флористики.
                    <br/>
                    <br/>
                    Сделать свой заказ вы можете заказав звонок на нашем сайте всего в несколько кликов.
                    Или вы можете позвонить по телефону <button>8 (909) 906-19-26</button>, и наши специалисты помогут вам с выбором,
                    оформлением заказа и проведением оплаты.
                    <br/>
                    <br/>
                    С нами у вас есть возможность:
                    <ul>
                        <li> &#x2740; &nbsp; Купить цветы без наценок и посредников</li>
                        <li> &#x2740; &nbsp; Получить своевременный отчёт о доставке вашего подарка</li>
                        <li> &#x2740; &nbsp; Получить букет, соответствующий образцу на сайте</li>
                        <li> &#x2740; &nbsp; Приложить к букету бесплатную открытку с вашим текстом</li>
                        <li> &#x2740; &nbsp; Получить бесплатное фото доставки</li>
                    </ul>
                    Мы гарантируем, что в букетах используются только свежие цветы.
                    Также мы приложим к вашему букету специальное средство, которое нужно будет добавить в воду в вазе,
                    тогда срок свежести цветов увеличится ещё больше.
                </p>
            </div>
            <img src={image_1} className='rightImg' alt="image"/>
        </div>
    )
}

export default Main;