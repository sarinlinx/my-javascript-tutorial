const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// create function
// 1st argument is the Array of Objects
// 2nd argument is a text string you're searching for
// return note object if found
// return undefined otherwise

const findNote = function(notes, noteTitle) {
    // you don't need to add index unless you're using it
    const index = notes.findIndex(function(note, index) {
        //check if the a Title matches the string you're searching for
        // If so the index value is stored to the const index
        // If not const index equals -1
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

}


// call function
// 1st argument is the Array of Objects
// 2nd argument is the text string to search for
const note = findNote(notes, 'Office modification')
console.log(note)















const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}





const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// Call the function
console.log(findNotes(notes, 'eating'))