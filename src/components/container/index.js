import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import KRPOld from './components/KRPOld';
import KRPCurrent from './components/KRPCurrent';
import KRPNew from './components/KRPNew';
import ZonaA from './components/ZonaA';
import ZonaB from './components/ZonaB';
import ZonaC from './components/ZonaC';
import socketIOClient from "socket.io-client"

const { SubMenu } = Menu;

const MainContainer = () => {

  const [current, setCurrent] = useState(1)

  const [socket, setSocket] = useState(null)
  const [data, setData] = useState(null)

  const components = {
    1: <KRPOld newdata1={data}/>,
    2: <KRPCurrent newdata1={data}/>,
    3: <KRPNew newdata1={data}/>,
    4: <ZonaA newdata1={data}/>,
    5: <ZonaB newdata1={data}/>,
    6: <ZonaC newdata1={data}/>,
    // 7: <Tara />,
    // 8: <Orders />,
  }

  useEffect(() => {
    if (socket === null) {
        setSocket(socketIOClient("localhost:4000"))
    }
    if (socket !== null) {
      socket.on('newdata', (newData) => {
          setData(newData)
        })
  }
  }, [socket])

  const sendSocket = (id) => {

    switch(id){
      case "1": {
        socket.emit('getOldKRP')
        break
      }
      case "2": {
        socket.emit('getCurrentKRP')
        break
      }
      case "3": {
        socket.emit('getNewKRP')
        break
      }
      case "4": {
        socket.emit('getZonaA')
        break
      }
      case "5": {
        socket.emit('getZonaB')
        break
      }
      case "6": {
        socket.emit('getZonaC')
        break
      }
      case "7": {
        socket.emit('getTara')
        break
      }
      case "8": {
        socket.emit('getOrders')
        break
      }
    }
  }

  const handleClick = (e) => {
    sendSocket(e.key)
    setCurrent(e.key)
  };

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <SubMenu key="SubMenu1" icon={<SettingOutlined />} title="КРП">
                    <Menu.Item key="1">Старые</Menu.Item>
                    <Menu.Item key="2">Текущие</Menu.Item>
                    <Menu.Item key="3">Новые</Menu.Item>
                </SubMenu>
                <SubMenu key="SubMenu2" icon={<SettingOutlined />} title="Зоны храниения">
                    <Menu.Item key="4">Зона А</Menu.Item>
                    <Menu.Item key="5">Зона Б</Menu.Item>
                    <Menu.Item key="6">Зона В</Menu.Item>
                </SubMenu>
                <Menu.Item key="7" icon={<MailOutlined />}>
                Тара
                </Menu.Item>
                <Menu.Item key="8" icon={<MailOutlined />}>
                Ордера
                </Menu.Item>
            </Menu>
            <div>
                {components[current]}
            </div>
      </div>
    );
}

export default MainContainer