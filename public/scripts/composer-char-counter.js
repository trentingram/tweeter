$(document).ready(function() {

    $('textarea[name=text]').on('keyup', function(event) {
        var elem = $( this ).val().length;
        var count = 140 - elem;
        $( '.counter' ).html(count); 
        if(count < 0) {
            $( '.counter' ).addClass('over-limit');
        }
        if(count >= 0) {
            $( '.counter' ).removeClass('over-limit');
        }
    });
    $('.tweets').on('mouseenter', function(e) {
        console.log(e);
        $('.tweet-icons').toggle()
    })
        $('.tweets').on('mouseleave', function(e) {
        console.log(e);
        $('.tweet-icons').toggle()
    })



  });

