const btn = document.querySelector('.talk');
const startAssistant = document.querySelector('.letsGo');
const content = document.querySelector('.content');

const greetings = ['How are You?', 'Welcome!', 'How May I Help You?']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('listening...');
    speechEnd = false;   

};
recognition.onspeechend = function () {
    recognition.stop();
  // loopRecordings();
  speechEnd = true;

  setTimeout(function() {
    recognition.start();
  }, 3000);
  speechEnd = true;

}

recognition.onresult = function(event) {

    const current = event.resultIndex;
    const transcript = event.results[0][0].transcript;
    content.textContent = (transcript);
    readOutLoud( transcript);

}

//add the listener to the btn
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    speech.text = ( message);

    speech.voice = voices[6];
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if(message.includes("videos")) {

        speech.text = 'I have opened Youtube for your visuals';
        window.open('https://www.youtube.com/@MagentaXVII/videos');

}
    if(message.includes("videos")) {

        speech.text = 'I have opened Youtube for your visuals';
        window.open('https://www.youtube.com/@MagentaXVII/videos');

}
if(message.includes("music")) {

    speech.text = 'Apple Music, Opened';
    window.open('https://music.apple.com/za/artist/magentaxvii/1758257740');

}

    if(message.includes("hello")) {

        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
         speech.text = finalText;
}

    if(message.includes("what is your name")) {

     speech.text = "My name is Sem,  Designed By Magenta for your assistance to navigate through this website. you can click the help button for more information.";
}
    else if (message.includes("time")) {
        speech.text = ' the time is,'+new Date().getHours() + " " + new Date().getMinutes();
}

    window.speechSynthesis.speak(speech);

    
}


