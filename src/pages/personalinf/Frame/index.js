//by wgx
import { Button } from 'antd';
import Item from '../Item';
import React, { Component } from 'react';
import '../index.css';

export default class Frame extends Component {

  render() {
    const {accountinfs} = this.props
    const {personalinfs} = this.props
    return (
      <div>
        <div className="informationframe">
          <h2 className="frametitle">账户信息</h2>
          {
            accountinfs.map( inf =>{
              return<Item key={inf.id} {...inf}/>
            })
          }
        </div>
        <div className="informationframe">
          <h2 className="frametitle">个人信息</h2>
          {
            personalinfs.map( inf =>{
              return<Item key={inf.id} {...inf}/>
            })
          }
          <Button className="button1">编辑</Button>
        </div>
      </div>
    )
  }
}