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




const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})







// target element with ID of #new-todo and listen for 'submit' event
document.querySelector('#new-todo').addEventListener('submit', function(e) {
    // prevent default submit action
    e.preventDefault()
        // add to Array with push()
    todos.push({
            // text and completed are properties of the original todos Array
            // set the 'text' property to the input fields text
            text: e.target.elements.text.value,
            completed: false
        })
        // call function
    renderTodos(todos, filters)
        // clear input value
    e.target.elements.text.value = ''
})