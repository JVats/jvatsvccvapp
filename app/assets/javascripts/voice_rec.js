if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your Browser does not support the Speech API");
} else {
    var recognition;
    finalTranscript = '';

    recognition = new webkitSpeechRecognition();

    recognition.continuous = false;         // keep processing input until stopped
    recognition.interimResults = true;     // show interim results
    recognition.lang = 'en-GB';

    $( document ).ready(function() {
        recognition.start();
    });

    recognition.onstart = function() {
        console.log("Recoginition started");
    };

    recognition.onresult = function(event) {
        var interimTranscript = '';

        // Assemble the transcript from the array of results
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
                checkSaid(finalTranscript);
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        console.log("interim:  " + interimTranscript);
        console.log("final:    " + finalTranscript);
        console.log("resultIndex: " + event.resultIndex);
        //recognition.stop();
    };

    recognition.onend = function() {
        console.log("Recognition ended and restarted!");
        recognition.start();
    }
}

function checkSaid(sentence) {
    if (sentence.indexOf("education") > -1)
    alert("Bazinga!");
}