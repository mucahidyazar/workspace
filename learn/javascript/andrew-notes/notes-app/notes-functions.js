"use strict";

//Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (err) {
    return [];
  }
};

// Save the notes to localStorage
const saveNotes = (notes) =>
  localStorage.setItem("notes", JSON.stringify(notes));

// Remove a note from list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

//Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement("div");
  const aEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "X";
  button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });
  noteEl.appendChild(button);

  // Setup the note title a
  if (note.title.length > 0) {
    aEl.textContent = note.title;
  } else {
    aEl.textContent = "Unnamed note";
  }
  aEl.href = `/notes-app/note.html#${note.id}`;
  noteEl.appendChild(aEl);
  return noteEl;
};

const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byAlphabetically") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

//Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesBody.innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    notesBody.appendChild(noteEl);
  });
};

// Generate the last edited message
const generateLastEdited = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`;
