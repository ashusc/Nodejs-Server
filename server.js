

var port 		= process.env.PORT || 10000; // set the port
var path 		= require('path');
var express 	= require('express');
var app 		= express();

/*To call an REST API [in-case]*/
var request 		= require('request');

/*Middle-ware [in-case]*/
var multer 		    = require("multer");
var fs 			    = require('fs');
var util 		    = require('util');
var bodyParser 		= require('body-parser');
var cookieParser	= require('cookie-parser');
var session 		= require('express-session');

/*Setting up*/
	app.configure(function() {
	    app.use(express.static(__dirname + '/_public'));
	    app.use(express.cookieParser());
	    app.use(express.bodyParser());
	    app.use(bodyParser.json());
	    app.use(express.bodyParser({uploadDir:'./uploads'}));
	    app.use(bodyParser.urlencoded({
		extended: true

	    }));
	    app.use(express.methodOverride());
	});


/* Starting server on PORT*/
	app.listen(port);
	console.log("\n[1] - Server listening on port " + port + "... [http://localhost:"+port+"/]");

//printing REquest url.
app.use(function(req, res, next){
	console.log("\n >>>>>", req.url);
	next();
});
//=========================================================================================
app.post("/eko/file/", function(req, res){
	console.log(req);
	res.status(200).send("POST Done");
});
app.get("/eko/file/", function(req, res){
	console.log(req);
	res.status(200).send("GET Done");
});

//======================================================================================
//json data file
app.get("/eko/v1/chartData", function(req, res){
	console.log("\n >>>>>", req.url);
	res.status(200).sendfile('./data.json');
});

//REST API for get
app.get("/eko/v1/chart", sendJSONData);

function sendJSONData(req, res){

	//making data for an API request
	var arrData = [
		{
 			"id"	: "Combo Chart",
 			"type"	: "line",
 			"data"	: [
						["Day","Target","Current","Previous"],
						["day1",50,61,20.5],
						["day2",50,26,54],
						["day3",50,77,76.5],
						["day4",50,64,47.5],
						["day5",50,56,28],
						["day6",50,66,38],
						["day7",50,76,58],
						["day8",50,86,48],
						["day9",50,96,78],
						["day10",50,106,68]
					],
			"fullWidth"	: true,
 			"option": {
						animation : {duration: 1000,easing: 'out',"startup": true},
						lineSize:0,
						title: "My Graph",
						legend: { position: "bottom" },
						chartArea:{left:0,top:0,width:"100%",height:"80%"},
						curveType: "function",
						colors: ['darkcyan', 'black', 'darkred', '#f3b49f', '#f6c7b6'],
						is3D: true,
						backgroundColor: {stroke:null, fill:'#BBDEFB', strokeSize: 0},
						hAxis : { titleTextStyle: {color: '#333'}, gridlines: {color: '#f3f3f3',count: 5}, format: '####' },
						vAxis : { minValue: 0, gridlines: {color: '#f3f3f3',count: 5}}
					}
 		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"ACTIVE DAYS", "value":"10", "of":"22", "unit":"DAYS"}],
			"fullWidth"	: false
		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"TARGET FOR TODAY", "value":"70", "unit":"CRORES"}],
			"fullWidth"	: false
		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"EARNING THIS MONTH", "value":"60", "unit":"THOUSENDS"}, {"label":"MY EARNING", "value":"60"}],
			"fullWidth"	: false
		},
		{
 			"id"	: "Combo Chart",
 			"type"	: "line",
 			"data"	: [
						["Day","Target","Current","Previous"],
						["day1",50,61,20.5],
						["day2",50,26,54],
						["day3",50,77,76.5],
						["day4",50,64,47.5],
						["day5",50,56,28],
						["day6",50,66,38],
						["day7",50,76,58],
						["day8",50,86,48],
						["day9",50,96,78],
						["day10",50,106,68]
					],
			"fullWidth"	: false,
 			"option": {
						animation : {duration: 1000,easing: 'out',"startup": true},
						lineSize:0,
						title: "My Graph",
						legend: { position: "bottom" },
						chartArea:{left:0,top:0,width:"100%",height:"80%"},
						curveType: "function",
						colors: ['darkcyan', 'black', 'darkred', '#f3b49f', '#f6c7b6'],
						is3D: true,
						backgroundColor: {stroke:null, fill:'#BBDEFB', strokeSize: 0},
						hAxis : { titleTextStyle: {color: '#333'}, gridlines: {color: '#f3f3f3',count: 5}, format: '####' },
						vAxis : { minValue: 0, gridlines: {color: '#f3f3f3',count: 5}}
					}
 		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"TARGET FOR TODAY", "value":"70", "unit":"CRORES"}],
			"fullWidth"	: false
		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"EARNING THIS MONTH", "value":"60", "unit":"THOUSENDS"}, {"label":"MY EARNING", "value":"60"}],
			"fullWidth"	: false
		},
		{
			"id"	: "Counter Chart",
			"type"	: "counter",
			"data"	: [{"label":"EARNING THIS MONTH", "value":"60", "unit":"THOUSENDS"}, {"label":"MY EARNING", "value":"60"}],
			"fullWidth"	: false
		},
		{
 			"id"	: "Combo Chart",
 			"type"	: "pie",
 			"data"	: [
						["Day","Value"],
						["day1",5],
						["day2",10],
						["day3",30],
						["day4",40],
						["day5",25],
						["day6",5],
						["day7",50],
						["day8",70],
						["day9",500],
						["day10",70]
					],
			"fullWidth"	: true,

 		}
	];

	console.log("\n Sending JSON Data\n");
	//res.status(200).send(JSON.stringify(obj));
	res.status(200).send(JSON.stringify(arrData));
}
