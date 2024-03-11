(function($) {

    $("html").removeClass("no-js");
    $("header a").click(function(e) {
        if (!$(this).hasClass("no-scroll")) {
            e.preventDefault();
            var target = $(this).attr("href");
            var targetOffset = $(target).offset().top;
            $("html, body").animate({
                scrollTop: targetOffset + "px"
            }, Math.abs(window.pageYOffset - $(target).offset().top) / 1);
            if ($("header").hasClass("active")) {
                $("header, body").removeClass("active");
            }
        }
    });
    $("#to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    $("#lead-down span").click(function() {
        var nextOffset = $("#lead").next().offset().top;
        $("html, body").animate({
            scrollTop: nextOffset + "px"
        }, 500);
    });
    $("#experience-timeline").each(function() {
        var $this = $(this);
        var $userContent = $this.children("div");
        $userContent.each(function() {
            $(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });
        $this.find(".vtimeline-point").each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });
        $this.find(".vtimeline-content").each(function() {
            var date = $(this).data("date");
            if (date) {
                $(this).parent().prepend('<span class="vtimeline-date">' + date + "</span>");
            }
        });
    });
    $("#mobile-menu-open").click(function() {
        $("header, body").addClass("active");
    });
    $("#mobile-menu-close").click(function() {
        $("header, body").removeClass("active");
    });
    $("#view-more-projects").click(function(e) {
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $("#more-projects").fadeIn(300);
        });
    });
    
    // Display splash text based on video timestamp to avoid text overlap
    
    const video = document.getElementById('splashvid');
    let wordSwapInterval;
    let hasFadedOut = false; // Flag to track if the fade out has been triggered

    video.addEventListener('timeupdate', function() {
        let currentTime = video.currentTime;
        if ((currentTime >= 0 && currentTime <= 14) || (currentTime >= 285 && currentTime <= 300)) {
            if (!hasFadedOut) { // Check if fade out has not been triggered yet
                $('#lead-content').stop().animate({opacity: 0}, 500);
                clearInterval(wordSwapInterval); // Stop word_swap from running
                wordSwapInterval = null; // Reset the interval
                hasFadedOut = true; // Set the flag to true after fade out
            }
        } else {
            if (hasFadedOut) { // If it has faded out, reset the flag
                hasFadedOut = false;
            }
            $('#lead-content').stop().animate({opacity: 1}, 500);
            if (!wordSwapInterval) { // Check if interval is not already set
                wordSwapInterval = setInterval(wordSwap, 6000); // Start word_swap if it's not already running
            }
        }
    });
    
    // Alternate descriptor text every 6 seconds after 14 seconds from initial page load
    let wordCount = 0;
    let colorCount = 0;

    let wordArray = [
        { word: "Asset Management", font: "PT Serif, serif" }, 
        { word: "Applications", font: "Impact, sans-serif" }, 
        { word: "Data Engineering", font: "Courier New, monospace" }, 
        { word: "Design", font: "Futura, sans-serif" },
        { word: "Systems Consulting", font: "Montserrat Subrayada, sans-serif" },
        { word: "Analytics", font: "Lavanderia, monospace" }

    ];

    let colors = ["green", "yellow", "pink", "red"];

    function wordSwap() {
        $("#word").fadeTo(2000, 0, function() {
            $(this).text(wordArray[wordCount % wordArray.length].word).fadeTo(2000, 1);
            $("#word").css("color", colors[colorCount % colors.length]);
            $("#word").css("font-family", wordArray[wordCount % wordArray.length].font);
            wordCount++;
            colorCount++;
        });
    };
    
})(jQuery);
