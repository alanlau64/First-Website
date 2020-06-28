let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chelsea-icon.png') {
        myImage.setAttribute('src', 'images/csgo-icon.png');
    }
    else {
        myImage.setAttribute('src', 'images/chelsea-icon.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUsername() {
    let myName = prompt('Enter your name: ');
    if (!myName) {
        setUsername();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This is a heading by ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUsername();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is a heading by ' + storedName;
}

myButton.onclick = function () {
    setUsername()
}