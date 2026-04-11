// Before2015, ES6 => EcmaScript 6
function Student(id = 0, name = '', place = '', mobile = '') {
    this.id = id;
    this.name = name;
    this.place = place;
    this.mobile = mobile;

    this.print = () => {
        console.log(`ID: ${this.id}, Name: ${this.name}, Place: ${this.place}, Mobile: ${this.mobile}`);
    }
}

let students = [];
students.push(new Student(47, 'sathish', 'India', '9080706050'));

students.forEach(student => {
    student.print();
    // console.log(student);
})

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}