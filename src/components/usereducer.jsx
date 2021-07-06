import React,{useReducer} from "react"
export default function Usereducer(){
    let reducer = (state,action)=>{
        switch (action.type) {
            case "a":
                return state+"0"
            case "b":
                return state+"1"
        
            default:
                return state
        }
    }
    const [val,dispatch] = useReducer(reducer,"123")

    let up = (c)=>{
        dispatch({type:c})
    }
    
    return (
        <div>
            <p>{val}</p>
            <button onClick={()=>{up("a")}}>aaa</button>
            <button onClick={()=>{up("b")}}>bbb</button>
        </div>
    )
}