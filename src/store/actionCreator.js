import * as actionType from './actionType'
let ceshi = (val)=>({type:actionType.UPDATE_PUBLIC_TEXT,operate:val})
let actionCreator = {
    ceshi
}
export default actionCreator