(function($) {

    // Hide #lead-content for the first 12 seconds and then fade in
    function hideAndFadeIn() {
        $('#lead-content').hide();
        setTimeout(function() {
            $('#lead-content').fadeIn(3000); // 3000ms for a smooth fade in effect
        }, 13000);
    }

    // Execute on load
    hideAndFadeIn();

    // Execute every 4 minutes and 45 seconds
    setInterval(function() {
        hideAndFadeIn();
        setTimeout(hideAndFadeIn, 15); // 285000ms or 4 minutes and 45 seconds for repeating the hide and fade in effect
    }, 285000);
    // Alternate descriptor text every 5 seconds
    count = 1;
    wordArray = [" Analytics", "Asset Management", "Applications", "Big Data ETLs", "Consulting", "Dashboards", "Design"];
    function word_swap() {
        $("#word").fadeTo(750, 0, function() {
            $(this).text(wordArray[count % wordArray.length]).fadeTo(750, 1);
            count++;
        });
    };
    
    setInterval(word_swap, 3000);

})(jQuery);
