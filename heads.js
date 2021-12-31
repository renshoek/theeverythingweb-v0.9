var heads = 0;
var tails = 0;

function click() {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        flip("heads");
    } else {
        flip("tails");
    }

    var things = ['Rock', 'Paper', 'Scissors'];
    var thing = things[Math.floor(Math.random() * things.length)];
    var thing2 = things[Math.floor(Math.random() * things.length)];
    document.getElementById("RPS").innerHTML = (thing + ' VS ' + thing2);

};

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};

setInterval(click, 1100);
