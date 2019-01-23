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
    });

    const tweetData = {
        "user": {
          "name": "Newton",
          "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
          },
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
      }
     function createTweetElement() {
        var $html = 
            '<article class="article-tweets">' +
                '<header class="tweet-header">' +
                    '<div class="tweet-image-name-container">' +
                        '<img class="tweet-image" src="https://placekitten.com/50/50"></img>' +
                        '<h2 class="tweet-name">Trent Ingram</h2>' +
                    '</div>' +
                    '<div class="tweet-handle-container">' +
                        '<p class="handle">@tingram</p>' +   
                    '</div>' +
                '</header>' +
            '<section class="tweet-text">' +
                '<p class="tweet-text-area">Some good ol fake news...</p>' +
            '</section>' +
            '<footer class="tweet-footer-container">' +
                '<div class="tweet-footer">' +
                    '<p class="tweet-footer-text">10 days ago</p>' +
                '</div>'
                '<div class="tweet-icons">' +
                    '<i class="fas fa-flag"></i>' +
                    '<i class="fas fa-retweet"></i>' +
                    '<i class="fas fa-heart"></i>' +
                '</div>' +
            '</footer>' +
            '</article>'

    return $html;
        
     } 
      var $tweet = createTweetElement(tweetData);
      
      // Test / driver code (temporary)
      console.log($tweet); // to see what it looks like
      $('.tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


  });

