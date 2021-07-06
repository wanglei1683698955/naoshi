import React, { PureComponent } from 'react'

export default class cs1 extends PureComponent {

    fun=(val)=>{
        this.props.cb.bind(this,val)()
    }

    render() {
        return (
            <div>
                cs组件1----{this.props.cs}----<input type="text" value={this.props.cs} onInput={(e)=>{this.fun(e.target.value)}}/>
            </div>
        )
    }
}
