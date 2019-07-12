import React from 'react';

import Moves from './Moves/Moves';


const details = ( props ) => (
    <div>
        <h1>Pokemon Name: {props.name}</h1>
        <h1>HP: {props.hp}</h1>
        <Moves />
    </div>

);

export default details;