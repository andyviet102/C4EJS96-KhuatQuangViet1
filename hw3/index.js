  
import { Student } from './student.js'
import { StudentCollection } from './studentCollection.js';
import './cardStudent.js';
import './CardStudentList.js'
const studentCollection = new StudentCollection()
studentCollection.addStudent(new Student('58A', 'Khuat van A', 18, 'Son Tay'))
studentCollection.addStudent(new Student('58B', 'Trinh van B', 21, 'Ha Noi'))
studentCollection.addStudent(new Student('58C', 'Nguyen thi C', 17, 'Tay Nguye'))
let s1 = new Student('58A', 'Khuat van A', 18, 'Son Tay');
s1.getInfo();

// studentCollection.getInfo()
studentCollection.getStudentByAge(15)
studentCollection.getStudentByAgeAndAddress(18, "Hanoi")
studentCollection.getStudentByName("Trinh van B")
//  s k dc ta
// em lay phôi từ bài của anh khiêm đấy vì hôm qua chưa sửa bài em
// console.log(typeof studentCollection.listStudent[1] )
// studentCollection.listStudent[1].getInfor();
console.log(studentCollection)
let tmp = studentCollection.listStudent.map(function(student){
    return student.getInfo();
})
console.log(tmp);


// giai thich lai cho em cai doan con voi
//  studentCollection là cha
//  student là con phải k? dung the cac cai m ogi o trong day la con cua tk bo ak chi 
//  student extent studentCollection => student dùng được tất cả thuộc tính, phuowngb  thức
// của studentCollection , còn studentCollection thì k