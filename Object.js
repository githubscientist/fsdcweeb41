// template or blue print or model object
class Student {
    // method -> a function specific to the class Student
    // this method will have all the variables
    // constructor gets called whenever we create an object to this
    // class Student
    constructor(id = 0, name = '', place = '', mobile = '') {
        this.id = id;
        this.name = name;
        this.place = place;
        this.mobile = mobile;
    }

    setID(id = 0) {
        this.id = id;
    }

    set _name(value) {
        value = value.charAt(0).toUpperCase() + value.slice(1,);
        this.name = value;
    }

    print() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Place: ${this.place}, Mobile: ${this.mobile}`);
    }
}

let students = [];
// constructor gets called when we create an object
// it creates a copy of the existing blue print or template
// student1 -> refers to the reference of the copy of class Student
students.push(new Student(47, 'sathish', 'India', '9080706050'));
students.push(new Student(48, 'krish', 'United States', '6050403020'));
students.push(new Student(49, 'suresh', 'United Kingdom', '4030201000'));

// 48, 'krish', 'United States', '6050403020'

// student3.id = 49;
// student3.name = 'suresh';
// student3.place = 'United Kingdom';
// student3.mobile = '4030201000';

// student2.setID(48);
// student2._name = 'krish';

// student1.print();
// student2.print();
// // console.log(student3);
// student3.print();

students.forEach(student => {
    student.print();
})


/*
    student1 = {
        id: 0, 
        name: '', 
        place: '', 
        mobile: ''
    }
    
    student2 = {
        id: 0, 
        name: '', 
        place: '', 
        mobile: ''
    }
*/