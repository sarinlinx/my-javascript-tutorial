//getSavedTodos
//put in function

const getSavedTodos = function() {
  //Check for previously saved localStorage
  //Pick a generic keyname to look for
  const todosJSON = localStorage.getItem('todos')
  //Create if statement to check what storage you get back
  if (todosJSON !== null) {
    //If the key 'todos' exists in storage,
    //use parse() to convert it into an Array
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

//save todos to localStorage
const savedTodos = function(todos) {
  //write to localStorage
  //The value passes the converted string of the Array
  localStorage.setItem('todos', JSON.stringify(notes))
}

//Render todos based on filters
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

//Print content to page
const generateTodoDOM = function(i) {

  //Create a root div tag, this is what everything is appended to
  const todoEl = document.createElement('div')
  //Create checkbox
  const checkbox = document.createElement('input')
  //Create element for todo text
  const todoText = document.createElement('span')
  //Create remove button
  const removeButton = document.createElement('button')

  //set the checkbox
  checkbox.setAttribute('type', 'checkbox')
  //Print to page
  todoEl.appendChild(checkbox)
  //set todo text
  todoText.textContent = i.title
  //Print to page
  todoEl.appendChild(todoText)
  //set remove button
  removeButton.textContent = 'x'
  //print button to page
  todoEl.appendChild(removeButton)

  return todoEl
}

///Get the DOM elements for a list summary
const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}
