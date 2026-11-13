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

- **My pull request:** https://github.com/Wesala-crypto/iyf-s12-week-07-wesala-crypto/pull/1
- **Classmate's pull request reviewed:** https://github.com/fairyfaiyth/iyf-s12-week-07-fairyfaiyth/pull/1
- **My review:** Approved the classmate's pull request.
- **My partner reviewer:** @fairyfaiyth
- **Partner review:** Approved my pull request.
## What I Learned

This project helped me practise persistence with localStorage, safe JSON parsing, centralized state, modular JavaScript, pure functions, automated testing, linting and collaborative Git workflows.

## License

This project was created for the IYF Season 12 learning programme.
