module.exports = function(app){
    const fileEditDB = require('../dbUtil/fileEditDB')
    //模拟接口 传更新需要的参数
    //点击编辑的时候
    app.post('/api/FileEditList', function (req, res) {
        console.log(req.body.name)
        //定义一个需要传的参数
        let params = {
            name: req.body.name,
            phone: req.body.phone,
            department: req.body.department,
            payment: req.body.payment,
            sex: req.body.sex,
            idCard: req.body.idCard,
            education: req.body.education,
            id: req.body.id
        }
      fileEditDB.getFileEditList(params).then(
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
   //点击删除的时候
    app.post('/api/getDeleteList', function (req, res) {
        //定义一个需要传的参数
        let params = {
            id: req.body.id
        }
      fileEditDB.deleteList(params).then(
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

    //模糊查询
     app.get('/api/getSelectList', function (req, res) {
        //定义一个需要传的参数
        let params = {
            name: req.query
        }
      fileEditDB.selectList(params).then(
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

