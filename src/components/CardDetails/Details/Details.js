import React from "react";
import { Box, Media, Content } from "reactbulma";

import Moves from "./Moves/Moves";
import Ability from "./Ability/Ability";
import Name from "./Name/Name";
import HP from "./Hp/Hp";

const details = props => (
  <Box>
    <Name name={props.name} />
    <HP hp={props.hp} />
    <Ability ability={props.ability} />
    <Moves />
  </Box>
);

export default details;
