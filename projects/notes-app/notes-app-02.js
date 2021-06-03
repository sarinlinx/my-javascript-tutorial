// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    p.textContent = '******'

})

// create new element
const newParagraph = document.createElement('p')

// Give the new element some text content
newParagraph.textContent = 'This is a new element from JavaScript'

// add the new element to the page
// querySelector targets the body
// appenChild adds element to bottom of body
document.querySelector('body').appendChild(newParagraph)