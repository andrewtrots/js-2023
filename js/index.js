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
