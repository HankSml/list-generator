class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return name
    }
    getId() {
        return id;
    }
    getEmail() {
        return email
    }
    getRole() {
        return 'Employee'
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
       this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return github
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return school
    }
}

module.exports = {
    Employee,
    Engineer,
    Manager,
    Intern
}