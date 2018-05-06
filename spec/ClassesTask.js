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
    function Employee(name, secondName, salary, experiance, manager) {
        this.name = name;
        this.secondName = secondName;
        this.salary = salary;
        this.experiance = experiance;
        this.manager = manager;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Employee));
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Designer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
//# sourceMappingURL=ClassesTask.js.map