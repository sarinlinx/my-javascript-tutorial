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
    // immediately return whatever comes back from find()
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}





const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        // note. is an Object
        // note.title is a String
        // You can then run the String method toLowerCase()
        // You can then 'chain' another String method of .includes since you're still working with a String
        // Pass into includes() the search text using the 'query' argument
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())

        // includes returns a boolean
        // If the boolean is TRUE for either const, it is returned
        return isTitleMatch || isBodyMatch
    })
}

// Call the function
console.log(findNotes(notes, 'eating'))






// call function
// 1st argument is the Array of Objects
// 2nd argument is the text string to search for
const note = findNote(notes, 'office modification')
console.log(note)