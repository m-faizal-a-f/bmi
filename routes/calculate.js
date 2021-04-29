var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var satuan	= "cm";
	var berat 	= parseFloat(req.body.txt_berat);
	var tinggi 	= parseFloat(req.body.txt_tinggi);
	var bmi		= 0;
	var kategori= "";
	var color	= "#000";
	
	if(satuan=="cm"){
		var tinggiMeter = tinggi / 100;
	}
	
	bmi = parseFloat(berat / (tinggiMeter*tinggiMeter)).toFixed(1);
	if(bmi<16){
		kategori = "Kurus Parah";
		color	 = "#b90606";
	}else if(bmi<17){
		kategori = "Kurus Sedang";
		color	 = "#ca5353";
	}else if(bmi<18.5){
		kategori = "Sedikit Kurus";
		color	 = "#ffe400";
	}else if(bmi<25){
		kategori = "Normal";
		color	 = "#008137";
	}else if(bmi<30){
		kategori = "Kegemukan";
		color	 = "#ffe400";
	}else if(bmi<35){
		kategori = "Obesitas Kelas I";
		color	 = "#ca5353";
	}else if(bmi<40){
		kategori = "Obesitas Kelas II";
		color	 = "#b90606";
	}else{
		kategori = "Obesitas Kelas III";
		color	 = "#8a0101";
	}
	
	res.render('index', { 
			result	:true,
			title	: 'KALKULATOR BMI',
			berat	: berat,
			tinggi	: tinggi,
			bmi		: bmi,
			kategori: kategori,
			color	: color,
			baseUrl	: "http://localhost:3000/",
		}
	);
});

module.exports = router;