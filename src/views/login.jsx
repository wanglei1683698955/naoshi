import React, { Component } from 'react'
import {LoginStyled} from './styled/login.js'


import { Input } from 'antd';
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';

export default class login extends Component {
    loginBut=()=>{
        
    }
    render() {
        return (
            <LoginStyled>
                <div>
                    <div id="login">
                        <div className="loginPadd">
                            <h1>用户登录</h1>

                            <>
                                <br />
                                <Input size="large" placeholder="请输入您的账号" prefix={<UserOutlined />} />
                                <br />
                                <br />
                                <Input size="large" placeholder="请输入您的密码" prefix={<UnlockOutlined />} />
                                <br />
                                <br />
                            </>

                            <button className="loginBut" onClick={this.loginBut}>登 录</button>

                            <h2>企业注册申请</h2>

                        </div>
                    </div>
                </div>
            </LoginStyled>
        )
    }
}
