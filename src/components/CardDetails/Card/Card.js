import React from 'react';
// import 'bulma/css/bulma.css';
import {Button} from 'reactbulma';
import axios from 'axios';

const card = ( props ) => (
    <div>
        <Button primary>Hi</Button>
        <img src={props.image} alt="pkmnimg"></img>
    </div>
);

export default card;