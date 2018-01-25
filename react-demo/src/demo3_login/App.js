import React, { Component } from 'react';
import './App.css';
import '../lib/buttons.css';
import logo from '../res/logo.svg'
import showImg from '../res/img01.png'
import loginBg from '../res/img02.png'

class FormDemo extends Component {

  // 构造方法，类似 init
  constructor(prama){
    super(prama);

  }

  render() {
    return (
      <div className="App">

      <div className="App-topView">
        <img src={logo} alt="" className="App-logo" />
        <p className="App-topTitle">登录界面的标题</p>
      </div>

      <div className="App-bottomView">
        <div id="showImage" className="App-showImage" ></div>
        <div className="login-bg">
          <p className="login-title">网站登录系统</p>

          <form action="" method="post">
				    <table className="login-table">
              <tr>
                <td colSpan="2"><input name="" type="text" className="login-userName" placeholder="用户名"/></td>
              </tr>
              <tr>
                <td colSpan="2"><input name="" type="password" className="login-password" placeholder="密码"/></td>
              </tr>
              <tr>
                <td>
                  <input name="" type="text" className="login-verifyCode-input" placeholder="验证码"/>
                </td>
                <td>
                  <span className="login-verifyCode">ABCD</span>
                </td>
              </tr>
              <tr>
                <td colSpan="2"  style={{fontSize:"10px"}}><input className="login-remenberPwd" name="" type="checkbox" />记住密码</td>
              </tr>
              <tr>
                <td colSpan="2"><input className="button button-glow button-rounded button-raised button-primary" style={{margin:"20px auto",textAlign:"center",width:"270px"}} type="submit" value="登录"/></td>
              </tr>
					  </table>
				  </form>

        </div>
      </div>

      </div>
    );
  }
}

export default FormDemo;
