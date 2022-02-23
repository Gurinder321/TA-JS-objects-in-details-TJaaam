let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    console.log(`I live in ${this.location} ad I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  let obj = Object.create(animalMethods);

  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogMethods, animalMethods);

// {
//     name: "",
//     color: "",
//     location: "",
//     numberOfLegs: 21,
//     __proto__: {
//         dogMethods
//         __proto__: {

//         }
//     }
// }
