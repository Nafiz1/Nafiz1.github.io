const carouselText = [
    { text: "Hi, my name's Nafiz!" },
    { text: "I like to program." },
    { text: "My favourite colour is red.", color: "red" },
    { text: "I'm studying at Uwindsor." },
];

$(document).ready(async function () {
    carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
        $(eleRef).css("color", "white");
        if (carouselList[i].color == "red") {
            $(eleRef).css("color", "#e27689");
        }
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
            i = 0;
        }
    }
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
