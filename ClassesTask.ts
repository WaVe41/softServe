class Employee {
    name:string;
    secondName:string;
    salary:number;
    experiance:number;
    manager:string;
    qq:string;
    constructor(name:string, secondName:string, salary:number, experiance:number, manager:string, qq:string) {
        this.name = name;
        this.secondName = secondName;
        this.salary = salary;
        this.experiance = experiance;
        this.manager = manager;
        this.qq = qq;
    }
}

class Developer extends Employee {

}

class Designer extends Employee{
    effectivnessCoefficient:boolean;
}

class Manager extends Employee {

}