"use strict";

// Fetch existing todos from localStorage
const fetchTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  let leftTodosValue = 0;
  filteredTodos.forEach((todo) => {
    !todo.completed && leftTodosValue++;
  });

  todosBody.innerHTML = "";

  todosBody.appendChild(generateSummaryDOM(leftTodosValue));

  filteredTodos.forEach((todo) => {
    const newEl = generateToDOM(todo);
    todosBody.appendChild(newEl);
  });
};

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Get the DOM elements for an individual note
const generateToDOM = (todo) => {
  const newEl = document.createElement("div");
  const newCheckbox = document.createElement("input");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");

  //Checkbox
  newCheckbox.type = "checkbox";
  newCheckbox.checked = todo.completed;
  newCheckbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  newEl.appendChild(newCheckbox);

  //Span
  if (todo.text !== "") {
    newSpan.textContent = todo.text;
  } else {
    newSpan.textContent = "Unamed Todo";
  }
  newEl.appendChild(newSpan);

  //Button
  newButton.textContent = "X";
  newButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  newEl.appendChild(newButton);

  return newEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (leftTodosValue) => {
  const leftTodos = document.createElement("h2");
  leftTodos.textContent = `You have ${leftTodosValue} todos left`;
  return leftTodos;
};
