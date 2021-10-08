const speak = (message) =>{
    const text = new SpeechSynthesisUtterance(message);
    [text.voice] = speechSynthesis.getVoice();
    speechSynthesis.speak(text);
};
speak('My name is Inigo montoya, you killed my father, prepare to die!');
