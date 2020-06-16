var express = require('express');
const app = express();
const pool = require('./db')
const error404 = {
	method: "_",
	path: "/{any*}",
	handler: function ( request, h ) {
	  return h.view( "404", { title: "Not Found" } ).code( 404 );
	},
	options: { auth: false }
  };

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.listen(4000, function () {
	console.log(`server listen 4000`)
});
app.get('/', (req, res, next) => {
	console.log('get geldi');
	res.send('dilan');
});








app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.post('/auth', pool.postGiris);

app.put('/capsuleUpdate/:seri_no',  pool.capsuleUpdate);
app.get('/tablo', pool.getSubeler);
app.get('/tabloArac', pool.getAraclar );
app.post('/capsuleEkle', pool.capsuleEkle);


app.get('/home', pool.getHome);
app.get('/uyeler', pool.getUyeler);
app.get('/capsuleKonum', pool.getCapsuleKonum);
app.get('/adresRehberi', pool.getAdresRehberi);

module.exports = app;
