import './cardStudent.js'

class CardStudentList extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.studentList = [
            {
                name:"abc",
                age:"20",
                address:"HY"
            },
            {
                name:"bca",
                age:"20",
                address:"HN"
            },
        ]
        let html = this.studentList.map(function(student){
            return `
          <card-container age=${student.address}/>
            `
            //ban oii day la bai nhap
            //xem o folder viet y
            
        })
    //     ví dụ cái này có 1 list student nhé
        // const{ className,fullName,age,address} =this
        this._shadowDom.innerHTML = `
     
        ${html}
        `
    }
} 
window.customElements.define("card-list", CardStudentList );
//  ok, đại loại thế 
// bay gio em phai lam lai nhu nay ha
//  ko, a khiêm bải lm j thì lm lấy, cái này sẽ dc học sau
// the em cu truyen thang vao html chac cung ko sao dau nhi
//  đúng yc đề bài là dc, out đây:))
// ok shop