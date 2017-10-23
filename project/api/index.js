
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const opn = require('opn')
const userApi = require( './server/userApi')
const memberApi = require('./server/memberApi')
const roleApi = require('./server/roleApi')
const fileEditApi = require('./server/fileEditApi')
const app = express();
// app.all('*', function(req, res, next) {  
//     res.header("Access-Control-Allow-Origin", "*");  
//     res.header("Access-Control-Allow-Headers", "X-Custom-Header");  
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
//     res.header("X-Powered-By",' 3.2.1')  
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();  
// });  
app.use( cors() )
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', function (req, res) {
    var data = {
        'userName' : 'wky',
        'age': 23
    }
    res.send(data);
});

userApi(app)
memberApi(app)
roleApi(app)
fileEditApi(app)
var server = app.listen( 1000, function(err){
    if( err ){
        console.log( '报错' )
    }
    console.log( 'http://localhost:1000' )
    //opn( 'http://localhost:1010' )
} )