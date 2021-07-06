import React, { Component } from 'react'

export default class cs2 extends Component {

    fun=(val)=>{
        this.props.cb.bind(this,val)()
    }

    shouldComponentUpdate(nextProps,nextState){
        return this.props.cs!==nextProps.cs
    }

    render() {
        return (
            <div>
                cs组件2----{this.props.cs}----<input type="text" value={this.props.cs} onInput={(e)=>{this.fun(e.target.value)}}/>
            </div>
        )
    }
}
