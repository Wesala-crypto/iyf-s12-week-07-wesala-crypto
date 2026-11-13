import { filterTodos, countActiveTodos, countCompletedTodos } from "./todo-logic.js";

const todoList = document.querySelector("#todo-list");
const itemsLeft = document.querySelector("#items-left");
const emptyState = document.querySelector("#empty-state");
const completionSummary = document.querySelector("#completion-summary");
const filterButtons = document.querySelectorAll("[data-filter]");

export function render(state) {
    const visibleTodos = filterTodos(state.todos, state.filter);
    todoList.replaceChildren();

    visibleTodos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.className = `todo-item${todo.completed ? " completed" : ""}`;
        listItem.dataset.id = String(todo.id);

        const checkbox = document.createElement("input");
        checkbox.className = "todo-checkbox";
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.setAttribute("aria-label", `Mark ${todo.text} as ${todo.completed ? "active" : "completed"}`);

        const taskText = document.createElement("span");
        taskText.className = "todo-text";
        taskText.textContent = todo.text;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.dataset.action = "delete";
        deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);
        deleteButton.textContent = "×";

        listItem.append(checkbox, taskText, deleteButton);
        todoList.append(listItem);
    });

    const activeCount = countActiveTodos(state.todos);
    const completedCount = countCompletedTodos(state.todos);
    itemsLeft.textContent = `${activeCount} ${activeCount === 1 ? "task" : "tasks"} left`;
    completionSummary.textContent = `${completedCount} completed`;
    emptyState.hidden = visibleTodos.length > 0;

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === state.filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

export function getTodoListElement() {
    return todoList;
}

export function getFilterButtons() {
    return filterButtons;
}
