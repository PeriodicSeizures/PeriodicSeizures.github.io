function changeStyle() {
    // Obtains the <link> element that links to the css (by using its id).
    var currentCSS = document.getElementById('main-style');

    const styles = [
        "dummy", // non-existent style
        "styles/main.css",
        "styles/alternate.css"
    ]

    var index = styles.indexOf(currentCSS.getAttribute('href'))
    currentCSS.setAttribute('href', styles[(index + 1) % styles.length])

    // Change the value of href attribute to change the css file.
    // if (currentCSS.getAttribute('href') == 'styles/main.css') {
    //     currentCSS.setAttribute('href', 'styles/alternate.css');
    // } else {
    //     currentCSS.setAttribute('href', 'styles/main.css');
    // }
}