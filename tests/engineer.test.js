const { Engineer } = require('../lib');

const employee = new Engineer('test-name', 'test-id', 'test-email', 'test-github');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object with strings 'name', 'id', and 'email' as properties", () => {
            expect(employee).toEqual({ name: 'test-name', id: 'test-id', email: 'test-email', github: 'test-github'});
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
        it("should have getGithub method that returns github property", () => {
            expect(employee.getGithub()).toEqual('test-github');
        })
        it("should have getRole method that returns string 'Employee'", () => {
            expect(employee.getRole()).toEqual('Engineer');
        })
    })
}) 