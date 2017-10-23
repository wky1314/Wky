//所有的用户操作
const connect = require('./dbConnect')
let roleDB = {};
//插入语句 
roleDB.addRole = function(params){ 
    let sql = 'insert into root (rule,name) values (?,?)';
    return new Promise((resolve,reject)=>{ 
          connect.query(sql,[
                params.rule,
                params.name,
            ],(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
    })
 
}


//根据数据库的操作写路由的接口
module.exports = roleDB