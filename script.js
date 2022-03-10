/*
let js = 'amazing'
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $funcion = 27;

let person = "jonas";
let PI = 3.1415;
//po umesten variant ot job1 i job2
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
//taka sushto stava no gornoto e po pravilno
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
//ako slojim otgore console.log(javascriptIsFun); nqma da stane zashtoto vurvi otgore nadolu !!!

//typeof se izpolzva za da se vidi  ot kakuv vid e v sluchaq true
console.log(typeof true);
//izprobvane s drugi tipove
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//tuk moje da se napishe bez let zashtoto veche e deklarirano
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);
//taka se promenq tiput na javascriptIsFun ; dymamic typing

//undefined
let year;
console.log(year);
//gornoto vinagi shte izliza kato undefined
console.log(typeof year);
//kogato slojim stoinost na year togava poluchvavame informaciqta kakto v sluchaq 1991 (number)
year = 1991;
console.log(typeof year);

//javascript bug-izliza kato object
console.log(typeof null);
*/
/*

/////////////////////////////////////////////////
//VAR CONST AND LET

//WHEN TO USE LET
// mutating variables
let age = 30;
age = 31;
//to declare empty variables
let year;
year = 1991;

//WHEN TO USE CONST
//variables can't change (kogato vtoroto e napisano dava greshka v programata)
const birthYear = 2002;
//birthYear = 2001;
console.log(birthYear);
//can't declare empty variable(dolnoto e primer)
//const job;

//VAR- OLD WAY OF DEFINING VARIABLES JUST LIKE "LET"
var job = 'programmer';
job = 'teacher'

//WE CAN BUT MUSTN'T!!!!we don't need to declare a variable (primer dolu) but this is bad idea cuz this doesn't create a variable in the current so-called scope . Instead JS will create a property on the global object
lastName = 'Bachvarov';
console.log(lastName);
*/

/*
////////////////////////////////////////
//BASIC OPERATORS

//Mathematical operators
//const now e zashtoto ako godinata se smeni trqbva da se smeni i na dvete

const now = 2037;
const ageJonas = now - 2001;
const ageViktor = now - 2002;
console.log(ageJonas, ageViktor);
//na programatq izliza edno sled drugo(36 35)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 oznachava 2 na 3ta stepen

const firstName = 'Viktor';
const lastName = 'Bachvarov';
console.log(firstName + lastName);
//po tozi nachin imenata se izpisvat slqto
console.log(firstName + ' ' + lastName);
//za da se izpishe s interval se dobavqt kavichki s interval pomejdu im



//Assigment operators

//equal sign(=)
let x = +10 + 5; //15
x += 10; //x=x+10 //x shte e 15 koeto ozn 10+15=25
x *= 4; //x=x*4 25*4=100
x++; //x=x+1=101
x--;
x--; //shte se poluchi 99 zashtoto 101-1=100 i sled povtarqneto 100-1=99
console.log(x);


//Comparison operators
console.log(ageJonas > ageViktor);//<,>,<=,>=
console.log(ageViktor >= 20);

const isFullAge = ageViktor >= 20;

console.log(now - 2001 < now - 2002);
*/
/*
////////////////////////////////////////////////////
//STRINGS AND TEMPLATE LITERALS

const firstName = 'Viktor';
const job = 'engineer';
const birthYear = 2002;
const year = 2022;


const viktor = "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job;
console.log(viktor);

//Template literals
const viktorNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(viktorNew);

//treti nachin
console.log(`Just a regular string ....`)

//nachin za pissane na nqkolko reda - poluchava se zaradi bug
console.log('String with\n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

///////////////////////////////////////////////////
/*
//TAKING DECISIONS : IF /ELSE STATEMENTS

const age = 15;


if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young.Wait another ${yearsLeft}years :)`);
}



const birthYear = 2002;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/



////////////////////////////////////////////////////

//TYPE CONVERSION AND COERCION

//TYPE CONVERSION
/*
const inputYear = '1991';
console.log(Number(inputYear));//1991
console.log(inputYear + 18);//199118
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'))
console.log(typeof NaN);

console.log(String(23), 23);

//TYPE COERCION
console.log('I am ' + 23 + ' years old');

//stava samo s minus(izvajdane)
console.log('23' - '10' - 3);

console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; //tova e kato tekst i se poluchava kato 1 do 1 ==11
n = n - 1; //11-1=10
console.log(n);*/

/*
////////////////////////////////////////
//. Truthy and Falsy Values

//5 falsy values : 0,'',undefined,null ,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Viktor'));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it  all");
} else {
    console.log("You should get a job");
}
//
let height = 189;
if (height) {
    console.log('Yay! Height is defined!');
} else {
    console.log('Height is UNDEFIED');
}
*/

/////////////////////////////////////////////
//Equality Operators: == vs. ===
/*
const age = 18;
//ako smenim chisloto sus string('18')
//IZPOLZVAM SAMO TOVA
if (age === 18) console.log('You just became an adult(strict)');
//NAI-DOBRE DA NE GO POLZVAM
if (age == 18) console.log('You just became an adult(loose) ');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
/*
if (favourite == 23) {
    console.log('Cool!23 is an amazing number!')
}
*/

/*
if (favourite === 23) {
    console.log('Cool!23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 28) {
    console.log('I love that number! ')
} else {
    console.log('Number is not 23 or 7 or 28');
}

if (favourite !== 23) console.log("Why not 23?")
*/

////////////////////////////////
//BOOLAN LOGIC

//////////////////////////////////
//LOGICAL OPERATORS 

const hasDriversLicense = true;//A
const hasGoodVision = true;//B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive) {
    console.log('Sarah is able to drive !')
} else {
    console.log('Someone else should drive...')
}

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);
//will be true but if 'isTired'=false they will be false because one of the operands is enough for this to be false

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive !')
} else {
    console.log('Someone else should drive...')
}