const speak = (msg) =>{
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoice();
    speechSynthesis.speak(sp);
};
speak('My name is Inigo montoya,'+'you killed my father,'+'prepare to die!');