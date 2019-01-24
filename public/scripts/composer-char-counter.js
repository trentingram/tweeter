// fix alert when text is not present.
// icons are broken.  Need to return to fix icons. Consider export/import file.
// convert createdAt to days ago...
// add margin or padding between tweets.
// fix hover, hover should only work on individual tweets.
// fix scroll issue.


$(document).ready(function() {

$('textarea[name=text]').on('keyup', function(event) {
    var elem = $(this).val().length;
    var count = 140 - elem;
    $('.counter').html(count);
    if (count < 0) {
        $('.counter').addClass('over-limit');
    }
    if (count >= 0) {
        $('.counter').removeClass('over-limit');
    }
});
$('.tweets').on('mouseenter', function(e) {

    $('.tweet-icons').toggle()
})
$('.tweets').on('mouseleave', function(e) {

    $('.tweet-icons').toggle()
});



$('.tweet-submit').on('submit', function(e) {
    e.preventDefault();
    var theText = $('textarea[name=text]').val();
    let $serializedData = $(this).serialize();
    console.log($serializedData, 'theText: ',theText);

    if(theText.length === 0) { 
        alert('There is nothing to tweet about.') 
    } else if(theText.length > 140) { 
        alert('Your tweet is too verbose.')
    } else {
    $.ajax('/tweets/', {
        method: 'POST',
        data: $serializedData,
        success: function () {
            $('.tweets').empty();
            $.get('/tweets/')
            .then(jsonData => renderTweets(jsonData))
            console.log("post success")
        }
        })
    }
})
// listen for clicks on button in nav
$('.nav-button').on('click', function() {
    console.log("listening to button.")
    $('.new-tweet').slideToggle("slow");
    $('.new-tweet').slideToggle("slow");
    $('textarea[name=text]').attr('enabled', true);
})

});