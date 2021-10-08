const speak = (msg) =>{
    const text = new SpeechSynthesisUtterance(msg);
    [text.voice] = speechSynthesis.getVoice();
    speechSynthesis.speak(text);
};
speak('My name is Inigo montoya, you killed my father, prepare to die!');
