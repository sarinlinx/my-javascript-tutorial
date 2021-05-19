const notes = [{
    title: 'b'
}, {
    title: 'a'
}, {
    title: 'c'
}]

const sortNotes = function(notesArray) {
    // calling sort() does NOTHING for an Array of Objects
    // you must provide it with a function to use it with an Array of Objects
    // the comparison function takes 2 arguments
    // write code to specify what should happen to each a or b value
    notesArray.sort(function(a, b) {
        let count = 1



        // if a should come first, return -1
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            console.log("first" + count)
            console.log(notesArray)
            count++
            return -1

        }
        // if b should come first, return 1
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            console.log("second" + count)
            console.log(notesArray)
            count++
            return 1
        }
        // if they are identical in order, return zero notifying that the order does not need to change
        else {
            console.log("third" + count)
            console.log(notesArray)
            count++
            return 0
        }

    })
}



sortNotes(notes)
console.log(notes)



// add a count value to understand how sort() iterates