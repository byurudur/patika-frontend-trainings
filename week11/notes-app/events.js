document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('note-input');
    const addBtn = document.getElementById('add-btn');
    const notesList = document.getElementById('notes-list');
    const searchInput = document.getElementById('search');
    const colorPickers = document.querySelectorAll('.color-picker');
    let selectedColor = 'pink'; // Default color

    // Color picker functionality
    colorPickers.forEach(picker => {
        picker.addEventListener('click', function () {
            colorPickers.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            selectedColor = this.getAttribute('data-color');
        });
    });

    // Add note functionality
    addBtn.addEventListener('click', function () {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            addNoteToList(noteText, selectedColor);
            noteInput.value = ''; // Clear input
        }
    });

    // Add note to the list
    function addNoteToList(text, color) {
        const note = document.createElement('div');
        note.className = `note bg-${color}`;
        note.innerText = text;
        notesList.appendChild(note);
    }

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const notes = notesList.getElementsByClassName('note');
        Array.from(notes).forEach(note => {
            const text = note.innerText.toLowerCase();
            note.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
