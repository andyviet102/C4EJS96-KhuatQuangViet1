// // class Person{
// //     name;
// //     age;
// //     address;
// //     gender;
// //     constructor(name, age, address, gender){
// //         this.name = name
// //         this.age = age
// //         this.address= address
// //         this.gender= gender
// //     }
// //     speak(){
// //         console.log(`hello, I'm  ${this.name}
// // i am  ${this.age} year old
// // i form ${this.address}
// //             `)
// //     }
// // }
// // const duyet = new Person('duyet', 20, 'ha noi', 'female')

// // // const abc = new Person('abc', 21, 'ha tay', 'male')
// // console.log(duyet)
// // duyet.speak()


// // //class animal
// // // species, color, numberoflegs, gender
// // // eat => con + name + dang an
// // // speak => con + name + dang keu
// // // is dangerous => numberoflegs > 4 or numberofleg =0, in ra co nguy hiem hay ko

// //  class Animal{
// //      name;
// //      species;
// //      color;
// //     numberoflegs;
// //     gender;
// //     constructor(name,species, color, numberoflegs, gender){
// //         this.name = name
// //         this.species = species
// //         this.color = color
// //         this.numberoflegs = numberoflegs
// //         this.gender = gender
// //     }
// //     eat(){
// //         console.log(`con ${this.name} dang an `)
// //     }
// //     speak(){
// //         console.log(`con ${this.name} dang keu`)
// //     }
// //     isDangerous(){
// //         // if(this.numberoflegs < 4 || this.numberoflegs ===0 ){
// //         //     console.log('nguy hiem')
// //         // }else{console.log('ko nguy hiem')}
// //         const message = (this.numberoflegs < 4 || this.numberoflegs ===0) ? 'nguy hiem' : 'ko nguy hiem'  
// //         console.log(message)
// //     }
// //  }

// //  const honag = new Animal ('hoang', 'dong vat co vu', 'vang', 2 , 'duc')
// //  console.log(honag);
// //  honag.speak()
// //  honag.eat()
// //  honag.isDangerous()


// //  class MyMath{
// //     static sum(a, b){
// //          return a + b
// //      }
// //     static div(a, b){
// //          return a / b
// //      }
// //  }
// // //  console.log(MyMath.sum(1,4))
// // //  console.log(Math.ceil(1.4))


// // // ke thua
// // class Employee extends Person{
// //     constructor(name, age, address,gender,salary){
// //         super(name, age, address, gender)
// //         this.salary = salary
// //     }
// //     meme(){
// //         console.log('Make america great again!')
// //     }
// //     showOff(){
// //         console.log('My salary is ' + this.salary) 
// //     }
// // }

// // const myEmployee = new Employee("Trump" ,76, 'New Yorks', 'Female', '1m$' )
// // console.log(myEmployee.meme())
// // console.log(myEmployee.showOff())


// // //tao class dog ke thua animal nhung ma khi speak thanh gau gau

// // class Dog extends Animal{
// //     constructor(name,species, color, numberoflegs, gender){
// //         super(name,species, color, numberoflegs, gender)
// //     }
// //     speak() {
// //         console.log( this.name   + '   gau gau')
// //     }
// // }


// // const Dog1 = new Dog ("hoagn", 'cho', 'vang', 4, 'duc' )
// // console.log(Dog1.speak())

// class Student {
//   name;
//   age;
//   hometown;
//   courseList;
//   schoolName;

//   constructor(name, age, hometown){
//       this.name = name;
//       this.age = age;
//       this.hometown = hometown;
//       this.courseList = [];
//       this.schoolName = "";
//   }

//   getInfo(){
//       console.log(`Name: ${this.name}\nAge:  ${this.age}\nHometown: ${this.hometown}\nSchool: ${this.schoolName}\nCourse List: ${this.courseList}`);
//   }

// }

// class School {
//   schoolName;
//   studentList;
//   courseList;

//   constructor(schoolName){
//       this.schoolName = schoolName;
//       this.studentList = [];
//       this.courseList = [];
//   }

//   addStudent(student){
//       this.studentList.push(student)
//       student.schoolName = this.schoolName;
//   }

