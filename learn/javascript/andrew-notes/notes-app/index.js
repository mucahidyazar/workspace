"use strict";

const body = document.body;
const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const notesBody = document.querySelector(".notes");
const todoInput = document.querySelector(".todoInput");
const todoForm = document.getElementById("todoForm");
const forFunCheckbox = document.querySelector("#forFun");

let notes = getSavedNotes();
const timestamp = moment().valueOf();

const filters = {
  searchText: "",
  sortBy: "byEdited",
};

renderNotes(notes, filters);

todoInput.addEventListener("input", (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = uuidv4();
  notes.push({
    id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);
  event.target.firstName.value = "";
  location.assign(`/notes-app/note.html#${id}`);
});

document.querySelector("#filteredBy").addEventListener("change", (event) => {
  filters.sortBy = event.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    saveNotes(notes);
    renderNotes(notes, filters);
  }
});
