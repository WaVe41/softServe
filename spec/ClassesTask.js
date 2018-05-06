var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, secondName, salary, experience) {
        this.name = name;
        this.secondName = secondName;
        this.salary = salary;
        this.experience = experience;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, secondName, salary, experience, manager) {
        var _this = _super.call(this, name, secondName, salary, experience) || this;
        _this.manager = manager;
        return _this;
    }
    Developer.prototype.giveSalary = function (salary) {
        this.salary = salary;
        if (this.experience > 2 && this.experience <= 5)
            this.salary += 200;
        else if (this.experience > 5)
            this.salary = this.salary * 1.2 + 500;
    };
    return Developer;
}(Employee));
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer(name, secondName, salary, experience, manager, effectivnessCoef) {
        var _this = _super.call(this, name, secondName, salary, experience) || this;
        _this.manager = manager;
        _this.effectivnessCoefficient = effectivnessCoef;
        return _this;
    }
    Designer.prototype.giveSalary = function (salary) {
        this.salary = salary;
        this.salary *= this.effectivnessCoefficient;
    };
    return Designer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, secondName, salary, experience, team) {
        var _this = _super.call(this, name, secondName, salary, experience) || this;
        _this.team = team;
        return _this;
    }
    Manager.prototype.giveSalary = function (salary) {
        this.salary = salary;
        var devs = this.team.filter(function (val) { return val instanceof Developer; });
        if (2 * devs.length > this.team.length)
            this.salary *= 1.1;
        if (this.team.length > 5 && this.team.length <= 10)
            this.salary += 200;
        else if (this.team.length > 10)
            this.salary += 300;
    };
    return Manager;
}(Employee));
var Departament = /** @class */ (function () {
    function Departament() {
    }
    Departament.prototype.giveSalary = function (name, secondName, salary) {
        var emp;
        this.listOfManagers.forEach(function (val) {
            emp = val.team.filter(function (e) { return e.name === name && e.secondName === secondName; })[0];
        });
        if (emp)
            emp.giveSalary(salary);
        console.log(name + ", " + secondName + ": got salary" + salary);
    };
    return Departament;
}());
//# sourceMappingURL=ClassesTask.js.map