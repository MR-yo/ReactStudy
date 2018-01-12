import React, { Component } from 'react';
import './App.css';
import logo from '../res/logo.svg';
import home from '../res/home-bg.jpg';
import baidulogo from '../res/baidu-logo.png';

// 外部属性声明
var hi_str = "string";
var hi_number = 123;
var hi_map = {"key1":"hi","key2":hi_array}
var hi_array = [1,2,3,4,5,hi_str,hi_number,hi_map];
var hi_object = {
  p1 : 123,
  p2 : 456,
  p3 : hi_map,
}
var helloFunc = () => {
  console.log('hello, world!');
}

function clickWeather(e) {
  // e 是事件对象
  console.log('clickWeather',e.target.id);
  // 1.用 target 获取对象
  e.target.style.color="blue";
  // 2.用 getElementById 获取对象, tip:原来 css 设置的 text-decoration 需要改为 textDecoration
  document.getElementById("weather").style.textDecoration="line-through";
  hi_testParams(hi_array,"hello","red");
}

// 测试函数传参
function hi_testParams(var1,var2,var3) {
  var1.forEach(element => {
    // 判断对象类型
    console.log(typeof element,element.constructor.name);
    if (element.constructor.name === "Number") {
      console.log("this is number",element);
    }
  });
  document.getElementById("weather").style.color=var3;
}

// 这是一个类
class BaiduDemo extends Component {

  // 构造方法，类似 init
  constructor(prama){
    super(prama);
    console.log(this.hello_str);
    console.log(this.hello_number);
    console.log(this.hello_array);
    console.log(this.hello_map);
    console.log(this.hello_func);
  }


  // 内部属性声明
  hello_str = "这是一个自己判断类型的属性";
  hello_number = 100;
  hello_array = [1,2,3,4,5,"hello"];
  hello_map = {"key1":"value1","key2":123};
  hello_func = () => {
    console.log("这是一个类型为方法的属性？")
  }

  clickAirStatus(params) {
    this.hello_number += 1;
    console.log("这是一个方法",this.hello_number);
  } 

  render() {
    return (
      <div className="App">

      {/* 背景图片 */}
      <div className="App-bgImage" style={{backgroundImage: `url(${home})`}}></div>
      {/* <img src={home} alt="" className="App-bgImage" /> */}

      {/* 上方导航栏 */}
      <div className="App-topNav">
        <div className="App-topNavBg">
          <div style={{display:"inline-block"}}>
            <p id="weather" className="App-topNavTextLeft" onClick={clickWeather}>杭州:  0℃ </p>
            <p id="air" className="App-topNavTextLeft" onClick={this.clickAirStatus.bind(this)} >轻度  103 </p>
            <p className="App-topNavTextLeft" onClick={helloFunc.bind(this)}>丨</p>
            <a href="" className="App-topNavTextLeft">换肤</a>
            <a href="" className="App-topNavTextLeft">消息</a>
            <a href="" className="App-topNavTextLeft">显示频道</a>
          </div>

          <div className="App-topNavRightBg">
            <a href="" className="App-topNavTextRight">新闻</a>
            <a href="" className="App-topNavTextRight">hao123</a>
            <a href="" className="App-topNavTextRight">地图</a>
            <a href="" className="App-topNavTextRight">视频</a>
            <a href="" className="App-topNavTextRight">贴吧</a>
            <a href="" className="App-topNavTextRight">学术</a>
            <a href="" className="App-topNavTextRight">用户名</a>
            <a href="" className="App-topNavTextRight">设置</a>
            <button id="morebtn" className="App-moreBtn" >更多产品</button>
          </div>
        </div>
      </div>

      <script>
        {
          // alert("123")
          // 如果这里写 js ,会在加载界面前调用，所以会取不到对象报错。
          // document.getElementById("morebtn")style.color="red"
        }
      </script>

      {/* logo */}
      {/* rel="noopener noreferrer" 防止钓鱼，更安全 */}
      <div className="App-center">
      <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
      <img src={baidulogo} alt="图片未出现时显示的文字" title="鼠标移上去会显示的字" className="App-logo" />
      </a>
      </div>

      {/* 输入框模块 */}
      <div className="App-input-bg">
        {/* 输入框 */}
        <input id="searchInput" className="App-input"/>
        {/* 语音 button */}
        <button className="App-imgBtn" ></button>
        {/* 识图 button */}
        <button className="App-imgBtn" style={{margin:"0 0 0 10px"}}></button>
        {/* 百度一下 button */}
        <button className="App-searchBtn" onClick={clickSearchBtn} >百度一下</button>
      </div>
      
      {/* 底部信息 */}
      <div className="App-bottom-bg">
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
          <a href="" className="App-bottomText" style={{width:"60px"}}>设为首页</a>
          <p className="App-bottomText" style={{margin:"270px auto 0px",width:"240px"}}>巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</p>
        </div>
        <p className="App-bottomText" style={{margin:"5px auto",display:"block"}}>备案:巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</p>
      </div>

      </div>
    );
  }
}

// 点击搜索 取出输入框中的内容 并弹窗
function clickSearchBtn(params) {
  var searchText = document.getElementById("searchInput");
  const answer = alert('search: ' + searchText.value);
}

export default BaiduDemo;
