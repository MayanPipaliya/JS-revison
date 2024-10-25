class Employee {
    constructor(name, salary, resignatuonreason, workingdays){
        this.name = name;
        this.salary = salary;
        this.resignatuonreason = resignatuonreason;
        this.workingdays = workingdays;
    }

    getdetails(){
        return `Name : ${this.name} , salary : ${this.salary} , resignatuonreason : ${this.resignatuonreason} , workingdays : ${this.workingdays}`;
    }

    resign(reason){
        this.resignatuonreason = reason;
        console.log(`Employee ${this.name} has been resigned due to ${this.resignatuonreason}`) ;
    }
}

class Menager extends Employee {
    constructor(name , salary , resignatuonreason , department , workingdays){
        super(name , salary , resignatuonreason , workingdays)
        this.department = department;
    }

    getDetails(){
        return `${super.getdetails()} , Department : ${this.department}`
    }

    approveleave(Employee){
        if(Employee.workingdays > 26){
            console.log(`Menager ${this.name} has approved resignation for ${Employee.name}`) ;
        }
        else{
            console.log(`Menager ${this.name} can't apply for leave as he/she has only 26 working days`) ;
        }
    }
}

const emp1 = new Employee("Dev" , 30000 , "personal reason" , 30);

console.log(emp1.getdetails()) ;

const mgr1 = new Menager("Mayan", 50000 , "Personal reason for Dev, and i Approve Resignation", "Sales", 50 );

console.log(mgr1.getDetails()) ;

emp1.resign("personal reason")
mgr1.approveleave(emp1)
