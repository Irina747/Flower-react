import React, {Component} from 'react'
import './index.css'
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import Delivery from "./Sections/Delivery";
import Bouquets from "./Sections/Bouquets";
import Compositions from "./Sections/Compositions";
import Range from "./Sections/Range";
import Main from "./Sections/Main";

class App extends Component {
    state = {
        showBouquets: false,
        showCompositions: false,
        showDelivery: false,
        showRange: false,
        showMain: true
    }

    toggleBouquetsHandler = () => {
        const yes = true
        const no = false
        this.setState({
            showBouquets: yes,
            showCompositions: no,
            showDelivery: no,
            showRange: no,
            showMain: no
        })
    }
    toggleCompositionsHandler = () => {
        const yes = true
        const no = false
        this.setState({
            showBouquets: no,
            showCompositions: yes,
            showDelivery: no,
            showRange: no,
            showMain: no
        })
    }
    toggleDeliveryHandler = () => {
        const yes = true
        const no = false
        this.setState({
            showBouquets: no,
            showCompositions: no,
            showDelivery: yes,
            showRange: no,
            showMain: no
        })
    }
    toggleRangeHandler = () => {
        const yes = true
        const no = false
        this.setState({
            showBouquets: no,
            showCompositions: no,
            showDelivery: no,
            showRange: yes,
            showMain: no
        })
    }
    toggleMainHandler = () => {
        const yes = true
        const no = false
        this.setState({
            showBouquets: no,
            showCompositions: no,
            showDelivery: no,
            showRange: no,
            showMain: yes
        })
    }


    render() {
        let content = <Main />

        if (this.state.showDelivery) {
            content =  <Delivery />
        } else if (this.state.showBouquets) {
            content = <Bouquets />
        } else if (this.state.showCompositions) {
            content = <Compositions />
        } else if (this.state.showRange) {
            content = <Range />
        }

        return (

            <div className='wrapper'>
                <Header
                    onShowBouquets={this.toggleBouquetsHandler}
                    onShowCompositions={this.toggleCompositionsHandler}
                    onShowDelivery={this.toggleDeliveryHandler}
                    onShowRange={this.toggleRangeHandler}
                    onShowMain={this.toggleMainHandler}
                />
                {content}
                <Footer/>
            </div>
        )
    }

}


export default App;
