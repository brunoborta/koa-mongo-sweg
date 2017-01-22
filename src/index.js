import Koa from 'koa';
import config from './config';
import Twit from 'twit';
const app = new Koa();

const TweetClient = new Twit(config);


// Tweeting things
let tweet = {
	status: 'One last try... #coding'
}
let dataTweet = '';
TweetClient.post('statuses/update', tweet, async function(err, data, response) {
	if(err) {
		console.log('An Error ocurred: ' + err.message);
	} else {
		console.log('It worked! The tweet is: ' + data.text);
	}
	dataTweet = data;
});

app.use(ctx => {
	ctx.body = dataTweet;
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
