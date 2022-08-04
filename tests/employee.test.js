const library = require('../lib');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object with strings 'name', 'id', and 'email' as properties", () => {
            const employee = new Employee('test-name', 'test-id', 'test-email');
            
            expect(employee).toEqual({ name: 'test-name', id: 'test-id', email: 'test-email'});
        })
    })
}) 