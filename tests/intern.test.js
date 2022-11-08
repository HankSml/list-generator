const { Intern } = require('../lib');

const employee = new Intern('test-name', 'test-id', 'test-email', 'test-school');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an object with strings 'name', 'id', and 'email' as properties", () => {
            expect(employee).toEqual({ name: 'test-name', id: 'test-id', email: 'test-email', school: 'test-school'});
        })
        it("should have getName method that returns name property", () => {
            expect(employee.getName()).toEqual('test-name');
        })
        it("should have getId method that returns id property", () => {
            expect(employee.getId()).toEqual('test-id');
        })
        it("should have getEmail method that returns email property", () => {
            expect(employee.getEmail()).toEqual('test-email');
        })
        it("should have getSchool method that returns school property", () => {
            expect(employee.getSchool()).toEqual('test-school');
        })
        it("should have getRole method that returns string 'Intern'", () => {
            expect(employee.getRole()).toEqual('Intern');
        })
    })
}) 