//   addCourse(courseName){
//       this.courseList.push(courseName)
//       courseName.schoolName = this.schoolName;
//   }


// }

// class Course {
//   courseName;
//   schoolName;
//   studentList;

//   constructor(courseName){
//       this.courseName = courseName;
//       this.studentList = [];
//       this.schoolName = "";
//   }

//   addStudent(student){
//       this.studentList.push(student)
//       student.courseList.push(this.courseName);
//   }

// }

// function findByAge(list, age){
//   return list.filter(student => student.age === age);

// }

// function findByHometown(list, hometown){
//   return list.filter(student => student.hometown === hometown);
// }

// function findByName(list, name){
//   return list.filter(student => student.name === name);
// }



// //test
// thangLong = new School('Thang Long')
// STA101 = new Course('Intro to Statistic')
// CSI102 = new Course('Principle of Computing')

// anh = new Student('Anh', 18, 'Ha Noi')
// bich = new Student('Bich', 15, 'Tay Nguyen')
// cici = new Student('Cici', 19, 'Ha Dong')
// dani = new Student('Dani', 20, 'Ha Noi')
// elli = new Student('Elli', 15, 'Dong Thap')
// funky = new Student('Funky', 21, 'Incheon')


// thangLong.addStudent(anh)
// thangLong.addStudent(bich)
// thangLong.addStudent(cici)
// thangLong.addStudent(dani)
// thangLong.addStudent(elli)
// thangLong.addStudent(funky)

// thangLong.addCourse(STA101)
// thangLong.addCourse(CSI102)

// STA101.addStudent(anh)
// STA101.addStudent(cici)
// STA101.addStudent(elli)
// STA101.addStudent(funky)

// CSI102.addStudent(funky)

// funky.getInfo()
// console.log(thangLong);
// console.log(STA101);

// console.log(findByAge(thangLong.studentList, 15));
// console.log(findByHometown(findByAge(thangLong.studentList,18),'Ha Noi'));
// console.log(findByName(STA101.studentList, 'Cici'));
class Student{
    constructor(age,name,home){
        this.age=age
        this.name=name
        this.home=home
    }
    showInfo(){
        console.log(`Họ tên: ${this.name} 
    Tuổi: ${this.age} 
    Lớp: ${this.class}
    Quê quán: ${this.home}`)
    }
}

class StudentCollection {
    constructor(className){
        this.className=className
        this.listStudent=[]
    }
    addStudent(student){
        student.class=this.className
        this.listStudent.push(student)   
    }
    showByAge(age){
        let result=this.listStudent.filter(stu=>{return stu.age===age})
        this.showResult(result,age)
    }
    findByName(name){
        let result=this.listStudent.filter(stu=>{return stu.name===name})
        this.showResult(result,name)
    }
    countByAgeHome(age,home){
        let i=0
        for(let stu of this.listStudent){
            
            i=(stu.age===age&&stu.home===home? i+1:i)
        }
        console.log(`Số học sinh có tuổi ${age} và quê ${home} là: ${i}`)    
    }
    showResult(result,criteria){
        console.log('Danh sách các học sinh có',typeof criteria==='number'?`tuổi là ${criteria}: `:`tên là ${criteria}: `)
        for(let i of result){
            console.log(`Họ tên: ${i.name} 
        Tuổi: ${i.age} 
        Lớp: ${i.class}
        Quê quán: ${i.home}`)
        }
    }
    

}

const stu1=new Student(15,'Đỗ Mỹ Linh','Hà Nội')
const stu2= new Student(17,'Phạm Đình Hổ','Hà Nội')
const stu3= new Student(15,'Nguyễn Chí Thanh','Nam Định')

const class12=new StudentCollection('12A3')
class12.addStudent(stu1)
class12.addStudent(stu2)
class12.addStudent(stu3)

stu1.showInfo()
stu2.showInfo()
stu3.showInfo()

class12.countByAgeHome(19,'Nam Định')
class12.countByAgeHome(15,'Hà Nội')
class12.showByAge(15)
class12.findByName('Nguyễn Chí Thanh')

