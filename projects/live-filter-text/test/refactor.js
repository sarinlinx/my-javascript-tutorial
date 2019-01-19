/*
let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain',
    completed: true
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.',
    completed: true
}, {
    title: 'Office modification',
    body: 'Get a new seat',
    completed: false
}]
*/

//call function from other file
let notes = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})



document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    notes.push({
        //create id property for UUID
        //the value is the function that returns the UUID
        id: uuidv4(),
        title: e.target.elements.text.value,
        completed: false
    })

    //call to savedTodos() in other file, passing in notes Array
    savedTodos(notes)

    renderNotes(notes, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderNotes(notes, filters)
})
