var sentence = document.getElementsByTagName('p')[0].innerHTML;
var userSentence = "";

function sentenceCheck() {
    let theText = document.getElementById('userSentence').value;

    if (theText == sentence) {
        console.log("yes");
    }
    else {
        console.log("no");
    }

    setTimeout(sentenceCheck, 3);
}

sentenceCheck();