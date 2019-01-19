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

//Get the DOM elements for an individual note
const generateTodoDOM = function(i) {
  const noteEl = document.createElement('p')
  noteEl.textContent = i.title
  return noteEl
}

///Get the DOM elements for a list summary
const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}
