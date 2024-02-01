document.addEventListener('DOMContentLoaded', () => {
    // console.log('The DOM has loaded')
    updateText()
})

// console.log('before DOM loads')

const updateText = () => {
    document.getElementById('text').innerHTML = 'This is really cool!'
}