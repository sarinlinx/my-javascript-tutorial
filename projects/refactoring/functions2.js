console.log(uuidv4())
    // Read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function(notes) {
    localStorage.setItem('note', JSON.stringify(notes))
}

// remove a note from the list
const removeNote = function(id) {
    // find index for the note on 'notes' Array
    // this gets called 1x for each item in the Array
    const noteIndex = notes.findIndex(function(note) {
            //return true when the note id is the same one passed into the function
            return note.id === id
        })
        //remove note if there's a match
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }

}


// Generate the DOM structure for a note 
const generateNoteDOM = function(note) {
    // change to div so you can place x button before text field
    const noteEl = document.createElement('div')
        // Create span so it will be on same line as button
    const textEl = document.createElement('span')
        // create button
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

    // target UUID of x button clicked
    button.addEventListener('click', function() {
        // call function to specific UUID clicked
        removeNote(note.id)
            // save notes
        saveNotes(notes)
            // re-render list
        renderNotes(notes, filters)
    })

    // setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    // append noteEl to the span tag
    noteEl.appendChild(textEl)

    return noteEl
}



// Render application notes
const renderNotes = function(notez, filterz) {
    const filteredNotes = notez.filter(function(notee) {
        return notee.title.toLowerCase().includes(filterz.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {

        const noteEl = generateNoteDOM(note)

        document.querySelector('#notes').appendChild(noteEl)
    })
}