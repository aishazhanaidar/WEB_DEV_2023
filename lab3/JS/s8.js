// let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
//what is the answer?
alert( null || 2 || undefined ); //2

//What will the code below output?
alert( alert(1) || 2 || alert(3) ); //firstly 1, after 2

//What is this code going to show?
alert( 1 && null && 2 ); //null

// What will this code show?
alert( alert(1) && alert(2) ); //1, then undefined

// What will the result be?
alert( null || 2 && 3 || 4 ); //3

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); //-1
if (-1 && 0) alert( 'second' ); //// -1 && 0 = 0, falsy
if (null || -1 && 1) alert( 'third' ); //null || -1 && 1  ->  null || 1  ->  1

//Write an if condition to check that age is between 14 and 90 inclusively.“Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90)

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)


let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert( 'Welcome!' );}
    else if (pass === '' || pass === null) {
        alert( 'Canceled' );}
    else{
        alert( 'Wrong password' );}}
else if (userName === '' || userName === null) {
    alert( 'Canceled' );}
else{
    alert( "I don't know you" );}

// What is the last value alerted by this code? Why?
    let i = 3;

while (i) {
    alert(i--);
} //ans is 1

let i = 0;
while (++i < 5) alert( i ); // from 1 to 4

let i = 0;
while (i++ < 5) alert( i ); // from 1 to 5

for (let i = 0; i < 5; i++) alert( i ); // from 0 to 4
for (let i = 0; i < 5; ++i) alert( i ); // from 0 to 4

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
//
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
///////////
let num;

do {
num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
///////////////
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }

///////
if(browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
///////////
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}
/////////////////////
// Replace Function Expressions with arrow functions in the code below:
//
//     function ask(question, yes, no) {
//         if (confirm(question)) yes();
//         else no();
//     }
//
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);