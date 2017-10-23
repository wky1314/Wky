//所有的用户操作
const connect = require('./dbConnect')
let fileEditDB = {};

//获取数据库中的数据 通过编辑  更新页面中的信息
fileEditDB.getFileEditList = function( params ){
    console.log(params)
    let sql = "update member set name=?,phone=?,department=?,payment=?,sex=?,idCard=?,education=? where id=?"
    let data = [
            params.name,
            params.phone,
            params.department,
            params.payment,
            params.sex,
            params.idCard,
            params.education,
            params.id
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

//删除本行内容
fileEditDB.deleteList = function( params ){
    console.log(params)
    let sql = "delete from member where id=?"
    let data = [
            params.id
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

//模糊查询
fileEditDB.selectList = function( params ){
    let sql = "select * from member where name like '%" + params.name[0] + "%'"
    return new Promise( ( resolve, reject )=>{
        connect.query( sql, ( error, result )=>{
            if( error ){
                reject(error)
            }else{
                resolve(result)
            }
        } )
    } )
}

//根据数据库的操作写路由的接口
module.exports = fileEditDB