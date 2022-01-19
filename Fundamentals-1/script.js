//Fundamentals Part 1
//Variables and console log
let js = 'amazing';

console.log(40+8+2);
console.log("Jonas");
console.log(23);

let firstName = "jonas";
console.log(firtName);

let job1 = "Programmer";
let job2 = "teacher";

let myFirstJob = "programmer";
let my_current_job = "Teaccher";

let javascript = true;
console.log(javascript);

console.log(typeof true);
console.log(typeof javascript);
console.log(typeof "jonas");
//dynamic typing - changing type of variable
javascript = 'YES!';
console.log(javascript);

let year;
console.log(year);
console.log(typeof year);
//ans is Undefined

console.log(typeof null);
//ans is OBJECT

//--------------let, const, var----------------
//let can be changed in any point of program
let age = 28;
age =90;
//reassigning variables;
//Value in a const cannot be changes

const birthyear = 1990;
birthyear = 1991;
//will give an error;
const name; // this cannot be done using const;

//--------Basic operators------
//+,-,*,/ basic shit, not writing this code
//comparision opertors shit.
//Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2021

const jonas = "I'm " + firstName + ',a ' + (year-birthyear) + ' old ' + job; 
console.log(jonas);
//template literals
const jonasNew = `I'm $(firstname), a $(year-birthyear) year old, $(job)`;
console.log(jonasNew);
//--------------If/else-------------
const age = 19;
const isOldEnough  = age >=18;
if (isOldEnough) {
    console.log("yes")
    
}
else{
    console.log("no");
}
