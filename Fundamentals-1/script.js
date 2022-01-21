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
//------------TYPE CONVERSION AND COERCION----------
//conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);//FIRST CONVERT TO NUMBER
console.log(inputYear +18); //STRING

console.log(Number('Jonad')) //NotANumber (NaN)

console.log(String(23)); //Converts to string 
//----------Truthy and Falsy values----------
//5 Falsy values -> 0,''.undefined, null, NaN
console.log(Boolean(0));//f
console.log(Boolean(undefined));//f
console.log(Boolean('Jonad'));//t
console.log(Boolean({}));//t
console.log(Boolean(""));//f
console.log(Boolean(Nan));//f
// Equalty operators == vs ===
const age = 18;
if (age === 18) {
    console.log("YOu just became an adult");
}
//=== -> Comaprision
// == -> Type Coercion //loose equality operator
//'18' == 18 // t
//but '18' === 18 //f
const fav = prompt("whats your fav number?");
//Booleaan logic shit || && !== not writing this code either
//---------------switch statement------------
const day = 'monday';
switch (day) {
    case 'monday':
        console.log("Today is monday");
        break;
    case 'tuesday':
        console.log('Today is tuesday');
        break;

    default:
        break;
}
//-----------Ternery Operators-------------
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I dont like to drink wine");
