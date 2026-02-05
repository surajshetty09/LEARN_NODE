const lodash = require('lodash');

const names = ["suraj","ram", "alex","mia"];
const capitalize = lodash.map(names,lodash.capitalize);     //Makes first letter of each string into upper case 

console.log(capitalize);