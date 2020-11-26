import config from '../config.js'
const tips={
  // 0:'加载成功',
  1:'呀！出错了',
  3000:'SqlExcuteError',
  10001:'SystemError',
  10002:'ApiNotFoundError',
  10003:'ParametersError',
  10004:'DbConnectError',
  10005:'StartTransactionError',
  10006:'CommitTransactionError',
  10007:'CallServiceError',
  10008:'JsonParseError',

}
class HTTP{
  constructor(){
    
  }
  request(params){
    if(!params.method){
      params.method='GET'
    }
      wx.request({
        url: config.api + params.url,
        method:params.method,
        data:params.data,
        // header:{
        //   'content-type': 'application/json',
        //   'appkey':config.appkey
        // },
        success:(res)=>{
          // 获取到返回的状态码
            let code=res.data.code
            if(code.toString().startsWith('0')){
              // 将res返回给调用方
              params.success && params.success(res.data)
              wx.showToast({
                title: res.data.msg+' - success',
                icon:'none',
                duration:2000
              })
            }else{
              let error_code=res.data.code
                this._show_error(error_code)
            }
        },
        fail:(err)=>{
            this._show_error(1)
        }
      })
      }
       // _可以看成私有方法，但是没有私有方法的特性，仅仅用于标识
      _show_error(error_code){
        if(!error_code){
          error_code=1
        }
        wx.showToast({
          title: tips[error_code],
          icon:'none',
          duration:2000
        })
    }
}
export {HTTP}