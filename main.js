// 1ère partie

let alertMsg = setTimeout(function(){alert("Hello world")},3000);

function stopAlert() {
    clearTimeout(alertMsg);
}


// 2ème partie

let afficher_chronotext = document.querySelector("#afficher_chronotext");

let inputChronotext = document.querySelector("#inputChronotext");

afficher_chronotext.addEventListener("click", () => {
    
    for (let i = 0; i < 7; i++) {
        setTimeout(() => {
            inputChronotext.value = i+"s";
        }, i*1000)
    }
});


// 3ème partie

let nvlFenetre = document.querySelector("#nvlFenetre");

nvlFenetre.addEventListener("click", () => {

    let openWindow = window.open("#");
    // https://www.google.com/ ne fonctionne pas ?

    setTimeout(() => {
        openWindow.close();
    }, 3000)

})


// 4ème partie

