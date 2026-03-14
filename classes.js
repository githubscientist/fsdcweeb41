/* 

    Before ES6, function prototyping.

*/

function DOB(date = 1, month = 'Jan', year = 1970) {
    this.date = date;
    this.month = month;
    this.year = year;

    console.log(this);
}

const dob_101 = new DOB();
const dob_102 = new DOB(10, 'Feb', 2025);

dob_101.date = 14;
dob_101.month = 'Mar';
dob_101.year = 2026;

// console.log(dob_101);
// console.log(dob_102);