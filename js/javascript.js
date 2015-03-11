// var sayMyName = function() {
// 	var name = prompt('What is your name?');
// 	document.write('Your name is ' + name);
// 	document.write('<br/>Your name is ' + name.length + ' characters long.');
// }
// sayMyName();

// var headsOrTails = prompt('Heads or tails?').toUpperCase();
// var coinFlip = Math.floor(Math.random() + 1);
// if (coinFlip < 1) {
// 	if (headsOrTails === 'HEADS') {
// 		document.write('Heads! You win!');
// 	} else {
// 		document.write('Tails! You lose.');
// 	}
// } else {
// 	if (headsOrTails === 'TAILS') {
// 		document.write('Tails! You win!');
// 	} else {
// 		document.write('Tails! You lose.');
// 	}
// }

// if (headsOrTails == 'Heads' || 'heads' && coinFlip < 5) {
// 	document.write('Heads! You win!');
// } else if (headsOrTails == 'Heads' || 'heads' && coinFlip > 5) {
// 	document.write('Heads! You lose!');
// } else if (headsOrTails == 'Tails' || 'tails' && coinFlip > 5) {
// 	document.write('Tails! You Win!');
// } else {
// 	document.write('Tails! You lose!');
// }

var userChoice = prompt("Heads or Tails?").toUpperCase();
var coinToss = Math.random();
if (userChoice === "HEADS") {
    if (coinToss < 0.5) {
        var result = document.write("The coin landed on heads. You Win!");
    }
    else {
        var result = document.write("The coin landed on tails. You Lose!");
    }
}
else {
    if (coinToss < 0.5) {
        var result = document.write("The coin landed on heads. You Lose!");
    }
    else {
        var result = document.write("The coin landed on tails. You Win!");
    }
}