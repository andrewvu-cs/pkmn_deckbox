import React from 'react';

import classes from './Ability.module.scss';

const ability = ( props ) => (
    <div className={classes.Ability}>
        <h2>{props.ability.type}: {props.ability.name}</h2>
        <p>{props.ability.text}</p>
    </div>
);

export default ability;