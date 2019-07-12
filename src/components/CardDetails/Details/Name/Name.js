import React from 'react';

import classes from './Name.module.scss';

const name = ( props ) => (
    <div className={classes.Name}>
        <h1>Name: {props.name}</h1>
    </div>
)


export default name;