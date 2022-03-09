var totalButtons = document.querySelectorAll(".button").length;

for (let i = 0; i < totalButtons; i++){
    document.querySelectorAll(".button")[i]
    .addEventListener("click", function() {
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
});

function sound(key){
    switch(key){
        case "w": 
            var soundW = new Audio("Sounds/SoundsAudio_boom.wav");
            soundW.play();
            break;
        
        case "a": 
            var soundA = new Audio("Sounds/SoundsAudio_clap.wav");
            soundA.play();
            break;

        case "s": 
            var soundS = new Audio("Sounds/SoundsAudio_hihat.wav");
            soundS.play();
            break;

        case "d": 
            var soundD = new Audio("Sounds/SoundsAudio_kick.wav");
            soundD.play();
            break;
        
        case "j": 
            var soundJ = new Audio("Sounds/SoundsAudio_openhat.wav");
            soundJ.play();
            break;

        case "k": 
            var soundK = new Audio("Sounds/SoundsAudio_ride.wav");
            soundK.play();
            break;

        case "l": 
            var soundL = new Audio("Sounds/SoundsAudio_snare.wav");
            soundL.play();
            break;

        default: console.log(key);
    }
}


function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }