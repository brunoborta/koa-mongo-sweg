import Koa from 'koa';
import mongo from 'koa-mongo';
const app = new Koa();

app.use(ctx =>{
	ctx.body= 'Just a Hello World app';
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
