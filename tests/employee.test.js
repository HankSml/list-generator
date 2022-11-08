const { Employee } = require('../lib');

const employee = new Employee('test-name', 'test-id', 'test-email');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object with strings 'name', 'id', and 'email' as properties", () => {
            expect(employee).toEqual({ name: 'test-name', id: 'test-id', email: 'test-email'});
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
        it("should have getRole method that returns string 'Employee'", () => {
            expect(employee.getRole()).toEqual('Employee');
        })
    })
}) 