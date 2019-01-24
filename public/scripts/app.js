/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
//   const safeHTML = `<p>${escape(textFromUser)}</p>`;
function createTweetElement(data) {
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
        `<p class="tweet-footer-text">${escape(data.created_at)}</p>` +
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

function renderTweets(tweets) {
        
    // loops through tweets
    tweets.forEach(tweet => {
        console.log(tweet);
        $aTweet = createTweetElement(tweet)
        $('.tweets').prepend($aTweet)
    })
}

$(document).ready(function() {
    console.log('ready to fetch data')
    $.get('/tweets/')
    .then(jsonData => renderTweets(jsonData))
  
});

