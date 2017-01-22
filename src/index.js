import Koa from 'koa';
import config from './config';
import Twit from 'twit';
const app = new Koa();


app.use(ctx => {
	ctx.body = 'Hello World!';
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
