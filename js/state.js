import {
    addTodo as addTodoLogic,
    toggleTodo as toggleTodoLogic,
    deleteTodo as deleteTodoLogic,
} from "./todo-logic.js";
import { loadTodos, loadFilter, saveTodos, saveFilter } from "./storage.js";

const state = {
    todos: loadTodos(),
    filter: loadFilter(),
};

function commit() {
    saveTodos(state.todos);
    saveFilter(state.filter);
}

export function getState() {
    return {
        todos: [...state.todos],
        filter: state.filter,
    };
}

export function addTask(text) {
    const newTodo = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        text,
        completed: false,
        createdAt: new Date().toISOString(),
    };
    state.todos = addTodoLogic(state.todos, newTodo);
    commit();
}

export function toggleTask(id) {
    state.todos = toggleTodoLogic(state.todos, id);
    commit();
}

export function deleteTask(id) {
    state.todos = deleteTodoLogic(state.todos, id);
    commit();
}

export function setFilter(filter) {
    if (!["all", "active", "completed"].includes(filter)) {
        return;
    }
    state.filter = filter;
    commit();
}

export function clearCompletedTasks() {
    state.todos = state.todos.filter((todo) => !todo.completed);
    commit();
}
