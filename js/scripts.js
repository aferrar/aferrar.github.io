(function($) {

    $("html").removeClass("no-js");
    $("header a").click(function(e) {
        if (!$(this).hasClass("no-scroll")) {
            e.preventDefault();
            var t = $(this).attr("href");
            var n = $(t).offset().top;
            $("html, body").animate({
                scrollTop: n + "px"
            }, Math.abs(window.pageYOffset - $(t).offset().top) / 1);
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
        var e = $("#lead").next().offset().top;
        $("html, body").animate({
            scrollTop: e + "px"
        }, 500);
    });
    $("#experience-timeline").each(function() {
        $this = $(this);
        $userContent = $this.children("div");
        $userContent.each(function() {
            $(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });
        $this.find(".vtimeline-point").each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });
        $this.find(".vtimeline-content").each(function() {
            var e = $(this).data("date");
            if (e) {
                $(this).parent().prepend('<span class="vtimeline-date">' + e + "</span>");
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
        { word: "Analytics", font: "Monaco, monospace" },
        { word: "Asset Management", font: "Georgia, serif" }, 
        { word: "Applications", font: "Impact, sans-serif" }, 
        { word: "Data Engineering", font: "Courier New, monospace" }, 
        { word: "Design", font: "Futura, sans-serif" },
        { word: "Systems Consulting", font: "Palatino, serif" }, 

    ];

    let colors = ["white", "green", "yellow", "pink", "red"];

    function word_swap() {
        $("#word").fadeTo(2000, 0, function() {
            $(this).text(wordArray[wordCount % wordArray.length].word).fadeTo(2000, 1);
            $("#word").css("color", colors[colorCount % colors.length]);
            $("#word").css("font-family", wordArray[wordCount % wordArray.length].font);
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
    }, 10000);

})(jQuery);
