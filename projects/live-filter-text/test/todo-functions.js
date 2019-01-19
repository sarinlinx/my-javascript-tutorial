const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

const savedTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(notes))
}

//Create function to remove an item by its UUID
const removeTodo = function(id) {
  //
  const todoIndex = notes.findIndex(function(notes) {
    //return true if the UUID = the id passed in
    return notes.id === id
  })

  if (todoIndex > -1) {
    notes.splice(todoIndex, 1)
  }
}


const renderNotes = function(x, y) {
  const filteredNotes = x.filter(function(z) {
    const searchTextMatch = z.title.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !z.completed

    return searchTextMatch && hideCompletedMatch
  })


  const incompleteTodos = filteredNotes.filter(function(z) {
    return !z.completed
  })


  document.querySelector('#notes').innerHTML = ''
  document.querySelector('#notes').appendChild(generateSummaryDOM(incompleteTodos))

  filteredNotes.forEach(function(i) {
    document.querySelector('#notes').appendChild(generateTodoDOM(i))
  })
}


const generateTodoDOM = function(i) {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  checkbox.setAttribute('type', 'checkbox')
  todoEl.appendChild(checkbox)
  todoText.textContent = i.title
  todoEl.appendChild(todoText)
  removeButton.textContent = 'x'
  todoEl.appendChild(removeButton)

  //Create event to remove Object when button is clicked
  removeButton.addEventListener('click', function() {
    //call function above to remove the todo item by UUID
    //i comes from the parent scope
    removeTodo(i.id)
    //save todos
    savedTodos(notes)
    renderNotes(notes, filters)
  })


  return todoEl
}


const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}
