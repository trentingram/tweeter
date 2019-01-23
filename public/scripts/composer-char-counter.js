// icons are broken.  Need to return to fix icons. Consider export/import file.
// convert createdAt to days ago...
// add margin or padding between tweets.
// fix hover, hover should only work on individual tweets.
// fix scroll issue.

const tweetsData = [{
    "user": {
        "name": "Newton",
        "avatars": {
            "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
},
{
    "user": {
        "name": "Descartes",
        "avatars": {
            "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
            "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
            "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
    },
    "content": {
        "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
},
{
    "user": {
        "name": "Johann von Goethe",
        "avatars": {
            "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
    },
    "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
}
];


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

// listen for form submit
$('.tweet-submit').on('submit', function(e) {
    e.preventDefault();
    let $serializedData = $(this).serialize();
    console.log($serializedData);
    // $myText = $('textarea[name=text]').val();

    $.ajax('/tweets/', {
    method: 'POST',
    data: $serializedData,
    success: function (data) {
        console.log(data)
    }
})
})

});