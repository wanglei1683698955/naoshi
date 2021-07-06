import React, { Component } from 'react'
import {LayoutStyled} from './styled/layout'

import {Route,Switch,Redirect} from "react-router-dom"
import PersonnelList from './personnelList'
import PersonnelAdd from './personnelAdd'
import CommodityList from './commodityList'
import CommodityAdd from './commodityAdd'
import OrderTotal from './orderTotal'
import No from './no'

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



export default class layout extends Component {
    menuClick=(obj)=>{
        switch (obj.key) {
            case "人员列表":
                this.props.history.push("/layout/personnelList")
                break;
            case "人员添加":
                this.props.history.push("/layout/personnelAdd")
                break;
            case "商品列表":
                this.props.history.push("/layout/commodityList")
                break;
            case "添加商品":
                this.props.history.push("/layout/commodityAdd")
                break;
            case "订单统计":
                this.props.history.push("/layout/orderTotal")
                break;
        
            default:
                break;
        }
    }
    render() {
        return (
            <LayoutStyled>
                <div>
                    <Layout>
                        <Header className="header">
                            <div className="logo" />
                            <div className="userOptions" style={{ float: "right" }}>
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                                    <Menu.Item key="1">管理员</Menu.Item>
                                    <Menu.Item key="2">修改密码</Menu.Item>
                                    <Menu.Item key="3">注销</Menu.Item>
                                </Menu>
                            </div>
                        </Header>
                        <Layout>
                            <Sider width={200} className="site-layout-background">
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['人员列表']}
                                    defaultOpenKeys={['人员管理']}
                                    style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu key="人员管理" icon={<UserOutlined />} title="人员管理">
                                        <Menu.Item key="人员列表" onClick={this.menuClick}>人员列表</Menu.Item>
                                        <Menu.Item key="人员添加" onClick={this.menuClick}>人员添加</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="商品管理" icon={<LaptopOutlined />} title="商品管理">
                                        <Menu.Item key="商品列表" onClick={this.menuClick}>商品列表</Menu.Item>
                                        <Menu.Item key="添加商品" onClick={this.menuClick}>添加商品</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="会计报表" icon={<NotificationOutlined />} title="会计报表">
                                        <Menu.Item key="订单统计" onClick={this.menuClick}>订单统计</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }} separator=">" >
                                    {/* <Breadcrumb.Item>人员管理</Breadcrumb.Item>
                                    <Breadcrumb.Item>人员列表</Breadcrumb.Item> */}
                                </Breadcrumb>
                                <Content
                                    className="site-layout-background"
                                    style={{
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    <div style={{ backgroundColor: "#ddd", height: "454px" }}>
                                        <Switch>
                                            <Route path="/layout/personnelList" component={PersonnelList} />
                                            <Route path="/layout/personnelAdd" component={PersonnelAdd} />
                                            <Route path="/layout/commodityList" component={CommodityList} />
                                            <Route path="/layout/commodityAdd" component={CommodityAdd} />
                                            <Route path="/layout/orderTotal" component={OrderTotal} />
                                            <Redirect from="/layout/" to="/layout/personnelList" exact />
                                            <Route component={No} />
                                        </Switch>
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </div>
            </LayoutStyled>
        )
    }
}
