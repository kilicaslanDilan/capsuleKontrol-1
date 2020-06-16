
const { Pool } = require('pg')

const pool = new Pool({
	// user: 'postgres',
	// host: 'localhost',
	// database: 'capsule',
	// password: '127821',
	// port: 5432,
	user: 'capsule_control_user',
	host: "83.150.215.212",
	database: 'capsule_db',
	password: 'ankara_kargo_95x06',
	port: 5506,

})
const getSubeler = async (req, res) => {
	try {
		const subeler = await pool.query('SELECT * FROM subeler ');
		res.json(subeler.rows);
		console.log('tablo');

	} catch (err) {
		console.log(err.message);

	}
}
const getAraclar = async (req, res) => {
	try {
		const araclar = await pool.query('SELECT * FROM araclar ');
		res.json(araclar.rows);
		console.log('arac');

	} catch (err) {
		console.log(err.message);

	}
}
const getHome = (req, res) => {
	if (request.session.loggedin) {
		response.json('Welcome back, ' + request.session.kullanici_adi + '!');
	} else {
		response.json('Please login to view this page!');
	}
	response.end();
}
const getUyeler = async (req, res) => {
	try {
		const uyeler = await pool.query('SELECT * FROM üyelik ');
		res.json(uyeler.rows);
		console.log('üyeler');

	} catch (err) {
		console.log(err.message);

	}
}
const getAdresRehberi = async (req, res) => {
	try {
		const adresRehberi = await pool.query('SELECT * FROM adresRehberi ');
		res.json(adresRehberi.rows);
		console.log('adresRehberi');

	} catch (err) {
		console.log(err.message);

	}
}
const getCapsuleKonum = async (req, res) => {
	try {
		const capsuleKonumBilgisi = await pool.query('SELECT * FROM capsuleKonum ');
		res.json(capsuleKonumBilgisi.rows);
		console.log('capsuleKonumBilgisi');

	} catch (err) {
		console.log(err.message);

	}
}
const postGiris = (req, res, next) => {
	const { kullanici_adi, kullanici_sifre } = req.query;

	console.log('post çalıştı');
	console.log({ kullanici_adi, kullanici_sifre });
	if (kullanici_adi || kullanici_sifre) {
		console.log('p');
		const query2 = "SELECT * FROM yetkili WHERE kullanici_adi='" + kullanici_adi + "' AND kullanici_sifre ='" +  kullanici_sifre + "'";
		console.log(query2);
		
		pool.query('SELECT * FROM yetkili WHERE kullanici_adi =$1  AND kullanici_sifre = $2', [kullanici_adi , kullanici_sifre], (err, results) => {
		
			console.log(results);
			if (results) {
				console.log(results.rows);
				if (results.rows.length > 0) {
					res.send(true);
				}

			} else {
				console.log("sorun var");
				res.send('Incorrect Username and/or Password!');
			}
			res.end();

		});
	} else {
		console.log("sorun var 2");
		res.json('Please enter Username and Password!');
		res.end();
	}
}
const capsuleEkle = async (req, res) => {

	try {

		const { seri_no, sube_adi, sube_adres, lat, lng, sube_ariza_kaydi, sube_calisma_durumu, doluluk_orani } = req.query;

		const capsuleEkle = await pool.query('INSERT INTO subeler(seri_no,sube_adi,sube_adres,lat,lng,sube_ariza_kaydi,sube_calisma_durumu,doluluk_orani) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING* ', [seri_no, sube_adi, sube_adres, lat, lng, sube_ariza_kaydi, sube_calisma_durumu, doluluk_orani], (err, results) => {

			if (results) {


				res.json(results);



			}
		});
	} catch (err) {
		console.log(err.message);

	}



}
const capsuleUpdate = async (req, res, next) => {
	console.log("put");

	const doluluk_orani = req.body.doluluk_orani;
	const seri_no = req.body.seri_no;
	const sube_adi = req.body.sube_adi;
	const sube_adres = req.body.sube_adres;
	const lat = req.body.lat;
	const lng = req.body.lng;
	const sube_ariza_kaydi = req.body.sube_ariza_kaydi;
	const sube_calisma_durumu = req.body.sube_calisma_durumu;



	if (seri_no || doluluk_orani || sube_adi || sube_adres || lat || lng || sube_ariza_kaydi || sube_calisma_durumu) {
		console.log('pa');
		pool.query('UPDATE subeler SET doluluk_orani= ($1), sube_adi = ($3), sube_adres= ($4), lat= ($5), lng= ($6), sube_ariza_kaydi= ($7), sube_calisma_durumu= ($8) WHERE seri_no= ($2) ', [doluluk_orani, seri_no, sube_adi, sube_adres, lat, lng, sube_ariza_kaydi, sube_calisma_durumu], (err, results) => {
			console.log("güncelll")
			if (results) {
				console.log(results.rows);
				if (results.rows.length > 0) {
					res.send(true);
				}

			} else {
				res.send('Incorrect Username and/or Password!');
			}
			res.end();

		});
	}







}
module.exports = {
	getSubeler,
	getAraclar,
	getHome,
	getUyeler,
	postGiris,
	capsuleEkle,
	capsuleUpdate,
	getCapsuleKonum,
	getAdresRehberi
}