var game = {};

game.win = 0;
game.loss = 0;

choices = ['rock', 'paper', 'scissors'];

var random1 = Math.floor(Math.random() * 2) + 1; 
console.log(Math.floor(Math.random() * 2) + 1);
console.log(random1);

var random2 = Math.floor(Math.random() * 2) + 1; 
console.log(Math.floor(Math.random() * 2) + 1);
console.log(random2);

var bot1 = choices[random1]; 
var bot2 = choices[random2];

/**
 * If bot1 is the winner, then we set the propery "win" of game to 1. 
 * if bot1 loses, we set the propery of "loss" to 1.
 */
if (bot1 === 'paper')
{
    if (bot2 === 'rock')
    {
        game.win++;
    }
    else if (bot2 === 'scissors') 
    {
        game.loss++;
    }
} 
else if (bot1 === 'rock')
{
    if (bot2 === 'scissors')
    {
        game.win++;
    }
    else if (bot2 === 'paper')
    {
        game.loss++;
    }
    
}
else 
{
    if (bot2 === 'paper')
    {
        game.win++;
    }
    else if (bot2 === 'rock')
    {
        game.loss++;
    }
}
console.log(bot1);
console.log(bot2);
console.log(game);

/**
 * 
 */
var results = "";

if (game.win === 1)
{
    results += "bot1";
    results += " beats ";
    results += "bot2.";
}
else if (game.loss === 1)
{
    results += "bot2";
    results += " beats ";
    results += "bot1."
}
else
{
    results += "It is a tie."
}
console.log(results);
