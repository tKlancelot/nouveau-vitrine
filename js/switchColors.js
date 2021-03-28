let myButton = document.getElementById('boutonPaint');

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-purple') {
        setTheme('theme-alt');
        $(myButton).css("background-image","url('./assets/icons/icon-paint-alt.svg')");
    } else {
        setTheme('theme-purple');
        $(myButton).css("background-image","url('./assets/icons/icon-paint-purple.svg')");
    }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.log(themeName);
}


// Immediately invoked function to set the theme on initial load

(function () {
    if (localStorage.getItem('theme') === 'theme-purple') {
        setTheme('theme-purple');
        $(myButton).css("background-image","url('./assets/icons/icon-paint-purple.svg')");
    } else {
        setTheme('theme-alt');
    }
 })();

 myButton.addEventListener('click',toggleTheme);


 