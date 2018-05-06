abstract class Employee {
    name: string;
    secondName: string;
    salary: number;
    experience: number;
    manager: string;

    protected constructor(name: string, secondName: string, salary: number, experience: number) {
        this.name = name;
        this.secondName = secondName;
        this.salary = salary;
        this.experience = experience;
    }
    abstract giveSalary(salary: number): void;
}

class Developer extends Employee {
    constructor(name:string, secondName:string, salary:number, experience:number, manager:string) {
        super(name, secondName, salary, experience);
        this.manager = manager;
}

    giveSalary(salary: number): void {
        this.salary = salary;
        if (this.experience > 2 && this.experience <= 5) this.salary += 200;
        else if (this.experience > 5)  this.salary = this.salary * 1.2 + 500;
    }
}

class Designer extends Employee{
    effectivnessCoefficient:number;
    constructor(name: string, secondName: string, salary: number, experience: number, manager: string, effectivnessCoef:number) {
        super(name, secondName, salary, experience);
        this.manager = manager;
        this.effectivnessCoefficient = effectivnessCoef;
    }
    giveSalary(salary: number): void {
        this.salary = salary;
        this.salary *= this.effectivnessCoefficient;
    }
}

class Manager extends Employee {
    team:(Developer|Designer)[];
    constructor(name: string, secondName: string, salary: number, experience: number, team?:(Developer|Designer)[]) {
        super(name, secondName, salary, experience);
        this.team = team;
    }
    giveSalary(salary: number): void {
        this.salary = salary;
        let devs:Developer[] = this.team.filter(val =>  val instanceof Developer);
        if (2 * devs.length > this.team.length) this.salary *= 1.1;
        if (this.team.length > 5 && this.team.length <= 10) this.salary += 200;
        else if (this.team.length > 10) this.salary += 300;
    }

}

class Departament {
    listOfManagers:Manager[];
    giveSalary(name:string, secondName:string, salary:number):void {
        let emp:(Developer|Designer);
        this.listOfManagers.forEach(val => {
           emp = val.team.filter(e => e.name === name && e.secondName === secondName)[0];
        });
        if (emp) emp.giveSalary(salary);
        console.log(`${name}, ${secondName}: got salary${salary}`);
}
}