// target all paragraphs
const paragraphs = document.querySelectorAll('p')

// 
paragraphs.forEach(function(paragraph) {
    // used 'textContent.includes()' to check if the paragraphs text includes the word 'the'
    if (paragraph.textContent.includes('the')) {
        // remove those paragraphs
        paragraph.remove()
    }
})