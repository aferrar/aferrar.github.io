(function($) {

    // Display splash text based on video timestamp to avoid text overlap
    
    const video = document.getElementById('splashvid');

    video.addEventListener('timeupdate', function() {
        let currentTime = video.currentTime; // This gives you the current time of the video in seconds

        if ((currentTime >= 0 && currentTime <= 14) || (currentTime >= 285 && currentTime <= 300)) {
            $('#lead-content').css('opacity', '0');
        } else {
            $('#lead-content').animate({opacity: 1}, 3000);
            // $('#word').animate({opacity: 1}, 3000);
             // 3000ms for a smooth fade in effect
        }
    });
    
    // Alternate descriptor text every 6 seconds after 14 seconds from initial page load
    let wordCount = 0;
    let colorCount = 0;

    let wordArray = [
        { word: "Analytics", font: "font-family: Monaco, monospace" },
        { word: "Asset Management", font: "Georgia, serif" }, 
        { word: "Applications", font: "Impact, sans-serif" }, 
        { word: "Consulting", font: "Palatino, serif" }, 
        { word: "Data Engineering", font: "Courier New, monospace" }, 
        { word: "Design", font: "Futura, sans-serif" }, 
        { word: "Systems Administration", font: "Garamond, serif" }
    ];

    let colors = ["white", "green", "yellow", "pink", "purple", "red"];

    function word_swap() {
        $("#word").fadeTo(2000, 0, function() {
            $(this).text(wordArray[wordCount].word).fadeTo(2000, 1);
            $("#word").css("color", colors[colorCount]);
            $("#word").css("font-family", wordArray[wordCount].font);
            wordCount++;
            colorCount++;
            if (wordCount >= wordArray.length) {
                wordCount = 0; // Reset count when it exceeds the length of wordArray
            }
            if (colorCount >= colors.length) {
                colorCount = 0; // Reset count when it exceeds the length of wordArray
            }
        });
    };

    // Correct usage of setTimeout to delay the start of the setInterval
    setTimeout(function() {
        setInterval(word_swap, 4000);
    }, 14000);

})(jQuery);
