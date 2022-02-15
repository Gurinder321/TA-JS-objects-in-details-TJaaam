# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

function createUser(name, id, noOfProjects){
let user = {};
user.name = name;
user.id = id;
user.noOfProject;

user.getProject = function () {
return `User has ${user.noOfProjects} left`
}
user.changeName = function (newName) {
return `${user.name} has changed their name to ${newName}`
}
return user
}

function createUser(name, id, noOfProjects){
let user = Object.create(userMethods);
user.name = name;
user.id = id;
user.noOfProject;

user.getProject = function () {
return `User has ${user.noOfProjects} left`
}
user.changeName = function (newName) {
return `${user.name} has changed their name to ${newName}`
}
return user
}
