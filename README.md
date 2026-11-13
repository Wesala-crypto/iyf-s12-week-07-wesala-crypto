# Christopher Okong'o Wesala — IYF Season 12 Week 7

A persistent, modular To-Do List built with HTML, CSS and JavaScript ES modules. The project demonstrates localStorage persistence, separation of concerns, pure functions, automated tests, ESLint and Prettier.

## Live Demo

After enabling GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**, add the published URL here:

[Open FocusList](https://wesala-crypto.github.io/iyf-s12-week-07-Wesala-crypto/)

## Features

- Add, complete and delete tasks.
- Filter all, active and completed tasks.
- Clear completed tasks and view task counts.
- Persist tasks and the selected filter with localStorage.
- Recover safely when saved JSON is missing, invalid or has an unexpected shape.
- Responsive layout and accessible labels.
- Shopping cart class build with quantity controls and persistence.
- Five daily challenge folders.

## Technologies

- HTML5 and CSS3
- JavaScript ES modules
- localStorage and JSON
- Node.js and npm
- ESLint 9, Prettier and Vitest

## Project Structure

```text
iyf-s12-week-07-Wesala-crypto/
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── todo-logic.js
│   └── ui.js
├── tests/
│   └── todo-logic.test.js
├── cart/
│   ├── index.html
│   ├── cart.css
│   └── cart.js
├── daily-challenges/
├── eslint.config.js
├── .prettierrc
├── package.json
├── package-lock.json
└── .gitignore
```

## Setup

Requires Node.js 22 or 24.

```bash
npm install
npm test
npm run lint
npm run format
```

Open the project with VS Code Live Server. JavaScript modules should be served over HTTP rather than opened directly using a `file://` URL.

## Testing

The Vitest suite covers adding, empty input, toggling, missing IDs, deleting, filtering, counts, and immutability of the original array.

## Collaboration

- **PR I opened (module refactor):** Add your actual pull request URL here.
- **PR I reviewed (classmate):** Add the pull request containing your inline review comments here.
- **Reviewer / review status:** Add the reviewer name and approval status here.

Do not invent or add PR links until the real reviews have taken place.

## What I Learned

This project helped me practise persistence with localStorage, safe JSON parsing, centralized state, modular JavaScript, pure functions, automated testing, linting and collaborative Git workflows.

## License

This project was created for the IYF Season 12 learning programme.
