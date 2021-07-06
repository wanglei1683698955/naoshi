import React, { Component } from 'react'
import actionCreator from '../store/actionCreator'
import {connect} from "react-redux"

import Cs1 from '../components/cs1'
import Cs2 from '../components/cs2'

import Hook from '../components/hook'
import Usereducer from '../components/usereducer'

class no extends Component {
    constructor(props){
        super(props)
        this.state = {
            text:this.props.state.publicModel.text,
            cs:"默认值"
        }
    }
    fun=(e)=>{
        this.props.dispatch(actionCreator.ceshi(e.target.value))
    }
    event=(v)=>{
        this.setState({
            cs:v
        })
    }
    render() {
        return (
            <div>
                <p>404-----测试redux封装------{this.props.state.publicModel.text}</p>
                <hr />
                <input type="text" onInput={(e)=>{this.fun(e)}}/>
                <hr />
                <Cs1 cs={this.state.cs} cb={this.event}/>
                <Cs2 cs={this.state.cs} cb={this.event}/>
                <p>子组件状态提升后父容器的值---{this.state.cs}</p>
                <hr />
                <Hook/>
                <hr />
                <Usereducer/>
            </div>
        )
    }
}

export default connect(state=>({state}))(no)