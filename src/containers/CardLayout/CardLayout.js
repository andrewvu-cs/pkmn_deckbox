import React, { Component } from 'react';

import Card from '../../components/CardDetails/Card/Card';
import Details from '../../components/CardDetails/Details/Details';
import axios from 'axios';

class CardLayout extends Component{

    state={
        card: "",
        ability: "",
        attack1: "",
        attack2: ""
    }

    componentDidMount(){
        const pokemon = require('pokemontcgsdk');

         pokemon.card.find('base1-2')
            .then(result => {
                console.log(result);
                this.setState({
                    card: result.card,
                    ability: result.card.ability,
                    attack1: result.card.attacks[0],
                    attack2: result.card.attacks[1]
                });
            console.log("done");
            console.log(this.state.attacks)
            })
    }


    render(){
        return(
            <div>
                <Card image={this.state.card.imageUrlHiRes}/>
                <Details 
                    name={this.state.card.name} 
                    hp={this.state.card.hp} 
                    abilityType = {this.state.ability.type} 
                    ability={this.state.ability.name}
                    abilityText={this.state.ability.text}
                    attackCost = {this.state.attack1.cost}
                    attackName = {this.state.attack1.name}
                    attackText = {this.state.attack1.text}
                    attackDamage = {this.state.attack1.damage}
                    />
            </div>
        )
    }

}

export default CardLayout;