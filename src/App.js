import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import socketIOClient from "socket.io-client"
import MainContainer from './components/container/index'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "localhost:4000",
    }
    this.socket = socketIOClient(this.state.endpoint);
  };

  componentDidMount(){
    this.socket.on('newdata', (data) => {
      console.log(data)
    })
  }
  makeRequest = () => {
    this.socket.emit('script1')
    console.log('emit')
  }

  render() {
    return (
      <MainContainer />
    // <div className="App">

    //   <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">

    //   <div class="color1 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 py-3">
    //       <h2 class="display-5">Функция 1</h2>
    //       <p class="lead">Функция 1 запускает олололо</p>
    //       <button type="button" onClick={this.makeRequest} class="btn btn-primary btn-lg">Включить</button>
    //     </div>
    //   </div>
    //   <div class="color2 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 p-3">
    //       <h2 class="display-5">Функция 2</h2>
    //       <p class="lead">Функция 2 запускает олололо</p>
    //       <button type="button" class="btn btn-primary btn-lg">Запустить</button>
    //     </div>
    //   </div>
  
    // </div>
  
    // <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  
    //   <div class="color3 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 p-3">
    //       <h2 class="display-5">Функция 3</h2>
    //       <p class="lead">Функция 3 запускает олололо</p>
    //       <button type="button" class="btn btn-primary btn-lg">Включить</button>
    //     </div>
    //   </div>
    //   <div class="color4 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 py-3">
    //       <h2 class="display-5">Функция 4</h2>
    //       <p class="lead">Функция 4 запускает олололо</p>
    //       <button type="button" class="btn btn-primary btn-lg">Запустить</button>
    //     </div>
    //   </div>
  
    // </div>

    // <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  
    //   <div class="color5 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 p-3">
    //       <h2 class="display-5">Функция 5</h2>
    //       <p class="lead">Функция 5 запускает олололо</p>
    //       <button type="button" class="btn btn-primary btn-lg">Включить</button>
    //     </div>
    //   </div>
    //   <div class="color6 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    //     <div class="my-3 py-3">
    //       <h2 class="display-5">Функция 6</h2>
    //       <p class="lead">Функция 6 запускает олололо</p>
    //       <button type="button" class="btn btn-primary btn-lg">Запустить</button>
    //     </div>
    //   </div>
  
    // </div>

    // </div>
  );
  }
}

export default App;
