// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// Using function to create objects

// function createUser(name, id, noOfProjects) {
//   let user = {};
//   user.name = name;
//   user.id = id;
//   user.noOfProjects;

//   user.getProjects = function () {
//     return user.noOfProjects;
//   };
//   user.changeName = function (newName) {
//     let previousName = user.name;
//     user.name = newName;
//     return previousName;
//   };
//   user.incrementProject = function () {
//     user.noOfProjects += 1;
//     return user.noOfProjects;
//   };
//   user.decrementProject = function () {
//     user.noOfProjects -= 1;
//     return user.noOfProjects;
//   };
//   return user;
// }

// let aman = createUser("Aman", 123, 32);
// let john = createUser("John", 23, 322);

// console.group();
// console.log(aman.name);
// console.log(aman.id);
// console.log(aman.incrementProject());
// console.log(aman.decrementProject());
// console.log(aman.changeName("Sunny"));
// console.log(aman.name);
// console.groupEnd();

// console.group();
// console.log(john.name);
// console.log(john.id);
// console.log(john.incrementProject());
// console.log(john.decrementProject());
// console.log(john.changeName("Sunny"));
// console.log(aman.name);
// console.groupEnd();

// Using Object.create (prototypal pattern)

// let userMethods = {
//   getProjects: function () {
//     return this.noOfProjects;
//   },
//   changeName: function (newName) {
//     let previousName = this.name;
//     this.name = newName;
//     return previousName;
//   },
//   incrementProject: function () {
//     this.noOfProjects += 1;
//     return this.noOfProjects;
//   },
//   decrementProject: function () {
//     this.noOfProjects -= 1;
//     return this.noOfProjects;
//   },
// };

// function createUser(name, id, noOfProjects) {
//   let user = Object.create(userMethods);
//   user.name = name;
//   user.id = id;
//   user.noOfProjects;

//   return user;
// }

// let aman = createUser("Aman", 123, 32);
// let john = createUser("John", 23, 322);
// console.group();
// console.log(john.name);
// console.log(john.id);
// console.log(john.incrementProject());
// console.log(john.decrementProject());
// console.log(john.changeName("Sunny"));
// console.log(aman.name);
// console.groupEnd();

// In a pseudoclassical way

// CreateUser.prototype = {
//   getProjects: function () {
//     return this.noOfProjects;
//   },
//   changeName: function (newName) {
//     let previousName = this.name;
//     this.name = newName;
//     return previousName;
//   },
//   incrementProject: function () {
//     this.noOfProjects += 1;
//     return this.noOfProjects;
//   },
//   decrementProject: function () {
//     this.noOfProjects -= 1;
//     return this.noOfProjects;
//   },
// };

// function CreateUser(name, id, noOfProjects) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects;
// }

// let aman = new CreateUser("Aman", 123, 32);
// let john = new CreateUser("John", 23, 322);
// console.group();
// console.log(john.name);
// console.log(john.id);
// console.log(john.incrementProject());
// console.log(john.decrementProject());
// console.log(john.changeName("Sunny"));
// console.log(aman.name);
// console.groupEnd();

// Using classes

class CreateUser {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    let previousName = this.name;
    this.name = newName;
    return previousName;
  }
  incrementProject() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }
  decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

let aman = new CreateUser("Aman", 123, 32);
let john = new CreateUser("John", 23, 322);
console.group();
console.log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Sunny"));
console.log(aman.name);
console.groupEnd();
