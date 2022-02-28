let user = {
  name: "Arya",
  setName(value) {
    this.name = value.trim();
  },
  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  },
};

let user = {
  _name: "Arya",
  set name(value) {
    this._name = value.trim();
  },
  get name() {
    return this._name.charAt(0).toUpperCase() + this.name.slice(1);
  },
};

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  static check() {
    alert("Hello Student");
  }
  getName() {
    return this.name;
  }
}

let sameer = new Student("Sameer", 300);
