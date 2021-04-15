"use strict";

// LOOSE EQUALITY (==) Does not care about type
// LOOSE INEQUALITY (!=)
let num1 = 5;
let maybeNum = "5";

console.log(typeof (num1 + maybeNum));

if(num1 == maybeNum) {
    console.log("these are equivalent");
}

// STRICT EQUALITY -- (===) - matching both date type and value
// STRICT EQUALITY --  (!==)
