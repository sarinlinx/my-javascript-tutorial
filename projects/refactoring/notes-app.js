const notes = getSavedNotes()



const filters = {
    searchText: ''
}



// call function once to make sure the application initially renders something
renderNotes(notes, filters)



// push new item to 'notes' Array
document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
            id: uuidv4(),
            title: '',
            body: ''
        })
        // save 'notes' Array to localStorage
    localStorage.setItem('notes', JSON.stringify(notes))
        // renderNotes(notes, filters)
})



// re-run the function based off user input
document.querySelector('#search-text').addEventListener('input', function(e) {
    // update the 'filters' Object with the text searched for 
    filters.searchText = e.target.value
        // the function is then called 
    renderNotes(notes, filters)
})