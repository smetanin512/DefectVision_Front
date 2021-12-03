import { Card, Progress, Space } from 'antd';

function ZonaB(newdata1) {
    console.log(newdata1)
  const makeCards = () => {
    const result = []

    for (let i = 0; i < newdata1?.newdata1?.length; i++) {
      if ((newdata1.newdata1[i] !== null) && (newdata1.newdata1[i] !== undefined)) {
        result.push(
                <Card title={`Партия ${newdata1.newdata1[i].id}`} style={{ width: 300 }}>
                    <p>Номер партии {newdata1.newdata1[i].id}</p>
                    <p>Тип груза {newdata1.newdata1[i].type}</p>
                    <p>Действие {newdata1.newdata1[i].action}</p>
                    <p>Дата {newdata1.newdata1[i].date}</p>
                    <p>Загрузка <Progress type="circle" percent={newdata1.newdata1[i].load} /> </p>
                </Card>
        )
      }
    }

    return result
  }

  return (
      <div className="site-card-wrapper">
          <Space size={[8, 16]} wrap>
            {makeCards()}
            </Space>
      </div>
  );
}

export default ZonaB