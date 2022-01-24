'use strict';
//strct mode shows error and all
let haslisc = false;
let pass = true;
if(pass) haslis = true; //this line has typing error
if(haslisc) console.log("I can drive");

//functions
function logger(){
    console.log("My name is Piyush");
}

logger(); //function call, invoking function

function add(a,b){
    let x=0;
    x = a+b;
    console.log(x);
}
add(2,3);

function fruitProcessor(apple, oranges){
    console.log(apple,oranges);
    const jiuce = 'Juice wuth $(apples) apples and $(oranges) oranges.';
    return jiuce;
}
const applejuice = fruitProcessor(2,3);
console.log(applejuice);
//Function expressions

function calcAge1(birthYear) {
    
    return (2037 - birthYear);
    
}
const age1 = calcAge1(1991);
console.log(age1);
//expression
const calcAge2 = function(birthYear){
    return(2037 - birthYear)
}
console.log(calcAge2);
//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3);

const yearsUntilRetirment = (birthYear,firstName) =>{
    const age = 2037 - birthYear;
    const retire = 65 -age;
    //return retire;
    return '$(firstName) retires in $(retire)';
}
console.log(yearsUntilRetirment(1991,'piyush'));

//function calling other function -> not writing ths code.
