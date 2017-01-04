document.getElementById("button").onclick = startGame;
function startGame() {
  var beginPlay = confirm ("I'm thinking of a number between 1 and 10.  Would you like to try and guess it?");
    if (beginPlay) {
      var setNumber = (Math.floor(Math.random() * 10) + 1);
        console.log(setNumber);
        var guess = parseInt(prompt("Enter your guess (numbers only please)."), 10);  // guess prompt and convert from string to number
        for (;guess === guess;) {
          if (guess > setNumber) {
            guess = parseInt(prompt("That guess was too high. Try again."), 10);
          }
          else if (guess < setNumber) {
            guess = parseInt(prompt("That guess was too low. Try again."), 10);
          }
          else {
            alert ("You did it! " + guess + " was the right number.");
            return;
          }
        }
    }
      else alert("That's cool, maybe another time.");
}
