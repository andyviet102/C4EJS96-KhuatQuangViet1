class Student{
    name;
    classNumber;
    age;
    address;
    constructor(name,classNumber,age,address){
        this.name = name
        this.classNumber = classNumber
        this.age = age
        this.address = address
    }
    showInfo(){
        console.log(`Ten: ${this.name}
    Lop: ${this.classNumber}
    Tuoi: ${this.age}
    Dia Chi: ${this.address}`)
    }
}