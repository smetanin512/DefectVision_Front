import { Table, Badge, Menu, Dropdown, Space, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'

function KRPCurrent(newdata1) {

  const expandedRowRender = () => {
    let data = []
    const columns = [
      { title: 'Номер вагона', dataIndex: 'id', key: 'id' },
      { title: 'Брак', dataIndex: 'defect', key: 'defect' },
      { 
        title: 'Фото до', dataIndex: 'photoIn', key: 'photoIn',
        render: (text) => {
          return(
          <Image
            width={200}
            src={`${process.env.PUBLIC_URL}/${text}`}
          />
          )
        } 
      },
      { 
        title: 'Фото после', dataIndex: 'photoOut', key: 'photoOut',
        render: (text) => {
          return(
          <Image
            width={200}
            src={`${process.env.PUBLIC_URL}/${text}`}
          />
          )
        }
      },
    ];

    console.log(myVagons)
    for (let i = 0; i < 5; ++i) {
      data.push({
        key: i,
        id: myVagons[0][i].id,
        defect: myVagons[0][i].defect + ' %',
        photoIn: myVagons[0][i].photoIn,
        photoOut: myVagons[0][i].photoOut,
      });
      console.log(data)
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

    const columns = [
      { title: 'Номер', dataIndex: 'id', key: 'id' },
      { title: 'Количество вагонов', dataIndex: 'count', key: 'count' },
      { title: 'Тип груза', dataIndex: 'type', key: 'type' },
      { title: 'Дата загрузки', dataIndex: 'dateIn', key: 'dateIn' },
      { title: 'Дата разгрузки', dataIndex: 'dateOut', key: 'dateOut' },
    ];

  const [myData, setMyData] = useState(null)
  const [myVagons, setMyVagons] = useState(null)

  useEffect(() => {
    if (newdata1?.newdata1) {
      let result = []
      let resVag = []
      for (let i = 0; i < newdata1?.newdata1?.length; i++){
        result.push({
          key: i,
          id: newdata1.newdata1[i].id,
          count: newdata1.newdata1[i].count,
          type: newdata1.newdata1[i].type,
          dateIn: newdata1.newdata1[i].dateIn,
          dateOut: newdata1.newdata1[i].dateOut,
        })

        let res = []
        for (let j = 0; j < newdata1?.newdata1[i]?.vagons.length; j++) {
          res.push({
            key: i,
            id: newdata1.newdata1[i].vagons[j].id,
            defect: newdata1.newdata1[i].vagons[j].defect,
            photoIn: newdata1.newdata1[i].vagons[j].photoIn,
            photoOut: newdata1.newdata1[i].vagons[j].photoOut,
          })
        }

        resVag.push(res)
      }
      setMyVagons(resVag)
      setMyData(result)
    }
  }, [newdata1])

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={myData}
      pagination={false}
    />
  );
}

export default KRPCurrent