//所有的用户操作
const connect = require('./dbConnect')
let userDB = {};
//查询数据库中是否有数据
userDB.getUserList = function(){
    //读出列表 为了触发回调 返回出去 
    let sql = 'select * from BMS' //查询数据库中的用户数据
    connect.query(sql,[],(error,result)=>{
        if(error){
            console.log('查询失败')
        }else{
            console.log(result)
        }
    })
}
//查询数据库中的用户名和密码是否可以登陆成功
userDB.LoginDo = function(params){ //接受index.js里面LoginDo()函数传的参数params
    let sql = 'select * from bms where userName = ? and userPwd = ?';
    //因为涉及到一个回调 用promise对象 它接受两个参数 一个是resolve 另一个是reject
    return new Promise((resolve,reject)=>{ //登录状态
          connect.query(sql,[
                params.userName,
                params.userPwd
            ],(error,result)=>{
                if(error){
                    reject(error)
                    console.log('失败')
                }else{
                    if(result.length==0){
                      reject({
                          code: 404,
                          msg: "用户名或密码错误"
                      })
                    }else{
                       resolve(result[0])
                    }
                }
            })
    })
 
}
//根据不同的规则也就是权限 通过id查询
userDB.getUserRoot = function( params ){
    
    let sql = "select * from root where id=?"

    if( !params ){
        sql = "select * from root"
    }
    return new Promise( ( resolve, reject )=>{
        let data = params ? [
            params.id 
        ] : [];
        connect.query( sql,data , ( error, result )=>{
            if( error ){
                reject(error)
            }else{
                if( result.length == 0 ){
                    reject({
                        code: 403,
                        msg: '没有此类型规则'
                    })
                }else{
                    if( params ){
                        resolve(result[0].rule)
                    }else{
                         resolve(result)
                    }
                }
            }
        } )
    } )
    
}

//获取数据库中的数据 通过编辑 选择列表的权限 更新页面中的权限 通过id 
userDB.getEditList = function( params ){
    let sql = "update root set rule = ? where id = ? "
    let data = [
            params.id,
            params.rule
        ]
    return new Promise( ( resolve, reject )=>{
       
        connect.query( sql,data , ( error, result )=>{
            if( error ){
                reject(error)
            }else{
                resolve(result)
            }
        } )
    } )
    
}

//根据数据库的操作写路由的接口
module.exports = userDB