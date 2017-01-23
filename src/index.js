import Koa from 'koa';
import config from './config';
import Twit from 'twit';
const app = new Koa();

const TweetClient = new Twit(config);

// This variable will show the magic!
let dataTweet = '';

// Tweeting things

/* let tweet = {
// 	status: 'One last try... #coding'
// }

// TweetClient.post('statuses/update', tweet, async function(err, data, response) {
// 	if(err) {
// 		console.log('An Error ocurred: ' + err.message);
// 	} else {
// 		console.log('It worked! The tweet is: ' + data.text);
// 	}
// 	dataTweet = data;
// });
*/

// Just find this on ww trends
TweetClient.get('search/tweets', { q: 'the Packers', count: 5 }, function(err, data, response) {
	if(err) {
		console.log('An Error ocurred: ' + err.message);
	} else {
		console.log('It worked! Here\'s your search: ' + JSON.stringify(data, null, 2));
 	}
  dataTweet = data;
});

app.use(ctx => {
	ctx.body = JSON.stringify(dataTweet, null, 2);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
