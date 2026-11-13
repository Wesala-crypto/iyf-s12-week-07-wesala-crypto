import {
    getState,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
    clearCompletedTasks,
} from "./state.js";
import { render, getTodoListElement, getFilterButtons } from "./ui.js";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const clearCompletedButton = document.querySelector("#clear-completed");
const todayDate = document.querySelector("#today-date");
const todoList = getTodoListElement();
const filterButtons = getFilterButtons();

function refreshUI() {
    render(getState());
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (!taskText) {
        return;
    }
    addTask(taskText);
    todoInput.value = "";
    todoInput.focus();
    refreshUI();
});

todoList.addEventListener("change", (event) => {
    if (!event.target.matches(".todo-checkbox")) {
        return;
    }
    const listItem = event.target.closest(".todo-item");
    if (listItem) {
        toggleTask(listItem.dataset.id);
        refreshUI();
    }
});

todoList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest('[data-action="delete"]');
    if (!deleteButton) {
        return;
    }
    const listItem = deleteButton.closest(".todo-item");
    if (listItem) {
        deleteTask(listItem.dataset.id);
        refreshUI();
    }
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
        refreshUI();
    });
});

clearCompletedButton.addEventListener("click", () => {
    clearCompletedTasks();
    refreshUI();
});

todayDate.textContent = new Intl.DateTimeFormat("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
}).format(new Date());

refreshUI();
