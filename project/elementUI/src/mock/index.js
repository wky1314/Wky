import axios from 'axios'
import {getEmployeeFileList} from '../api/'
import axiosMockAdapter from 'axios-mock-adapter'

let mockApi = new axiosMockAdapter( axios )
/**
 * 模拟登陆接口
 * 参数：userName， userPwd
 * 类型：POST
 */
//权限分配的导航的虚拟接口
let root = {}
root[0] = [
    'Root','SalaryBar',
    'EnterpriseService',
    'BusinessManagement'
]
root[1] = [
    'EnterpriseService',
    'BusinessManagement'
]
root[2] = [
    'SalaryBar',
    'EnterpriseService',
]
mockApi.onGet( '/api/login_do' ).reply(function( config ){
    let params = JSON.parse( config.data ) //get post接受的参数不一样
     console.log(params)//你登录的信息转成对象
    let data = {
        code: 200,
        data: {}
    };
    if( params.userName == 'wky'){
        data.data = {
            userName: '王可妤',
            sex: '女',
            age: 22,
            photo: 'http://img03.sogoucdn.com/app/a/100520093/f3ef84e6f0e681f1-9ab23d4aae282666-8b9b47ac55fc38b4abb95453f0e20645.jpg',
            type: 0,
            root: root[0]
        }
    }else if( params.userName == 'zcz' ){
        data.data = {
            userName: '翟晨泽',
            sex: '男',
            age: 22,
            photo: 'http://img03.store.sogou.com/app/a/10010016/cfcba894e555937349610feb534dc72c',
            type: 1,
            root: root[1]
        }
    }else if( params.userName == 'wsm' ){
        data.data = {
            userName: '王诗蔓',
            sex: '女',
            age: 45,
            photo: 'http://img1.touxiang.cn/uploads/20120509/09-014623_68.jpg',
            type: 2,
            root: root[2]
        }
    }

    return [200, data]

})
//get方式接受的是config.params post方式接受的是config.data
//员工档案的列表数据接口
mockApi.onGet( '/api/employeeFile' ).reply(function( config ){//虚拟接口
    let params = JSON.parse( config.data ) //get post接受的参数不一样
    let data = {
        code: getEmployeeFileList.code,
        data: [],
        count: getEmployeeFileList.data.length
    };
    data.data =  getEmployeeFileList.data.slice(params.page*params.pageSize,params.page*params.pageSize+params.pageSize)
    return [200, data]

})
//点击添加员工 往列表中插入数据
mockApi.onPost( '/api/addEmployeeFile' ).reply(function( config ){//虚拟接口
    let params = JSON.parse( config.data ) //get post接受的参数不一样
    params.data['id'] = +new Date();//传入一个id 自动生成一个时间戳的参数
    getEmployeeFileList.data.unshift(params.data)
    let data = {
        code: 200,
        msg: '添加成功'
    }
    return [200,data]
})
