import React from 'react';
// import 'bulma/css/bulma.css';
import {Button} from 'reactbulma';
import axios from 'axios';

const card = ( props ) => (
    <div>
        <img src={props.image} alt="pkmnimg"></img>
    </div>
);

export default card;