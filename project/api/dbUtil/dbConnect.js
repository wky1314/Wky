//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19950527',
    database: '1506a',
    port: 3306,
    insecureAuth:true
})
connection.connect(()=>{
    console.log('数据库连接成功了')
})
connection.on('err',()=>{
    console.log('数据库连接失败了')
})
module.exports =connection