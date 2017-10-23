module.exports = function(app){
    const roleDB = require('../dbUtil/roleDB')
    //登录时候 post方式获取的用户名和密码
    app.post('/api/addRole', function (req, res) {
        //定义一个需要传的参数
        let params = {
            name: req.body.name,
            rule: req.body.rule
        }
       roleDB.addRole(params).then(
            (data)=>{
            res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
            res.end(JSON.stringify(data));
        },
            (error)=>{
            res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
            res.end(JSON.stringify(error));
        }
      ) //根据传的参数得到一个回调  
    });
}
