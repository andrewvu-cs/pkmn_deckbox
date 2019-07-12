import React from 'react';

import Moves from './Moves/Moves';
import Name from './Name/Name';
import HP from './Hp/Hp';

const details = ( props ) => (
    <div>
        <Name name={props.name}/>
        <HP hp={props.hp} />
        <Moves />
    </div>

);

export default details;