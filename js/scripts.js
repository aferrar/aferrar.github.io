(function($) {
    const removeNoJsClass = () => $("html").removeClass("no-js");

    const handleHeaderClick = (e) => {
        if (!$(e.currentTarget).hasClass("no-scroll")) {
            e.preventDefault();
            const target = $(e.currentTarget).attr("href");
            const targetOffset = $(target).offset().top;
            $("html, body").animate({
                scrollTop: targetOffset + "px"
            }, Math.abs(window.pageYOffset - $(target).offset().top) / 1);
            if ($("header").hasClass("active")) {
                $("header, body").removeClass("active");
            }
        }
    };

    const scrollToTop = () => {
        $("html, body").animate({ scrollTop: 0 }, 500);
    };

    const scrollToNextSection = () => {
        const nextOffset = $("#lead").next().offset().top;
        $("html, body").animate({ scrollTop: nextOffset + "px" }, 500);
    };

    const setupExperienceTimeline = () => {
        $("#experience-timeline").each(function() {
            const $this = $(this);
            const $userContent = $this.children("div");
            $userContent.each(function() {
                $(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            });
            $this.find(".vtimeline-point").each(function() {
                $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
            });
            $this.find(".vtimeline-content").each(function() {
                const date = $(this).data("date");
                if (date) {
                    $(this).parent().prepend('<span class="vtimeline-date">' + date + "</span>");
                }
            });
        });
    };

    const toggleMobileMenu = (isOpen) => {
        $("header, body").toggleClass("active", isOpen);
    };

    const viewMoreProjects = (e) => {
        e.preventDefault();
        $(e.currentTarget).fadeOut(300, function() {
            $("#more-projects").fadeIn(300);
        });
    };

    const handleVideoTimeUpdate = () => {
        const video = document.getElementById('splashvid');
        let wordSwapInterval;
        let hasFadedOut = false;

        video.addEventListener('timeupdate', function() {
            const currentTime = video.currentTime;
            if ((currentTime >= 0 && currentTime <= 14) || (currentTime >= 285 && currentTime <= 300)) {
                if (!hasFadedOut) {
                    $('#lead-content').stop().animate({ opacity: 0 }, 500);
                    clearInterval(wordSwapInterval);
                    wordSwapInterval = null;
                    hasFadedOut = true;
                }
            } else {
                if (hasFadedOut) {
                    hasFadedOut = false;
                }
                $('#lead-content').stop().animate({ opacity: 1 }, 500);
                if (!wordSwapInterval) {
                    wordSwapInterval = setInterval(wordSwap, 6000);
                }
            }
        });
    };

    const wordArray = [
        { word: "Asset Management", font: "PT Serif, serif" },
        { word: "Applications", font: "Impact, sans-serif" },
        { word: "Data Engineering", font: "Courier New, monospace" },
        { word: "Design", font: "Futura, sans-serif" },
        { word: "Systems Consulting", font: "Montserrat Subrayada, sans-serif" },
        { word: "Analytics", font: "Lavanderia, monospace" }
    ];

    const colors = ["green", "yellow", "pink", "red"];
    let wordCount = 0;
    let colorCount = 0;

    const wordSwap = () => {
        $("#word").fadeTo(2000, 0, function() {
            $(this).text(wordArray[wordCount % wordArray.length].word).fadeTo(2000, 1);
            $("#word").css("color", colors[colorCount % colors.length]);
            $("#word").css("font-family", wordArray[wordCount % wordArray.length].font);
            wordCount++;
            colorCount++;
        });
    };

    $(document).ready(function() {
        removeNoJsClass();
        $("header a").click(handleHeaderClick);
        $("#to-top").click(scrollToTop);
        $("#lead-down span").click(scrollToNextSection);
        setupExperienceTimeline();
        $("#mobile-menu-open").click(() => toggleMobileMenu(true));
        $("#mobile-menu-close").click(() => toggleMobileMenu(false));
        $("#view-more-projects").click(viewMoreProjects);
        handleVideoTimeUpdate();
    });
})(jQuery);
