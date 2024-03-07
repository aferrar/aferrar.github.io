(function($) {

    // Hide #lead-content for the first 12 seconds and then fade in
    setInterval(function() {
        $('#lead-content').hide();
        setTimeout(function() {
            $('#lead-content').fadeIn(3000); // 3000ms for a smooth fade in effect
        }, 13000);
    }, 300000); // 300000ms or 5 minutes for repeating the hide and fade in effect

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
