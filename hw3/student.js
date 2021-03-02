export class Student{
    className;
    fullName;
    age;
    address;
    constructor(className, fullName, age, address) {
      this.className = className
      this.fullName = fullName
      this.age = age
      this.address = address
    }
    getInfo() {
      return `Name: ${this.fullName}
                  Age: ${this.age}
                  Address: ${this.address}
                  Class: ${this.className}
      `
    }
  }
