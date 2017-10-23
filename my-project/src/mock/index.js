import axios from 'axios'
import {movieData} from '../api/'
import {cinemaData} from '../api/'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios,{
  delayResponse: 1000
})
mock.onGet('/api/queryAdvertise').reply(function (config) {
  let params = config.params
  let data = {
    code: movieData.code,
    data: []
  }
  data.data = movieData.data.slice(params.page*params.pageSize,params.page*params.pageSize+params.pageSize)
  return [200, data]
})
mock.onGet('/api/cinemaAdvertise').reply(function (config) {
  let params = config.params
  let data = {
    code: cinemaData.code,
    data: []
  }
  data.data = cinemaData.data.slice(params.page*params.pageSize,params.page*params.pageSize+params.pageSize)
  return [200, data]
})
mock.onPost('/api/userLogin').reply(function(config){
    let params = JSON.parse( config.data );
    let data = {}
    let code = 200
    console.log(params)
    if( params.userName=='wky' && params.passWord=='19950527' ){
        data = {
            code: 200,
            data: {
                userName: 'wky',
                nickName: 'zcz',
                photo: 'img.jpg'
            }
        };
        code = 200
    }else{
        data = {
            code: 200,
            data: {
                msg: '失败'
            }
        };
        code = 304
    }
    
    return [code,data]
})
