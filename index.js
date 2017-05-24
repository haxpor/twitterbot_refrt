var twit = require('twit');

var t = twit({
	consumer_key: process.env.TWITTERBOT_REFRT_CONSUMER_KEY,
	consumer_secret: process.env.TWITTERBOT_REFRT_CONSUMER_SECRET,
	access_token: process.env.TWITTERBOT_REFRT_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTERBOT_REFRT_ACCESS_TOKEN_SECRET
});

let prefix = 'RT |';
let targetUserId = '16254950';

// get stream from @haxpor
var stream = t.stream('statuses/filter', { follow: targetUserId });
stream.on('tweet', function(tweet) {

	// check if it's tweet that quote another tweet (retweet with customized text)
	// consult https://gist.github.com/haxpor/40957164cc8306533216c8d721c7042b for example of captured json responses for 3 types of tweet
	if (tweet.quoted_status != null) {
		// if tweet starts with prefix string to check
		if (tweet.text.startsWith('RT |')) {
			// retweet
			t.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
			  console.log('found one to retweet with id: ' + tweet.id_str);
			});
		}
	}
});

