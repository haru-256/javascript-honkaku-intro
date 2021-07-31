class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    console.log("getterr of firstName");
    return this._firstName;
  }

  set firstName(value) {
    console.log("setterr of firstName");
    this._firstName = value;
  }

  get lastName() {
    console.log("getterr of lastName");
    return this._lastName;
  }

  set lastName(value) {
    console.log("setterr of lastName");
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member("太郎", "山田");
// console.log(m.getName());
// m.firstName = "yohei";
// m.lastName = "okabyashi";
// console.log(m.getName());
