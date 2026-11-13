const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const itemsLeft = document.querySelector("#items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedButton = document.querySelector("#clear-completed");
let todos = [];
let currentFilter = "all";

function renderTodos() {
    const visibleTodos = currentFilter === "all" ? todos :
        todos.filter((todo) => currentFilter === "active" ? !todo.completed : todo.completed);
    todoList.replaceChildren();
    visibleTodos.forEach((todo) => {
        const item = document.createElement("li");
        item.className = `todo-item${todo.completed ? " completed" : ""}`;
        item.dataset.id = String(todo.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";
        checkbox.checked = todo.completed;
        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = todo.text;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.dataset.action = "delete";
        remove.className = "delete-button";
        remove.textContent = "×";
        item.append(checkbox, text, remove);
        todoList.append(item);
    });
    const activeCount = todos.filter((todo) => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} tasks left`;
    document.querySelector("#empty-state").hidden = visibleTodos.length > 0;
    document.querySelector("#completion-summary").textContent =
        `${todos.filter((todo) => todo.completed).length} completed`;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) {return;}
    todos = [...todos, { id: Date.now(), text, completed: false }];
    input.value = "";
    renderTodos();
});

todoList.addEventListener("change", (event) => {
    if (!event.target.matches(".todo-checkbox")) {return;}
    const id = Number(event.target.closest(".todo-item").dataset.id);
    todos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos();
});

todoList.addEventListener("click", (event) => {
    if (!event.target.matches('[data-action="delete"]')) {return;}
    const id = Number(event.target.closest(".todo-item").dataset.id);
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
});

filters.forEach((button) => button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filters.forEach((filterButton) => {
        const active = filterButton === button;
        filterButton.classList.toggle("active", active);
        filterButton.setAttribute("aria-pressed", String(active));
    });
    renderTodos();
}));

clearCompletedButton.addEventListener("click", () => {
    todos = todos.filter((todo) => !todo.completed);
    renderTodos();
});

document.querySelector("#today-date").textContent = new Date().toLocaleDateString("en-KE");
renderTodos();
