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

// store items NOT complete in const
const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

// create an h2 element
const summary = document.createElement('h2')

// add text content
summary.textContent = `You have ${incompleteTodos.length} todos left`

// add element to the bottom of the page
document.querySelector('body').appendChild(summary)

// loop over Array of Objects to add ALL to the page
todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})