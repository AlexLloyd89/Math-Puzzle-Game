//Set targetNumber to a random number between 19-120
var targetNumber = Math.floor(Math.random()*101+19);
//display target number at set ID
$("#number-to-guess").text(targetNumber);

//Set random number for each character. RNG set to power level
var gokuNumber = Math.floor(Math.random()*(12 - 7 + 1)) + 7;
var vegetaNumber = Math.floor(Math.random()*(10 - 5 + 1)) + 5;
var krillinNumber = Math.floor(Math.random()*3) + 1;
var piccoloNumber = Math.floor(Math.random()*(8 - 3 + 1)) + 3;

var total = 0;
var wins = 0;
var losses = 0;

$('#total-wins').text(wins);
$('#total-losses').text(losses);

//Reset, wins and losses
function resetGame(){
    targetNumber = Math.floor(Math.random()*101+19);
    $("#number-to-guess").text(targetNumber);
    gokuNumber = Math.floor(Math.random()*(12 - 7 + 1)) + 7;
    vegetaNumber = Math.floor(Math.random()*(10 - 5 + 1)) + 5;
    krillinNumber = Math.floor(Math.random()*3) + 1;
    piccoloNumber = Math.floor(Math.random()*(8 - 3 + 1)) + 3;
    total = 0;
    $('#total-score').text(total);
};

function good (){
    wins++;
    $('#total-wins').text(wins);
    resetGame();
};

function bad (){
    losses++;
    $('#total-losses').text(losses);
    resetGame()
};

//User Input
$('.goku').on('click', function(){
    total = total + gokuNumber;
    $('#total-score').text(total);
    if (total === targetNumber){
        good();
    } else if (total > targetNumber){
        bad();
    }
});
$('.vegeta').on('click', function(){
    total = total + vegetaNumber;
    $('#total-score').text(total);
    if (total === targetNumber){
        good();
    } else if (total > targetNumber){
        bad();
    }
});
$('.krillin').on('click', function(){
    total = total + krillinNumber;
    $('#total-score').text(total);
    if (total === targetNumber){
        good();
    } else if (total > targetNumber){
        bad();
    }
});
$('.piccolo').on('click', function(){
    total = total + piccoloNumber;
    $('#total-score').text(total);
    if (total === targetNumber){
        good();
    } else if (total > targetNumber){
        bad();
    }
});


   
