/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function numConverter(num) {
var d1 = num;
var d2 = new Date().getTime();
var microSecondsDiff = Math.abs(d1 - d2 );
var daysDiff = Math.floor(microSecondsDiff/(1000 * 60 * 60  * 24));

return daysDiff
}


function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  
  let flag_icon = '<i class="fas fa-flag"></i>'
  let retweet_icon = '<i class="fas fa-retweet"></i>'
  let heart_icon = '<i class="fas fa-heart"></i>'
  
  
//   const safeHTML = `<p>${escape(textFromUser)}</p>`;
function createTweetElement(data) {
    
    var days = numConverter(data.created_at)
    var $html =
        '<article class="article-tweets">' +
        '<header class="tweet-header">' +
        '<div class="tweet-image-name-container">' +
        `<img class="tweet-image" src=${escape(data.user.avatars.small)}></img>` +
        `<h2 class="tweet-name">${escape(data.user.name)}</h2>` +
        '</div>' +
        '<div class="tweet-handle-container">' +
        `<p class="handle">${escape(data.user.handle)}</p>` +
        '</div>' +
        '</header>' +
        '<section class="tweet-text">' +
        `<p class="tweet-text-area">${escape(data.content.text)}</p>` +
        '</section>' +
        '<footer class="tweet-footer-container">' +
        '<div class="tweet-footer">' +
        `<p class="tweet-footer-text">${escape(days)} days ago.</p>` +
        '</div>' +
    '<div class="tweet-icons">' +
    `${flag_icon}` +
    `${retweet_icon}` +
    `${heart_icon}` +
    '</div>' +
    '</footer>' +
    '</article>'

    return $html;
}

function renderTweets(tweets) {
        
    // loops through tweets
    tweets.forEach(tweet => {
        
        $aTweet = createTweetElement(tweet)
        $('.tweets').prepend($aTweet)
    })
}

$(document).ready(function() {
    
    $.get('/tweets/')
    .then(jsonData => renderTweets(jsonData))
  
});

