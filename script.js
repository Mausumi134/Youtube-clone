//input search
function searchOnYouTube() {
    var searchQuery = document.getElementById("searchInput").value;

    searchQuery = searchQuery.replace(/\s/g, "+");

    window.location.href = "https://www.youtube.com/results?search_query=" + searchQuery;
}


// Mic search 
// Function to start voice search
function startVoiceSearch() {
    // Request microphone access
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            // Microphone access granted
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.start();

            // Event listener for speech recognition result
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                document.getElementById('searchInput').value = transcript;
            };

            // Event listener for when speech recognition ends
            recognition.onend = function() {
                // Trigger search when speech ends
                searchOnYouTube();
                recognition.stop();
            };
        })
        .catch(function(err) {
            // Microphone access denied or not available
            alert.error('Error accessing microphone:', err);
            alert('Error accessing microphone. Please allow microphone access to use voice search.');
        });
}

// Function to handle microphone access request
function requestMicrophoneAccess() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            // Microphone access granted
            console.log('Microphone access granted');
        })
        .catch(function(err) {
            // Microphone access denied or not available
            console.error('Error accessing microphone:', err);
            alert('Error accessing microphone. Please allow microphone access to use voice search.');
        });
}

// API 
       
        var apiKey = 'AIzaSyAzxa9GRir37WmyTRX5ltaveGn9GuYmDbA';
 
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
        function onYouTubeIframeAPIReady() {
            var player=document.getElementsByTagName('script');
            var player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'VIDEO_ID',
                playerVars: {
                    'autoplay': 1,
                    'controls': 0
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            target.playVideo();
        } 
