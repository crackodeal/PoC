const http = require('node:http');
const express = require('express'); 
const app = express();
const sql = require('mssql/msnodesqlv8') //mssql with MS driver for SQL Server
var beautify = require("json-beautify");
  
var env = process.env.NODE_ENV || 'production';
var sqlConfig = require('./config')[env];
  
const connection = new sql.ConnectionPool(sqlConfig, function(err){if (err){console.log(err);}})
  
http
    .createServer((request, response) => {
        const { headers, method, url } = request;
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;

	const tableName = url.split('/')[1];
	connection.connect().then(pool => { 
		var conn=pool.request()
		var string = 'SELECT top 5 * FROM TODS_DEMO.dbo.'+tableName;
		console.log(string);
		return conn.query(string)
 		}).then(result => {
                	let rows = result.recordset
			response.setHeader('Access-Control-Allow-Origin', '*')
			response.end(beautify(rows, null, 2, 100));
			console.log(beautify(rows, null, 2, 100));
			connection.close();
			}).catch(err => {
				console.log(err);
	  		        response.status(500).send({
			        message: err
			        })
			connection.close();
		});
    })
    .listen(3002);
