describe('TodoApp', () => {
    it('should be able to initialize', () => {
        expect(todoApp).toBeDefined();
        todoApp.init([
            {todo :'hello',done : false}
        ]);
        expect(todoApp.todos.length).toBe(1);
    });
    it('should be able to add test', () => {
        todoApp.init([
            {todo :'hello',done : false}
        ]);
        todoApp.addTodo('hello');
        expect(todoApp.todos.length).toBe(2);
    });
});