
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
//Arrays
const friends = ['Micheal','Steven','Peter','Piyush'];
console.log(friends);

const years = new Array(1191,1984,200,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1 ]);

friends[2] = 'ayush';
console.log(friends);

const jonas = ['String','strng2', 2003-1,friends];

friends.push('JAY'); //add at end
console.log(friends);

friends.unshift('John'); //add at First element;

friends.pop(); // delete from end
console.log(friends);

friends.shift(); //delete elemt from aabove;

console.log(friends.indexOf('Steven')); // return index of element;, if NOT in there we get -1;

console.log(friends.includes('Steven')); //return true if there, else false

//objects
const jonasArray = { 
    key1 : 'Value', key2 : 'Value2', key3 : 3037 -90 , key4: ['friends']
};

//DOT and Bracket Notation
console.log(jonasArray);

console.log(jonasArray.key1);
console.log(jonasArray['key1']);

const nameKey = 'key';
console.log(jonasArray[nameKey+'1']);//return key1

const input1 = prompt('What do you want to know about JOnas?');
console.log(jonasArray[input1]);
 // we cannot use Dot here, DOt onyly with property name

 if(jonasArray[input1] == false){
     console.log("Not here");
 }

 console.log(jonasArray[key4.length]);
 console.log(jonasArray.key4[0]);

 //loops
 for (let i = 0; i < array.length; i++) {
     const element = array[i];
     
 }
 while (i<10) {
     i++;
 }

