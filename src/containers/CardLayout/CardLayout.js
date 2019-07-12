import React, { Component } from 'react';
import Card from '../../components/CardDetails/Card/Card';
import axios from 'axios';

class CardLayout extends Component{

    state={
        img: ""
    }


    render(){
        const pokemon = require('pokemontcgsdk');

        pokemon.card.find('base1-4')
            .then(result => {
                this.setState({
                    img: result.card.imageUrl
                });
            })

        return(
            <div>
                <Card image={this.state.img}/>
                <p>{this.state.img}hi</p>
            </div>
        )
    }

}

export default CardLayout;