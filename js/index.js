


function newQuote() {
    var randomNumber = Math.floor(Math.random()*10);
    var quotesArray = [
    "<p>“A thing is not necessarily true because a man dies for it.”</p><p>― Oscar Wilde</p>",
    "<p>“Be yourself; everyone else is already taken.”</p><p>― Oscar Wilde</p>",
    "<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p><p>― Albert Einstein</p>",
    "<p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p><p>― Bernard M. Baruch</p>",
    "<p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p><p>― J.K. Rowling</p>",
    "<p>“A friend is someone who knows all about you and still loves you.”</p><p>― Elbert Hubbard</p>",
    "<p>“To live is the rarest thing in the world. Most people exist, that is all.”</p><p>― Oscar Wilde</p>",
    "<p>“Always forgive your enemies; nothing annoys them so much.”</p><p>― Oscar Wilde</p>",
    "<p>“It is better to be hated for what you are than to be loved for what you are not.”</p><p>― Andre Gide</p>",
    "<p>“Friendship ... is born at the moment when one man says to another, What! You too? I thought that no one but myself . . .”</p><p>― C.S. Lewis</p>"];
    var randomQuote = quotesArray[randomNumber];
    document.getElementById("quote-new").innerHTML = randomQuote;
}

document.getElementById("quote-btn").onclick = newQuote;


// console.log(randomQuote);