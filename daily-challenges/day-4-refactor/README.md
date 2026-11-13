# Day 4: Refactor Challenge

This challenge documents the refactoring approach used in the Week 7 To-Do List.

- Replaced vague names with names such as `activeCount` and `completedCount`.
- Separated pure task transformations into `js/todo-logic.js`.
- Moved browser storage operations into `js/storage.js`.
- Kept DOM creation and rendering in `js/ui.js`.
- Added safe fallbacks for malformed stored JSON and unavailable storage.
- Reused `refreshUI()` to keep event handlers focused on one job.
