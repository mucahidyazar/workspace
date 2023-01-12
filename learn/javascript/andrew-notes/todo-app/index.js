"use strict";

const filterTodosInput = document.querySelector(".filterTodos");
const todosBody = document.querySelector(".todos");
const todoForm = document.querySelector(".todoForm");
const hideCompleted = document.querySelector("#hideCompleted");

let todos = fetchTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

filterTodosInput.addEventListener("input", (event) => {
  filters.searchText = event.target.value.toLowerCase();
  renderTodos(todos, filters);
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push({
    id: uuidv4(),
    text: event.target.newTodo.value,
    completed: false,
  });
  saveTodos(todos);
  event.target.newTodo.value = "";
  renderTodos(todos, filters);
});

hideCompleted.addEventListener("change", (event) => {
  filters.hideCompleted = event.target.checked;
  renderTodos(todos, filters);
});
