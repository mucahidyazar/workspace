"use strict";

const body = document.querySelector("body");
const titleElement = document.getElementById("noteTitle");
const bodyElement = document.getElementById("noteBody");
const removeElement = document.getElementById("removeNote");
const lastEdited = document.getElementById("lastEdited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign("/notes-app");
}

titleElement.value = note.title;
bodyElement.value = note.body;
lastEdited.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf(); // Aynisi => new Date().getTime();
  lastEdited.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = new Date().getTime();
  lastEdited.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

document.getElementById("removeNote").addEventListener("click", (e) => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign("/notes-app");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);

    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("/notes-app");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    lastEdited.textContent = generateLastEdited(note.updatedAt);
  }
});
