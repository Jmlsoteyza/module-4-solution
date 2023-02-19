(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = {
      speak: function (name) {
        console.log(speakWord + " " + name);
      }
    };
    window.helloSpeaker = helloSpeaker;
  })(window);
  
  (function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {
      speak: function (name) {
        console.log(speakWord + " " + name);
      }
    };
    window.byeSpeaker = byeSpeaker;
  })(window);
  
  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (const i in names) {
    const firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  