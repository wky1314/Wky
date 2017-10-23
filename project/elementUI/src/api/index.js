import {Random} from 'mockjs'
let getEmployeeFileList = {
    code: 0,
    data: []
}
for (let i = 0; i < 100; i++) {
   getEmployeeFileList.data.push({
    id:  Random.increment(),
    name: Random.cname(),
    phone: Random.natural(),
    state: Random.float(0,1,0,0),
    card: Random.id(),
    education: Random.csentence(3, 5),
    sex: Random.float(0,1,0,0)
  })
}
export {
  getEmployeeFileList
}
