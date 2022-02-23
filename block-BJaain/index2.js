// Default binding

function sayHello() {
  console.log(this);
  alert(`Hello ${this.username}`);
}

sayHello();

// The result is "Hello undefined"
// The value of this in the console is window. This will always point to an object.
// Whenever you call a function and there is nothing on the left, this will always point ot the globel object.
//  In the browser, it will point to window

// Implicit binding
let user = {
  name: "Arya",
  sayHello() {
    alert("Hello " + this.name);
  },
};
user.sayHello();

// The value of this in the function will point to what's left of when we call the function, which is an object
// Why an object, because we're using a dot here
// Implicit binding only occurs when there's an object call to the left of the function

// Explicit binding
// 'call'
function sayHello() {
  alert(`Hello ${this.name}`);
}

let user = {
  name: "Bran",
};

sayHello(); // this is nothing on the left, so it will point to window

sayHello.call(user);
sayHello.call(user, "Basketball", "Movies");

// On this.name == window.name there is a predefined key that points to empty string

// new binding = most powerful
//

// this in arrow function
// this keyword doesn't work in arrow function

// 2.

// 3. When the fucntion is onvoked with the new keyword, the this keyword inside the function binds to the new object being onstructed. When the this keyword is not resolved with any of the bindings, implicit, explicit or new, then this is bound to the window(global) object.

// 4. __proto__ is a property of a class construction and prototype is a property of a class instance

// 5. Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// 6. Explicit binding
// call

const sayName = function () {
  console.log(`My name is ${this.name}`);
};

const stacey = {
  name: "Stacey",
  age: 34,
};

sayName.call(stacey);
// every function has a dot call property. The first argument is takes is what you want to call.
// sayName is going to be invoked and this keyword inside sayName is going to reference 'Stacey'

// apply - this is to pass a few more agruments to sayName. We'll use the apply

const sayName = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.name} and she knows ${lang1}, ${lang2}, ${lang3}`
  );
};

const stacey = {
  name: "Stacey",
  age: 34,
};

const languages = ["JavaScript", "Ruby", "Python"];

sayName.apply(stacey, languages);

// bind - very similar to .call
const sayName = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.name} and she knows ${lang1}, ${lang2}, ${lang3}`
  );
};

const stacey = {
  name: "Stacey",
  age: 34,
};
const language = ["JavaScript", "Ruby", "Python"];

const newFn = sayName.bind(stacey, language[0], language[1], language[2]);

console.log("---HERE---");
newFn();
