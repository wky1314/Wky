import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//登录页
import Login from '@/views/Login'
//首页
import Index from '@/views/Index'

//权限管理
import Root from '@/views/Root' 

import SalaryBar from '@/views/SalaryBar'
//工资条
import PaySlip from '@/views/SalaryBar/children/PaySlip'
//发工资条
import PayrollManagement from '@/views/SalaryBar/children/PayrollManagement'
//工资条管理
import EmployeeFeedback from '@/views/SalaryBar/children/EmployeeFeedback'
//员工反馈


import EnterpriseService from '@/views/EnterpriseService'
//企业服务

import PayrollseService from '@/views/EnterpriseService/children/PayrollseService'
//薪水服务
import ReportForm from '@/views/EnterpriseService/children/ReportForm'
//报表


import BusinessManagement from '@/views/BusinessManagement'
//企业管理
import BusinessAccount from '@/views/BusinessManagement/children/BusinessAccount'
//企业账户
import EmployeeFile from '@/views/BusinessManagement/children/EmployeeFile'
//员工档案

//所有都有的
Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  },
   {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页'
    },
   component: Index
  }
]

const router = new Router({
  routes: routes
})

//根据登录账号不一样渲染的动态路由
let routerArr = [
  {
    path: '/root',
    name: 'Root',
    meta: {
      title: '权限管理'
    },
    component: Root
  },
  {
    path: '/salarybar',
    name: 'SalaryBar',
    meta: {
      title: '工资条'
    },
    component: SalaryBar,
    children: [
      {
        path: 'payslip',
        name: 'PaySlip',
        meta: {
          title: '发工资条'
        },
        component: PaySlip
      },
      {
        path: 'payrollmanagement',
        name: 'PayrollManagement',
        meta: {
          title: '工资条管理'
        },
        component: PayrollManagement
      },
      {
        path: 'employeefeedback',
        name: 'EmployeeFeedback',
        meta: {
          title: '员工反馈'
        },
        component: EmployeeFeedback
      },
    ]
  },
  {
    path: '/enterpriseservice',
    name: 'EnterpriseService',
    meta: {
      title: '企业服务'
    },
    component: EnterpriseService,
    children: [
      {
        path: 'payrollseservice',
        name: 'PayrollseService',
        meta: {
          title: '薪税服务'
        },
        component: PayrollseService
      },
      {
        path: 'reportform',
        name: 'ReportForm',
        meta: {
          title: '报表'
        },
        component: ReportForm
      }
    ]
  },
  {
    path: '/businessmanagement',
    name: 'BusinessManagement',
    meta: {
      title: '企业管理'
    },
    component: BusinessManagement,
    children: [
      {
        path: 'businessaccount',
        name: 'BusinessAccount',
        meta: {
          title: '企业账户'
        },
        component: BusinessAccount
      },
      {
        path: 'employeefile',
        name: 'EmployeeFile',
        meta: {
          title: '员工档案'
        },
        component: EmployeeFile
      }
    ]
  }
]


router.flg = false
function getRouter( name ){
  let routerItem = ''
  for( let i=0; i<routerArr.length; i++ ){
    if( routerArr[i].name == name ){
      routerItem = routerArr[i]
    }
  }
  return routerItem;
}


router.beforeEach( (to,from,next)=>{
  document.title = to.meta.title;
  let userInfo = window.localStorage.getItem('userInfo')
  
  if( to.path == '/login' ){
    router.flg = false;
    router.options.routes = routes;
  }


  if( userInfo ){
    if( to.path == '/login' ){
      next( '/index' )
    }else{
      if( router.flg == false ){
        router.flg = true;
        let rootArr =  JSON.parse( userInfo ).root.split(',');
        //console.log( rootArr )
        let newRootArr = [];
        for( let i=0; i<rootArr.length; i++ ){
          newRootArr.push( getRouter( rootArr[i] ) )
        }
       // console.log(newRootArr)
        router.addRoutes( newRootArr )
        let newRouter = router.options.routes.concat( newRootArr )
        router.options.routes = newRouter;
        next(to.path);
      }else{
        next();
      }
    }
  }else{
    router.flg = false;
    router.options.routes = routes;
    if( to.path == '/login' ){
      next()
    }else{
      next('/login')
    }
  }
})
export {
  router,
  routerArr
}