const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// select the first button on the page
// (e) is the callback argument that represents the event. Info about what event happened and why
// it can be called anything, but the standard is (e)
document.querySelector('button').addEventListener('click', function(e) {
    // target is a representation of the DOM element
    e.target.textContent = 'The button was clicked'
})