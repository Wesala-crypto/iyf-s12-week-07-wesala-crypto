# Day 5: Weather Dashboard Code Review

Review checklist for the Week 6 Weather Dashboard:

- [ ] Missing API key is detected and explained to the user.
- [ ] Invalid city / 404 responses show a useful message.
- [ ] Unauthorized / 401 responses are handled.
- [ ] Network failures are caught and displayed.
- [ ] Loading and error states are clear.
- [ ] API logic, DOM updates, and state are separated where practical.
- [ ] Variable and function names explain their purpose.
- [ ] Repeated code is extracted into reusable functions.

## Improvements to consider

1. Keep API configuration outside committed source files.
2. Validate the city input before sending a request.
3. Disable the search button while a request is running.
4. Keep the last successful search history in one place.
5. Test error handling for missing keys, invalid cities, and network failures.

This is a review checklist; confirm each item against the actual Week 6 source before marking it complete.
