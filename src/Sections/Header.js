import React from 'react'
import '../index.css'
import logo from './images/logo.jpg'


function Header(props) {
    return (
        <header>
            <div className="left-header">
                <nav className="left-nav">
                    <button onClick={props.onShowCompositions}>Композиции</button>
                    <button onClick={props.onShowBouquets}>Букеты</button>
                </nav>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" onClick={props.onShowMain} />
            </div>
            <div className="right-header">
                <nav className="right-nav">
                    <button onClick={props.onShowDelivery}>Доставка</button>
                    <button onClick={props.onShowRange}>Ассортимент</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;

