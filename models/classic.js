import {HTTP} from '../utils/http.js'
let http = new HTTP()
class Classic extends HTTP{
  getBrands(callback){
    http.request({
      url:'brands',
      success:(res)=>{
        callback(res)
      }
    })
  }
}
export {Classic}