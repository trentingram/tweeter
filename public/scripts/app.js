// finds the diff between unix timestamp in tweet object and today
// used for displaying text for number of days since tweet was posted.
function numConverter(num) {
    var d1 = num;
    var d2 = new Date()
      .getTime();
    var microSecondsDiff = Math.abs(d1 - d2);
    var daysDiff = Math.floor(microSecondsDiff / (1000 * 60 * 60 * 24));
  
    return daysDiff
  }
  
  // escapes text for better security
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  
  // vars for adding font awesome icons dynamically
  let flag_icon = '<i class="fas fa-flag"></i>'
  let retweet_icon = '<i class="fas fa-retweet"></i>'
  let heart_icon = '<i class="fas fa-heart"></i>'
  
  function createTweetElement(data) {
  
    var days = numConverter(data.created_at)

    // create html for each existing tweet
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
  
    // loops through array of existing tweets
    tweets.forEach(tweet => {
      
      // passes object that is used to create a tweet html
      $aTweet = createTweetElement(tweet)

      // adds created tweet to tweets section on DOM
      $('.tweets')
        .prepend($aTweet)
    })
  }
  
  $(document)
    .ready(function() {
    
      // fetches existing tweets in database for initial render when page is ready  
      $.get('/tweets/')
        .then(jsonData => renderTweets(jsonData))
  
    });