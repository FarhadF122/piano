let mykeys = document.querySelectorAll(".key");

for (let x = 0; x < mykeys.length; x++ ) {
    mykeys[x].addEventListener('click', function() {
        sndPlay(mykeys[x].innerHTML.toLowerCase());
    })
}
//

document.addEventListener('keydown', function(btn) {
    sndPlay(btn.key.toLowerCase());
    let pressed_key = btn.key.toLowerCase();
    //
    for (let x = 0; x < mykeys.length; x++) {
        mykeys[x].classList.remove('activated');
    }

    for (let x = 0; x < mykeys.length; x++) {
        if (pressed_key == mykeys[x].innerHTML.toLowerCase()) {
            mykeys[x].classList.add('activated');
        }
    }

})

function sndPlay(key) {
    switch (key) {
        case "c":
            var snd = new Audio ('doremi/do.mp3');
            snd.play();
            break;
        case "d":
            var snd = new Audio ('doremi/re.mp3');
            snd.play();
            break;
        case "e":
            var snd = new Audio ('doremi/mi.mp3');
            snd.play();
            break;
        case "f":
            var snd = new Audio ('doremi/fa.mp3');
            snd.play();
            break;
        case "g":
            var snd = new Audio ('doremi/sol.mp3');
            snd.play();
            break;
        case "a":
            var snd = new Audio ('doremi/la.mp3');
            snd.play();
            break;
        case "b":
            var snd = new Audio ('doremi/ti.mp3');
            snd.play();
            break;
        case "k":
            var snd = new Audio ('doremi/doh.mp3');
            snd.play();
            break;
        default:
            console.log(key);
        }
}