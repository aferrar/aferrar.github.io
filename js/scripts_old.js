// (function($) {
//     $("html").removeClass("no-js");
//     $("header a").click(function(e) {
//         if (!$(this).hasClass("no-scroll")) {
//             e.preventDefault();
//             var t = $(this).attr("href");
//             var n = $(t).offset().top;
//             $("html, body").animate({
//                 scrollTop: n + "px"
//             }, Math.abs(window.pageYOffset - $(t).offset().top) / 1);
//             if ($("header").hasClass("active")) {
//                 $("header, body").removeClass("active");
//             }
//         }
//     });
//     $("#to-top").click(function() {
//         $("html, body").animate({
//             scrollTop: 0
//         }, 500);
//     });
//     $("#lead-down span").click(function() {
//         var e = $("#lead").next().offset().top;
//         $("html, body").animate({
//             scrollTop: e + "px"
//         }, 500);
//     });
//     $("#experience-timeline").each(function() {
//         $this = $(this);
//         $userContent = $this.children("div");
//         $userContent.each(function() {
//             $(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
//         });
//         $this.find(".vtimeline-point").each(function() {
//             $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
//         });
//         $this.find(".vtimeline-content").each(function() {
//             var e = $(this).data("date");
//             if (e) {
//                 $(this).parent().prepend('<span class="vtimeline-date">' + e + "</span>");
//             }
//         });
//     });
//     $("#mobile-menu-open").click(function() {
//         $("header, body").addClass("active");
//     });
//     $("#mobile-menu-close").click(function() {
//         $("header, body").removeClass("active");
//     });
//     $("#view-more-projects").click(function(e) {
//         e.preventDefault();
//         $(this).fadeOut(300, function() {
//             $("#more-projects").fadeIn(300);
//         });
//     });
//     var count = 1;
//     var wordArray = [" Analysis", "Asset Management", "Automation", " Design", " Web Development"];
//     setInterval(function() {
//         $("#word").fadeTo(750, 0, function() {
//             $(this).text(wordArray[count % wordArray.length]).fadeTo(750, 1);
//             count++;
//         });
//     }, 3000);
// })(jQuery);
