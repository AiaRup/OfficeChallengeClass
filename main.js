//write your code here to make the tests pass

class Document {
  constructor (employeeName) {
    this.EmployeeName = employeeName;
  }
}

class Employee {
  constructor (employeeName) {
    this.name = employeeName;
  }

  work (office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor (managerName) {
    this.name = managerName;
    this.employees = [];
  }

  hireEmployee (employeeName) {
    let employee = new Employee(employeeName);
    this.employees.push(employee);
  }

  askEmployeesToWork (office) {
    this.employees.forEach((employee) => {
      employee.work(office);
    });
  }
}

class Cleaner {
  constructor (cleanerName) {
    this.name = cleanerName;
  }

  clean () {
    console.log('Clean');

  }
}

class Office {
  constructor () {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }

  hireManager (managerName) {
    this.managers.push(new Manager(managerName));
  }

  hireCleaner (cleanerName) {
    this.cleaners.push(new Cleaner(cleanerName));
  }

  startWorkDay () {
    this.managers.forEach(manager => {
      manager.askEmployeesToWork(this);
    });
  }
}





