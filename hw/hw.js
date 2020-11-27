class Student{
    name;
    classNumber;
    age;
    address;
    constructor(name,classNumber,age,address,){
        this.name = name
        this.class = classNumber
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

class ClassName{
    constructor(){
        this.liststudent = []
    }
    showStudent(student, name, age, address){
        console.log(`cac hoc sinh co`, typeof age==='number' ? `tuoi la ${age}: `:`ten la ${name}: `)
        for(let item of (student,name,age,address)) {
            console.log(`Ho ten: ${item.name}
            Tuoi: ${item.age}
            Lop: ${item.class}
            Dia chi: ${item.address}`)
        }
    }
    addStudent(student){
        student.class = this.studentName
        this.liststudent.push(student)
    }
    showAge(age){
      return  this.liststudent.filter(student=>{return student.age===age})
        // this.showStudent(age)
    }
    showAddressAndAge(address, age){
      return this.liststudent.filter(student=>{return student.address===address && student.age===age})
    }
    showName(name){
       return this.liststudent.filter(student=>{return student.name===name})
        // this.showStudent(name)
    }
 
}

const student1 = new Student("Khuat van A", 19, "1-1-2000", "Son Tay", "Nam" )
const student2 = new Student("Trinh van B", 18, "1-1-2000", "Ha Noi", "NU" )
const student3 = new Student("Nguyen thi C", 17, "1-1-2000", "Tay Nguyen", "Nam" )
const student4 = new Student("Ha chi Nhan", 16, "1-1-2000", "Lao cai", "Nu" )
const student5 = new Student("han an ngu", 15, "4-4-2000", "sai gon", "Nam" )

const class518 = new ClassName('518A')
class518.addStudent(student1)
class518.addStudent(student2)
class518.addStudent(student3)
class518.addStudent(student4)
class518.addStudent(student5)

student1.showInfo()
student2.showInfo()
student3.showInfo()
student4.showInfo()
student5.showInfo()

class518.showAddressAndAge(18,'Ha Noi')
class518.showAddressAndAge(19,'Son Tay')
class518.showAge(15)
class518.showName('Ha chi Nhan')
