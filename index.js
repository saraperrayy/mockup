// Basic function assignment

var message = 'Sign up for my newsletter and receive 10% off!';
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}


// Get username assignment
function getUsername() {
    // allow the user to input their name
    var username = window.prompt("Please enter your username")
    // Check to see if a username is Sara
    if(username === '') {
        document.write('Enter your username')
    } else {
        document.write(`<h1>Hey ${username}</h1>`)
    }
}

// Print photo assignment

function getImageCount() {
    // get number from user
    let pictureCount = window.prompt('Please enter the quantity of pictures you would like to save.')
    // check to see if they gave a number
    if(isNaN(pictureCount) === false) {
        document.write(`<h1>${pictureCount}</h1>`)
        for(var i = 0; i < pictureCount; i++) {
            document.write('<img src="DSC_0542.jpg"/>')
        }
    }
}

