$(document).ready(function() {

    $('textarea[name=text]').on('keyup', function(event) {
        var elem = $( this ).val().length;
        $( '.counter' ).html(elem)
        console.log(len, count);
    });
  });

