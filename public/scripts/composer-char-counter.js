// Known bugs/gaps
// hover on existing tweets is showing icons on all tweets, not just on the tweet that is hovered
// clicking on button exposes text area for new tweet, a second click on that button should hide the section

$(document)
  .ready(function() {

    // keeps track of text length for incrementing/decrementing character counter
    $('textarea[name=text]')
      .on('keyup', function(event) {
        var elem = $(this)
          .val()
          .length;
        var count = 140 - elem;
        $('.counter')
          .html(count);
        if (count < 0) {
          // adds or removes font color if over character limit
          $('.counter')
            .addClass('over-limit');
        }
        if (count >= 0) {
          $('.counter')
            .removeClass('over-limit');
        }
      });
    
    // adds icons to tweets on hover
    $('.tweets')
      .on('mouseenter', function(e) {

        $('.tweet-icons')
          .toggle()
      })
    $('.tweets')
      .on('mouseleave', function(e) {

        $('.tweet-icons')
          .toggle()
      });

    // listens for submit for sending tweet via ajax POST
    $('.tweet-submit')
      .on('submit', function(e) {

        // prevent default submit  
        e.preventDefault();

        // caputures text in textarea
        var theText = $('textarea[name=text]')
          .val();
        let $serializedData = $(this)
          .serialize();

        // shows error message if textarea is blank 
        if (theText.length === 0) {
          $('.error-message')
            .slideDown()
            .text('There is nothing to tweet about.')

        // show error message if there are too many characters to submit
        } else if (theText.length > 140) {
          $('.error-message')
            .slideDown()
            .text('There is nothing to tweet about.')

        // sends ajax POST request
        } else {
          $.ajax('/tweets/', {
            method: 'POST',
            data: $serializedData,
            success: function() {

              // removes error message if it was active
              $('.error-message')
                .slideUp()

              // removes all tweets in order to re-render tweets with new tweet prepended
              $('.tweets')
                .empty();

              // send new GET request to fetch all tweets with new tweet included
              $.get('/tweets/')
                .then(jsonData => renderTweets(jsonData))

              // resets textarea 
              $('textarea[name=text]')
                .val('');
              
              // resets counter
              $('.counter')
                .html(0);
            }
          })
        }
      })

    // listen for clicks on button in nav
    $('.nav-button')
      .on('click', function() {

        $('.new-tweet')
          .slideDown("slow");
        $('textarea[name=text]')
          .focus();
      })

  });