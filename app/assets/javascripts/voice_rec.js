if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your Browser does not support the Speech API");
} else {
    finalTranscript = '';
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;         // keep processing input until stopped
    recognition.interimResults = true;     // show interim results
    recognition.lang = 'en-GB';           // specify the language

    recognition.onstart = function() {
        recognizing = true;
        console.log("Recoginition started");
    };

    recognition.onresult = function(event) {
        var interimTranscript = '';

        // Assemble the transcript from the array of results
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        console.log("interim:  " + interimTranscript);
        console.log("final:    " + finalTranscript);
        console.log("resultIndex: " + event.resultIndex);
    };
    recognition.start();
}