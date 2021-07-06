import * as actionType from '../actionType'
let data ={
    text:"迷人的北泽"
}

let publicModel = (state=data,action)=>{
    switch (action.type) {
        case actionType.UPDATE_PUBLIC_TEXT:
            return {...state,text:action.operate}
    
        default:
            return state
    }
}

export default publicModel