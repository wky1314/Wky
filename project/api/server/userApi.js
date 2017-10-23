module.exports = function(app){
    const userDB = require('../dbUtil/userDB')
    //登录时候 post方式获取的用户名和密码
    app.post('/api/login_do', function (req, res) {
        //定义一个需要传的参数
        let params = {
            userName: req.body.userName,
            userPwd: req.body.userPwd
        }
        userDB.LoginDo(params).then(
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
   //get方式获取的用户权限 渲染root页面 角色
    app.get('/api/getUserRoot', function (req, res) {
        //定义一个需要传的参数
        let params = {
            id: req.query.id
        }
        userDB.getUserRoot(params).then(
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

   //获取所有的权限列表 用来做更新
    app.get('/api/editRoot', function (req, res) {
        
        let params = {
            id: req.query.id,
            rule: req.query.rule
        }
        userDB.getEditList(params).then(
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

    //获取root表中的数据 
    app.get('/api/getRootList', function (req, res) {
        userDB.getUserRoot().then(
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
