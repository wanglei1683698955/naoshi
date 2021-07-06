import {useState,useRef,useEffect} from 'react'
export default function Hook(props){
    let [val,setVal] = useState({
        a:"a",
        b:"b"
    })
    let u = useRef()
    let fun =()=>{
        u.current.style.backgroundColor = "red"
        setVal(val={
            ...val,
            a:"123"
        })
    }
    useEffect(()=>{
        console.log("启动自毁");
        document.title = "么么哒"
    })
    return (
        <div>
            <p ref={u}>{val.a}</p>
            <button onClick={fun}>改</button>
        </div>
    )
}