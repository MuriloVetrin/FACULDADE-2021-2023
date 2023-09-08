/* eslint-disable @typescript-eslint/no-misused-promises */
import { Col, Row, Table } from 'antd';
import Button from 'n/components/UI/Button';
import { api } from 'n/utils/api';
import { useRouter } from 'next/router';
import React from 'react';
import { type ColumnsType } from 'antd/es/table';
import TableActions from 'n/components/UI/TableActions';
import { type Publisher } from 'n/server/api/routers/publisher';

const columns: ColumnsType<Publisher> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'UF',
    dataIndex: 'uf',
    key: 'uf',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => <TableActions id={record.id} pathName='publishers'/>
  },
];


const PublishersList: React.FC = ({

}) => {
  const router = useRouter()
  const {data} = api.publisher.getAll.useQuery()

  return(
    <>
      <Row>
        <Col span={24}>
          <Button text='Create New Publisher' onClick={() => router.push('/publishers/new')}/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
    </>

  )
}

export default PublishersList;