# WebToolEasyTechnics



## Include here the special techniques you use when cording (Ex:Designning/developing)

* add audio speech
```sh
  const speak = (msg) =>{
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoice();
    speechSynthesis.speak(sp);
};
speak('My name is Inigo montoya,'+'you killed my father,'+'prepare to die!'); 
  ```
  * (code by Nick Foscarini)
