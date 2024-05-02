// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voices = [];
  var button = document.querySelector("button");
  const voiceSelect = document.getElementById("voice-select");
  window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  };

  button.addEventListener('click', function() {
    var textInput = document.getElementById("text-to-speak");
    var speech = new SpeechSynthesisUtterance();
    speech.text = textInput.value;
    var voice = voices.find(function(voice) {return `${voice.name} (${voice.lang})` == voiceSelect.value})
    let face = document.querySelector("img");
    speech.voice = voice;

    speech.onstart = function() {
      face.src = "assets/images/smiling-open.png";
    };

    speech.onend = function() {
      face.src = "assets/images/smiling.png";
    };

    window.speechSynthesis.speak(speech);
  })
}