import { describe, it, expect } from "vitest";
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    filterTodos,
    countActiveTodos,
    countCompletedTodos,
} from "../js/todo-logic.js";

const sampleTodos = [
    { id: 1, text: "Read notes", completed: false },
    { id: 2, text: "Submit assignment", completed: true },
    { id: 3, text: "Practise JavaScript", completed: false },
];

describe("todo logic", () => {
    it("adds a task and trims extra spaces", () => {
        const result = addTodo(sampleTodos, { id: 4, text: "  Study  " });
        expect(result).toHaveLength(4);
        expect(result[3].text).toBe("Study");
        expect(result[3].completed).toBe(false);
    });

    it("does not add an empty task", () => {
        expect(addTodo(sampleTodos, { id: 4, text: "   " })).toEqual(sampleTodos);
    });

    it("toggles the selected task without changing the original array", () => {
        const originalCopy = structuredClone(sampleTodos);
        const result = toggleTodo(sampleTodos, 1);

        expect(result[0].completed).toBe(true);
        expect(sampleTodos).toEqual(originalCopy);
        expect(result).not.toBe(sampleTodos);
    });

    it("leaves the list unchanged when the task id does not exist", () => {
        expect(toggleTodo(sampleTodos, 999)).toEqual(sampleTodos);
    });

    it("deletes only the task with the matching id", () => {
        expect(deleteTodo(sampleTodos, 2).map((todo) => todo.id)).toEqual([1, 3]);
    });

    it("returns an empty list when filtering an empty list", () => {
        expect(filterTodos([], "active")).toEqual([]);
    });

    it("filters active and completed tasks", () => {
        expect(filterTodos(sampleTodos, "active").map((todo) => todo.id)).toEqual([1, 3]);
        expect(filterTodos(sampleTodos, "completed").map((todo) => todo.id)).toEqual([2]);
    });

    it("counts active and completed tasks", () => {
        expect(countActiveTodos(sampleTodos)).toBe(2);
        expect(countCompletedTodos(sampleTodos)).toBe(1);
    });
});
