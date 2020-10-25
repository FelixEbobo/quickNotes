var notes = document.getElementsByClassName("note")

const noteAddForm = document.getElementById("wrapper")

const notesHolder = document.getElementById("notes")

const noteCardH1 = document.querySelector("div#note-form input[name='noteTitle']")
const noteCardText = document.querySelector("div#note-form textarea[name='noteText']");

function closeNoteForm() {
    noteAddForm.style.display = 'none';
}

function addNote() {
    let startIndex = notes.length;
    document.getElementById("add-note").remove();
    let noteCard = document.createElement("div");
    let noteTitle = document.createElement("h1");
    let noteText = document.createElement("p");
    noteTitle.textContent = noteCardH1.value;
    noteText.textContent = noteCardText.value;
    noteCardH1.value = "";
    noteCardText.value = "";

    let addNoteCard = document.createElement("div");
    noteCard.className = "note";
    addNoteCard.id = "add-note";
    
    noteCard.appendChild(noteTitle);
    noteCard.appendChild(noteText);
    notesHolder.appendChild(noteCard);
    notesHolder.appendChild(addNoteCard);
    updateCardScripts(startIndex);
    notes = document.getElementsByClassName("note")
    closeNoteForm();
}

// start - index from which algorithm should start working
function updateCardScripts(start) {
    for (let index = start; index < notes.length; index++) {
        notes[index].addEventListener("click", e => {
            console.log(e.target);
        })
    }
    document.getElementById("add-note").addEventListener("click", e => {
        noteAddForm.style.display = "block";
    })
}

updateCardScripts(0);