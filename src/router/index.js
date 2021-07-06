import {Route,Switch,Redirect} from "react-router-dom"
import React, { Component } from 'react'

import Login from '../views/login'
import Layout from '../views/layout'
import No from '../views/no'

export default class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/layout" component={Layout} />
                    <Redirect from="/" to="/layout"  exact/>
                    <Route component={No} />
                </Switch>
            </div>
        )
    }
}
