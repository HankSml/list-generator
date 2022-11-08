const { Manager } = require('../lib');

const employee = new Manager('test-name', 'test-id', 'test-email', '1');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create an object with strings 'name', 'id', 'officeNumber' and 'email' as properties", () => {
            expect(employee).toEqual({ name: 'test-name', id: 'test-id', email: 'test-email', officeNumber: '1'});
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
        it("should have getOfficeNumber method that returns officeNumber property", () => {
            expect(employee.getOfficeNumber()).toEqual('1');
        })
        it("should have getRole method that returns string 'Manager'", () => {
            expect(employee.getRole()).toEqual('Manager');
        })
    })
}) 