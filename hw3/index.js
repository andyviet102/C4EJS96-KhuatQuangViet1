  
import { Student } from './student.js'
import { StudentCollection } from './studentCollection.js'
const studentCollection = new StudentCollection()
studentCollection.addStudent(new Student('58A', 'Khuat van A', 18, 'Son Tay'))
studentCollection.addStudent(new Student('58B', 'Trinh van B', 21, 'Ha Noi'))
studentCollection.addStudent(new Student('58C', 'Nguyen thi C', 17, 'Tay Nguye'))


studentCollection.getInfo()
studentCollection.getStudentByAge(15)
studentCollection.getStudentByAgeAndAddress(18, "Hanoi")
studentCollection.getStudentByName("Trinh van B")
studentCollection.addStudent()

console.log(studentCollection)
