//const addsubname =require("./index")
//console.log(add(5,6))
//console.log(add(454,55));
// console.log(add("abc",123));
// console.log(addsubname);          // now this addsubname work as object and the exported item work as its method
// console.log(addsubname.add(5,95));
// console.log(addsubname.sub(900,45));
// console.log(addsubname.name);
//----------------------------------now if we want to excess the  function not as objct so we can do this
const { add, sub, name } = require("./index")
console.log(add(5, 6));
console.log(name);
