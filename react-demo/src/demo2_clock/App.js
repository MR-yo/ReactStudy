import React, { Component } from 'react';
import './App.css';

function showTime (){
  var obj = document.getElementById("clock");
  var time = new Date();
  obj.innerHTML = time.toLocaleTimeString();
  setTimeout(showTime, 1000);
}

window.onload = showTime;

class ClockDemo extends Component {

  // 构造方法，类似 init
  constructor(prama){
    super(prama);

  }

  render() {
    return (
      <div className="App">

      <h1>This is a clock ~</h1>
      <span id="clock" className="App-clock"></span>

      <a href="javascript:new Date().toLocaleTimeString();" className="App-clock-a"> what time is it ? (新页面)</a>
      <a href="javascript:alert(new Date().toLocaleTimeString());" className="App-clock-a"> what time is it ? (alert)</a>

      </div>
    );
  }
}

// 计算阶乘并输出
// function caculate(n) {
//   if (n <= 1){
//     return n;
//   }else{
//     return n * caculate(n - 1);
//   }
// }

// for (let index = 1; index < 10; index++) {
//   document.write(index + "!=" + caculate(index) + "\n");
// }

// 输出操作系统名称
// window.confirm(window.navigator.platform);

// window.prompt("input what?");


export default ClockDemo;
