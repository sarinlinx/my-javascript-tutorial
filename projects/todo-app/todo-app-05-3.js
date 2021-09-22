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
    // add new filter with default value of false
    hideCompleted: false
}

const renderTodos = function(a, b) {
    const filteredTodos = a.filter(function(c) {

        const searchTextMatch = c.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !b.hideCompleted || !c.completed

        // return false for todos the are complete
        // return true for todos NOT complete
        // if search text matches todo AND hideComplete checkbox, it is displayed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(f) {
        // return true if NOT completed
        return !f.completed
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



// look for change event on the checkbox which fires immediately
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    // set the const 'filters' property of 'hideCompleted' to the current value of the checkbox
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})