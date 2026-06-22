// Export an "add" function
export function add(a, b) {
  return a + b;
}

export const name = "Adam";
export const age = 89;

//**Export together */

const age = 90;
const name = "Adams"

export {age, name}


// Import an "add" function
import { multiply} from './function.js';
let result = add(2, 3);