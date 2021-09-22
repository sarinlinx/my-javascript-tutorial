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
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter(function(todo) {
        // CHECK FOR USER INPUT
        // return boolean of TRUE if 
        // the original todos Array includes text from the const 'filters'
        // searchText is from the function below listening for user input
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // set new value for filteredTodos
    // filter it again
    filteredTodos = filteredTodos.filter(function(todo) {

        // if filter is checked (TRUE), hide completed items
        if (filters.hideCompleted) {
            // todo.completed returns TRUE for things are are completed
            // flip boolean to !todo.completed so it returns items NOT completed
            return !todo.completed
        }
        // if checkbox not checked (FALSE), show all items
        else {
            return true;
        }


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

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})