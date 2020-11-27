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