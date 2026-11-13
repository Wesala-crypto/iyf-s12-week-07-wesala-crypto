const TODOS_KEY = "focuslist_todos";
const FILTER_KEY = "focuslist_filter";
const VALID_FILTERS = ["all", "active", "completed"];

function readJSON(key, fallback) {
    try {
        const savedValue = localStorage.getItem(key);
        return savedValue === null ? fallback : JSON.parse(savedValue);
    } catch {
        return fallback;
    }
}

export function loadTodos() {
    const savedTodos = readJSON(TODOS_KEY, []);
    if (!Array.isArray(savedTodos)) {
        return [];
    }

    return savedTodos.filter((todo) =>
        todo &&
        (typeof todo.id === "string" || typeof todo.id === "number") &&
        typeof todo.text === "string" &&
        typeof todo.completed === "boolean"
    );
}

export function saveTodos(todos) {
    try {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    } catch {
        // Storage may be unavailable or full; the app remains usable in memory.
    }
}

export function loadFilter() {
    const savedFilter = readJSON(FILTER_KEY, "all");
    return VALID_FILTERS.includes(savedFilter) ? savedFilter : "all";
}

export function saveFilter(filter) {
    try {
        localStorage.setItem(FILTER_KEY, JSON.stringify(filter));
    } catch {
        // Storage may be unavailable; the default filter remains usable.
    }
}
