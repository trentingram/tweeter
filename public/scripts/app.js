/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
    console.log('ready to fetch data')
    $.get('/tweets/')
    .then(jsonData => { 
        console.log('tweets: ', jsonData)
        console.log('typeof: ', typeof jsonData) 
        function createTweetElement(data) {
            var $html =
                '<article class="article-tweets">' +
                '<header class="tweet-header">' +
                '<div class="tweet-image-name-container">' +
                `<img class="tweet-image" src=${data.user.avatars.small}></img>` +
                `<h2 class="tweet-name">${data.user.name}</h2>` +
                '</div>' +
                '<div class="tweet-handle-container">' +
                `<p class="handle">${data.user.handle}</p>` +
                '</div>' +
                '</header>' +
                '<section class="tweet-text">' +
                `<p class="tweet-text-area">${data.content.text}</p>` +
                '</section>' +
                '<footer class="tweet-footer-container">' +
                '<div class="tweet-footer">' +
                `<p class="tweet-footer-text">${data.created_at}</p>` +
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
                $('.tweets').append($aTweet)
            })
        }
        
        renderTweets(jsonData);

})
  
});

