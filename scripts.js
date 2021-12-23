// Dev:       Eric Morgan
// Date:      12/22/21
// Filename:  scripts.js

// stoplight element
var light = document.getElementById("light");

// div containing all page elements
var thatDiv = document.getElementById('thatDiv');

var runners = document.getElementById('runners'); // contains the racers

// individual runners
var sponge = document.getElementById('sponge');
var star = document.getElementById('star');

var pace; // used for setting player acceleration

// elements for a racer winning
var vicPic = document.createElement('img');
var vicTxt = document.createElement('h1');

// styling victory elements and positioning them
vicTxt.style.color = "#F8F8FF";
vicTxt.className = 'text-center';
vicPic.style.top = 25 + "px";
vicPic.style.left = 1200 + "px";
vicPic.style.position = "fixed";

// creating random numbers 
ranNum = Math.ceil(Math.random() * 5);
ranNum2 = Math.ceil(Math.random() * 5);

// Setting the racers to their start positions and swapping to run stance by clicking either character
runners.addEventListener('click', function () {
    sponge.src = "images/spongebob_run.png";
    sponge.style.top = 500 + "px";
    sponge.style.left = 300 + 'px';

    star.src = "images/patrick_run.png";
    star.style.top = 600 + "px";
    star.style.left = 300 + 'px';

});

// Click the light to turn it green
light.addEventListener('click', function () {
    this.src = 'images/light_green.png';

    // Starts the race by setting an interval every 20 miliseconds to advance forward
    pace = setInterval(run, 20); // calls run method

});

// Advancing the runners forward
function run() {
    var increment = Math.ceil(Math.random() * ranNum); // multiplying random nums by other random nums for variability
    var increment2 = Math.ceil(Math.random() * ranNum2);
    // take the original set left amount and convert it into an integer, then add the random left value
    sponge.style.left = parseInt(sponge.style.left) + parseInt(increment) + "px";
    star.style.left = parseInt(star.style.left) + parseInt(increment2) + "px";
    victory(); // call method for victor determination
}

// Determines who wins the race; slight inconsistency: sometimes will not stop the race if either runner's left value = 1192px
function victory() {
    if (sponge.style.left == 1192 + 'px') {
        clearInterval(pace); // Once the finished line is reached, stop the pace interval and display the winner's image
        vicPic.src = "images/spongebob.png";
        vicTxt.innerHTML = "Spongebob wins!";
        thatDiv.appendChild(vicPic); // Add victory image to container div
        runners.appendChild(vicTxt);
    }
    if (star.style.left == 1192 + 'px') {
        clearInterval(pace);
        vicPic.src = "images/patrick.png";
        vicTxt.innerHTML = "Patrick wins";
        thatDiv.appendChild(vicPic);
        runners.appendChild(vicTxt);
    }
    Reset(); // call reset method

}

// Put runners back into position
function Reset() {
    vicPic.addEventListener('click', function () {
        light.src = "images/light_red.png"; // light goes back to red
        vicPic.src = "";
        vicTxt.innerHTML = ""; // clear victory elements
        sponge.src = "images/spongebob_run.png"; // place each character back to their ready position
        sponge.style.top = 500 + "px";
        sponge.style.left = 300 + 'px';

        star.src = "images/patrick_run.png";
        star.style.top = 600 + "px";
        star.style.left = 300 + 'px';
    })
}