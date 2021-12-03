import React from 'react';
import { Button } from 'antd';
import request from '../../utils/request'
import useRequest from '../../utils/userequest'
import axios from 'axios'

class BigButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          color: "red",
          number: this.props.number,
          quotes: []
        };
    }

    componentDidMount() {
      //this.makeRequest();
      //axios.post('http://localhost:8080/auth')
     //.then(res=>console.log(1))

    }

    makeRequest = () => {
      request.post('/auth', {login:'admin', password:'password'})
    }

    makeRequest1 = () => {
      //axios.post('http://localhost:8081/auth')
      //.then(res=> console.log(2))
      var xhr = new XMLHttpRequest()

    // get a callback when the server responds
      xhr.addEventListener('load', () => {
       //update the state of the component with the result here
        console.log(xhr.responseText)
      })
    // open the request with the verb and the url
      xhr.open('GET', '/settings')
    // send the request
      xhr.send()
        //console.log(this.state.number)
        //request.post(`/settings`)
    }

    render() {
      return <div><h2>I am a {this.state.color} Car! {this.state.number}</h2>
      <Button type="primary" onClick={this.makeRequest} >Primary Button </Button></div>;
    }
  }
  
  export default BigButton;