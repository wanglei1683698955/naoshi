import React, { Component } from 'react'
import {PersonnelListStyled} from './styled/personnelList'

import { Table, Space } from 'antd';

export default class personnelList extends Component {
  constructor(props){
    super(props)
    this.state={
      Tshow:false,
      Tind:"",
      pagination:{
        total: null,
        pageSize:4
      },

      queryData:[
        
      ],

      data : [
        {
          key: '1',
          serialNumber:"NS0001",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '2',
          serialNumber:"NS0002",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '3',
          serialNumber:"NS0003",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '4',
          serialNumber:"NS0004",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '5',
          serialNumber:"NS0005",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '6',
          serialNumber:"NS0006",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '7',
          serialNumber:"NS0007",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '8',
          serialNumber:"NS0008",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '9',
          serialNumber:"NS0009",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
          key: '10',
          serialNumber:"NS0010",
          name:"呜起宠",
          IDnumber:"614224199604041213",
          phoneNumber:'17225161591',
          remark:""
        },
        {
            key: '11',
            serialNumber:"NS0011",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '12',
            serialNumber:"NS0012",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '13',
            serialNumber:"NS0013",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '14',
            serialNumber:"NS0014",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '15',
            serialNumber:"NS0015",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '16',
            serialNumber:"NS0016",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '17',
            serialNumber:"NS0017",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '18',
            serialNumber:"NS0018",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '19',
            serialNumber:"NS0019",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
          {
            key: '20',
            serialNumber:"NS0020",
            name:"呜起宠",
            IDnumber:"614224199604041213",
            phoneNumber:'17225161591',
            remark:""
          },
        
      ],


      columns : [
        {
          title: '编号',
          dataIndex: 'serialNumber',
          key: 'serialNumber',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '身份证号',
          dataIndex: 'IDnumber',
          key: 'IDnumber',
        },
        {
          title: '电话',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
          title: '备注',
          dataIndex: 'remark',
          key: 'remark',
        },
        {
          title: '动作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <button className="personnelListTabBut1" onClick={()=>{this.sec(text.key)}}>修改</button>
              <button className="personnelListTabBut2" onClick={()=>{this.del(text.key)}}>删除</button>
            </Space>
          ),
        },
      ],


    }

  }

  componentDidMount(){
    this.upData()
  }

  //修改与提交
  sec=(v)=>{
    this.setState({
      Tshow:true,
      Tind:v
    })
  }
  tijiao=()=>{
    let {q1,q2,q3,q4} = this.refs
    let newData = this.state.data
    newData.forEach((v)=>{
      if(v.key === this.state.Tind){
        v.name = q1.value
        v.IDnumber = q2.value
        v.phoneNumber = q3.value
        v.remark = q4.value
        this.setState({
          data:[...newData]
        })
        this.setState({
          pagination:{...this.state.pagination,total:this.state.queryData.length}
        })
        return
      }
    })
    this.setState({
      Tshow:false,
    })
    q1.value = ""
    q2.value = ""
    q3.value = ""
    q4.value = ""
  }
  //查询
  query=()=>{
    let t = this.refs.queryText.value
    if(!t){
      this.upData()
      return
    }
    let cont = true
    let res = []
    this.state.data.forEach((v)=>{
      if(v.serialNumber === t || v.name === t || v.IDnumber === t || v.phoneNumber === t){
        cont = false
        res.push(v)
      }
      
    })
    this.setState({
      queryData:res
    },()=>{
      this.setState({
        pagination:{...this.state.pagination,total:this.state.queryData.length}
      })
    })
    if(cont){
      this.setState({
        queryData:[]
      })
      this.setState({
        pagination:{...this.state.pagination,total:0}
      })
    }
  }
  //更新显示内容
  upData=()=>{
    let newData = this.state.data
    this.setState({
      queryData:[...newData]
    })
    this.setState({
      pagination:{...this.state.pagination,total:this.state.data.length}
    })
  }

  //添加
  add=()=>{
    if(this.addNS.value === ""){
      return
    }
    let newObj = {
      key: this.state.data.length + 1,
      serialNumber:this.addNS.value,
      name:"",
      IDnumber:"",
      phoneNumber:'',
      remark:""
    }
    let newData = this.state.data
    newData.unshift(newObj)
    this.setState({
      pagination:{...this.state.pagination,total:this.state.data.length+1}
    },()=>{
      this.setState({
        data:[...newData]
      },this.upData())
    })
    this.addNS.value = ""
  }


  //删除
  del=(t)=>{
    if(!window.confirm("确定要删除吗")){
      return
    }
    let newData = this.state.data
    newData.forEach((v,i)=>{
      if(v.key === t){
        newData.splice(i,1)
      }
    })
    this.setState({
      pagination:{...this.state.pagination,total:this.state.data.length}
    },()=>{
      this.setState({
        data:[...newData]
      },this.upData())
    })
    // this.forceUpdate();
  }
    
  
    render() {
        return (
            <PersonnelListStyled>
                <div>
                    <input className="personnelListSer1" type="text" placeholder="输入查询内容" ref="queryText"/>
                    <button className="personnelListSer2" onClick={this.query}>查询</button>
                    <input className="personnelListSer1" type="text" placeholder="输入添加编号" ref={(e)=>{this.addNS=e}}/>
                    <button className="personnelListSer2" onClick={this.add}>新建</button>
                    <div className="pos" style={{display:this.state.Tshow?"block":"none"}}>
                      <div className="quanp">
                        <div>
                          <input type="text" placeholder="姓名" ref="q1"/>
                          <input type="text" placeholder="身份证号" ref="q2"/>
                          <input type="text" placeholder="电话" ref="q3"/>
                          <input type="text" placeholder="备注" ref="q4"/>
                          <button onClick={this.tijiao}>提交</button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <Table 
                      className="personnelListTab"
                      columns={this.state.columns}
                      dataSource={this.state.queryData}
                      pagination={this.state.pagination}
                    />
                </div>
            </PersonnelListStyled>
        )
    }
}