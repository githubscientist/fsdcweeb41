function DOB(date = 1, month = 'Jan', year = 1970) {
    this.date = date;
    this.month = month;
    this.year = year;

    this.print = () => {
        console.log(`Date: ${this.date}`);
        console.log(`Month: ${this.month}`);
        console.log(`Year: ${this.year}`);
        console.log();
    }

    this.calcAge = () => {
        console.log(new Date().getFullYear() - this.year);
    }
}

const dob_101 = new DOB(14, 'Mar', 2000);
const dob_102 = new DOB(10, 'Feb', 1980);

// dob_101.print();
// dob_102.print();

dob_102.calcAge();