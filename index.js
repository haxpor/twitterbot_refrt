var twit = require('twit');

var t = twit({
	consumer_key: process.env.TWITTERBOT_REFRT_CONSUMER_KEY,
	consumer_secret: process.env.TWITTERBOT_REFRT_CONSUMER_SECRET,
	access_token: process.env.TWITTERBOT_REFRT_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTERBOT_REFRT_ACCESS_TOKEN_SECRET
});

t.post('statuses/update', { status: 'tweet via twit, test 3' }, function(err, data, response) {
	console.log(data);
});