module.exports = function(app){
    const memberDB = require('../dbUtil/memberDB')
    //登录时候 post方式获取的用户名和密码
    app.post('/api/addMember', function (req, res) {
        //定义一个需要传的参数
        let params = {
            name: req.body.name,
            phone: req.body.phone,
            idCard: req.body.idCard,
            payment: req.body.payment,
            sex: req.body.sex,
            education: req.body.education,
            department: req.body.department
        }
       memberDB.addMember(params).then(
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

    app.get('/api/memberList', function (req, res) {
        
        let params = {
            page: req.query.page,
            pageSize: req.query.pageSize,
            filter: JSON.parse(req.query.filter)
        }
        memberDB.getMemberList(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });
}
