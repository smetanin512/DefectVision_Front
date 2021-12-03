import React, { Component, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import socketIOClient from 'socket.io-client'
import MainContainer from './components/container/index'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { Form, Input, Button, Checkbox } from 'antd'

function App() {
  const [isLogined, setIsLogined] = useState(false)

  const onFinish = (values) => {
    console.log('Success:', values)
    setIsLogined(!isLogined)
  }

  return (
    <div>
      {isLogined && <MainContainer />}

      {!isLogined && (
        <div className="login-form auth-layout ">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  )
}

export default App
