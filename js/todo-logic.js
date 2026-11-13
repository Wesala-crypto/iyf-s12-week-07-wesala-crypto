// Pure functions: these transform data only. They do not use the DOM or browser storage.

export function addTodo(todos, todo) {
    const cleanText = typeof todo?.text === "string" ? todo.text.trim() : "";
    if (!cleanText) {
        return todos;
    }

    return [...todos, { ...todo, text: cleanText, completed: false }];
}

export function toggleTodo(todos, id) {
    return todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
}

export function deleteTodo(todos, id) {
    return todos.filter((todo) => todo.id !== id);
}

export function filterTodos(todos, filter) {
    if (filter === "active") {
        return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
        return todos.filter((todo) => todo.completed);
    }
    return [...todos];
}

export function countActiveTodos(todos) {
    return todos.filter((todo) => !todo.completed).length;
}

export function countCompletedTodos(todos) {
    return todos.filter((todo) => todo.completed).length;
}
