import { minNum, maxNum } from "./mathUtils.js";
import { splitString } from "./stringUtils.js";

const numbers = [1, 18, 3, 4, 15, 6, 17, 888, 33, 10, 45];
const sports = ["Basketball,Soccer,Football,Tennis,Golf"];


console.log(minNum(numbers));
console.log(maxNum(numbers));
console.log(splitString(sports));