# twitterbot_refrt

This bot will retweet what @haxpor tweet (mostly retweet) with #refrt. It's meant for reference purpose for @haxpor to look at them later.

# Setup

Script refers to server's environment variables for keys and secrets to communicate with Twitter. This is for safety not to expose those things in source code.

Add the following code to server's `~/.bash_profile` or equally `~/.bashrc`.

```shell
export TWITTERBOT_REFRT_CONSUMER_KEY='xxxx'
export TWITTERBOT_REFRT_CONSUMER_SECRET='xxxx'
export TWITTERBOT_REFRT_ACCESS_TOKEN='xxxx'
export TWITTERBOT_REFRT_ACCESS_TOKEN_SECRET='xxxx'
```

in which those `xxxx` can be copied from `https://apps.twitter.com/app` by creating a new app, and look at `Keys and Access Token` section.  
You have to generate access token manually. Just follow along on its website.

# See in Real Action

Take a look at [@haxpor_refrt](https://twitter.com/haxpor_refrtbot) bot, it will retweet tweet from [@haxpor](https://twitter.com/haxpor) if that tweet passed filtering rules to retweet.

# License

[MIT](https://github.com/haxpor/twitterbot_refrt/blob/master/LICENSE), Wasin Thonkaew
