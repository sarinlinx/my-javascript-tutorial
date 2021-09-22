let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]



// create filters Object to store search text
const filters = {
    searchText: ''
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

// if notesJSON isn't null
if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}












// function to check if search text exists in title
const renderNotes = function(notez, filterz) {
    // create a const to store a new Array created by filter()
    // this limits the notes to just those that pass the filter
    const filteredNotes = notez.filter(function(notee) {
        // return TRUE if note  title contains search text
        return notee.title.toLowerCase().includes(filterz.searchText.toLowerCase())
    })

    // CLEAR AN ELEMENT
    // locate the HTML element with an ID of #notes
    // target its innerHTML to delete everything
    // this makes sure previous content doesn't exist while you enter new text
    // this ensures only the NEW results are displayed and the old results removed
    document.querySelector('#notes').innerHTML = ''

    // CREATE NEW ELEMENT
    // iterate over filteredNotes Array and print to new element
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }



        document.querySelector('#notes').appendChild(noteEl)
    })
}

// call function once to make sure the application initially renders something
renderNotes(notes, filters)



// push new item to 'notes' Array
document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
            title: '',
            body: ''
        })
        // save 'notes' Array to localStorage
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})



// re-run the function based off user input
document.querySelector('#search-text').addEventListener('input', function(e) {
    // update the 'filters' Object with the text searched for 
    filters.searchText = e.target.value
        // the function is then called 
    renderNotes(notes, filters)
})