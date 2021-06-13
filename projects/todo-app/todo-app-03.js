const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


// keeps track of latest data
// this changes as search input changes
const filters = {
    searchText: ''
}




const renderTodos = function(a, b) {
    // create const to store new filtered Array of the original todos Array 
    const filteredTodos = a.filter(function(c) {
        // return boolean of TRUE if 
        // the original todos Array includes text from the const 'filters'
        return c.text.toLowerCase().includes(b.searchText.toLowerCase())
    })

    // only incomplete todos
    // create const to store new Array of the filteredTodos Array
    // that was already filtered based off user input 
    const incompleteTodos = filteredTodos.filter(function(d) {
        // only return if the 'completed' property is NOT true
        return !d.completed
    })

    // clear this element    
    document.querySelector('#todos').innerHTML = ''

    // create new element
    const summary = document.createElement('h2')
        // incomleteTodos.length is the amount of index present in the filtered Array
    summary.textContent = `You have ${incompleteTodos.length} todos left`
        // append below element with ID of #todos
    document.querySelector('#todos').appendChild(summary)


    // loop through filteredTodos Array
    filteredTodos.forEach(function(f) {
        // create new element
        const p = document.createElement('p')
            // text is the user input
        p.textContent = f.text
            // append below element with ID of #todos
        document.querySelector('#todos').appendChild(p)
    })
}



// run function
// the first argument is the name of the Array
// the 2nd arg is the const named filters
renderTodos(todos, filters)



// target the #search-text element, look for its input text, store it in (e)
document.querySelector('#search-text').addEventListener('input', function(e) {
    // set the latest value for the 'filters' const
    filters.searchText = e.target.value
        // run the function
    renderTodos(todos, filters)
})