// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selector = document.getElementById("horn-select");
  var values = selector.options[selector.selectedIndex].value;
  var audio = document.querySelector("audio");
  var play_button = document.querySelector("button");
  var volume = document.getElementById("volume");
  audio.volume = volume.value / 100;
  const confetti = new JSConfetti();

  volume.addEventListener('change', function() {
    audio.volume = volume.value / 100;
    let imageElement = document.querySelectorAll("img");
    var value = Number(volume.value);
    
    if (value == 0) {
      imageElement[1].src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      imageElement[1].src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      imageElement[1].src = "assets/icons/volume-level-2.svg";
    } else {
      imageElement[1].src = "assets/icons/volume-level-3.svg";
    }
  });

  selector.addEventListener('change', function() {
    let imageElement = document.querySelector("img");
    values = selector.options[selector.selectedIndex].value;
    switch(values) {
      case "air-horn":
        imageElement.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        imageElement.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        imageElement.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        imageElement.src = "assets/images/no-image.png";
        audio.src = "";
    }
  });

  play_button.addEventListener('click', function() {
    audio.play();
    if (values == "party-horn") {
      confetti.addConfetti();
    }
  });
}