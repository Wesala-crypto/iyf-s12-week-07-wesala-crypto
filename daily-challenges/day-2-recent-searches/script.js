const STORAGE_KEY = "challenge_recent_searches";
const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
const historyList = document.querySelector("#history");
const result = document.querySelector("#result");

function loadHistory() {
    try {
        const history = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        return Array.isArray(history) ? history.filter((item) => typeof item === "string").slice(0, 5) : [];
    } catch {
        return [];
    }
}

let searches = loadHistory();

function renderHistory() {
    historyList.replaceChildren();
    searches.forEach((search) => {
        const item = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = search;
        button.addEventListener("click", () => runSearch(search));
        item.append(button);
        historyList.append(item);
    });
}

function runSearch(search) {
    result.textContent = `You searched for: ${search}`;
    input.value = search;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const search = input.value.trim();
    if (!search) {return;}
    searches = [search, ...searches.filter((item) => item.toLowerCase() !== search.toLowerCase())].slice(0, 5);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
    runSearch(search);
    renderHistory();
});
renderHistory();
