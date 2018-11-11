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

function attack(hit){
    total = total + hit;
    $('#total-score').text(total);
    if (total === targetNumber){
        good();
    } else if (total > targetNumber){
        bad();
    }
}
//User Input
$('.goku').on('click', function(){
    attack(gokuNumber);
});

$('.vegeta').on('click', function(){
   attack(vegetaNumber);
});
$('.krillin').on('click', function(){
    attack(krillinNumber);
});
$('.piccolo').on('click', function(){
    attack(piccoloNumber);
});


   
