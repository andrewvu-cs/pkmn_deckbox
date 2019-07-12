import React from 'react';

import classes from './Hp.module.scss';

const hp = ( props ) => (
    <div className={classes.Hp}>
        <h1>HP: {props.hp}</h1>
    </div>
);

export default hp;