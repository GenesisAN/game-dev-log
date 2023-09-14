import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import firstscreen from "./scenes/firstscreen?scene";

export default makeProject({
  scenes: [firstscreen,example],
});
