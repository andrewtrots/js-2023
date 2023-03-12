//alert('Hello!');

let greetings = 'World!';
//alert(greetings);

const message = 'Hello ' + greetings;
alert(message);

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is: ' + userAge);

const nextAge = add(userAge, 1);
alert(nextAge);

//< > <= >= === == !== != && ||
if (userAge >= 18) {
  alert('You are adult!');
} else {
  alert('You are underaged!');
}

function add(a, b) {
  const result = a + b;
  return result;
}

//Normal
function describeAge(age) {
  if (age <= 12) {
    return "You're a(n) kid";
  } else if (age >= 13 && age <= 17) {
    return "You're a(n) teenager";
  } else if (age >= 18 && age <= 64) {
    return "You're a(n) adult";
  } else {
    return "You're a(n) elderly";
  }
}

Conditional (ternary) operator
function describeAge(n) {
  return "You're a(n) " + (n <= 12
    ? 'kid'
    : n <= 17
    ? 'teenager'
    : n <= 64
    ? 'adult'
    : 'elderly');
}

/*8Arrow functrion + Conditional (ternary) operator
const describeAge = (age) =>
  age <= 12
    ? "You're a(n) kid"
    : age >= 13 && age <= 17
    ? "You're a(n) teenager"
    : age >= 18 && age <= 64
    ? "You're a(n) adult"
    : "You're a(n) elderly"; */
