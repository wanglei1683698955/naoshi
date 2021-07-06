import Service from '../../util/service'
export default function getbaidu(params) { 
    return new Promise((resolve,reject)=>{
        Service.request({
            url:"/api/s",
            method:"get",
            params
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })
    })
}