function changeStyle() {
    // Obtains the <link> element that links to the css (by using its id).
    var currentCSS = document.getElementById('main-style');

    const styles = [
        "none", // non-existent style
        "styles/main.css",
        "styles/alternate.css"
    ]

    var index = styles.indexOf(currentCSS.getAttribute('href'))
    var nextIndex = (index + 1) % styles.length
    var next = styles[nextIndex]
    currentCSS.setAttribute('href', next)

    document.querySelector('#style-button').value = 'Change Style to ' 
        + styles[(nextIndex + 1) % styles.length]

    // var button = document.getElementById('style-button')
    // button.setAttribute('content', 'Change Style (' + next + ')')

    // Change the value of href attribute to change the css file.
    // if (currentCSS.getAttribute('href') == 'styles/main.css') {
    //     currentCSS.setAttribute('href', 'styles/alternate.css');
    // } else {
    //     currentCSS.setAttribute('href', 'styles/main.css');
    // }
}