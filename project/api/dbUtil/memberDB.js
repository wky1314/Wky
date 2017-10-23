//所有的用户操作
const connect = require('./dbConnect')
let memberDB = {};
//插入语句 
memberDB.addMember = function(params){ 
    let sql = 'insert into member (name,phone,department,payment,sex,idCard,education,pwd,state) values (?,?,?,?,?,?,?,?,?)';
    return new Promise((resolve,reject)=>{ 
          connect.query(sql,[
                params.name,
                params.phone,
                params.department,
                params.payment,
                params.sex,
                params.idCard,
                params.education,
                params.phone.slice(-6),
                '1'
            ],(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
    })
 
}
 //分页查询 limit()
memberDB.getMemberList = function( params ){ 
    // desc倒序  limit(m,n) 其中m是指记录开始的index，从0开始，表示第一条记录
    // n是指从第m+1条开始，取n条。
    //object.keys() 返回一个数组
    let sql;
    let data = [
        params.page*params.pageSize,
        parseInt( params.pageSize)
    ];

    if( Object.keys(params.filter).length == 0 ){
        sql = "select * from member order by id desc  limit ?,?"
    }else{
        var newArr = [];
        for( var item in params.filter ){
            newArr.push( "%"+params.filter[item]+"%" )
        }
        data = newArr.concat(data);
        var whereKey = Object.keys(params.filter).join(" like ? and ")+" like ?"
        sql = "select * from member where "+whereKey+" order by id desc  limit ?,? "
    }
    console.log(params)
    return new Promise( ( resolve, reject )=>{
        connect.query( sql, data, ( error, result )=>{
            if( error ){
                reject(error)
                console.log('失败')
            }else{
                resolve( {
                    count: 100,
                    data:result
                } )
            }
        } )
    } )
}

//根据数据库的操作写路由的接口
module.exports = memberDB