const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function(notes) {
    // calling sort() does NOTHING for an Array of Objects
    // you must provide it with a function to use it with an Array of Objects
    // the comparison function takes 2 arguments
    // write code to specify what should happen to each a or b value
    notes.sort(function(a, b) {
        // if a should come first, return -1
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        // if b should come first, return 1
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        // if they are identical in order, return zero notifying that the order does not need to change
        else {
            return 0
        }
    })
}

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

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)