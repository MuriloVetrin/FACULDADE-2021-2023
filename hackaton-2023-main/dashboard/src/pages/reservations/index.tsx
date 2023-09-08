/* eslint-disable @typescript-eslint/no-misused-promises */
import { Col, Row, Table } from 'antd';
import Button from 'n/components/UI/Button';
import { api } from 'n/utils/api';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { type Reservation } from 'n/server/api/routers/reservation';
import { type ColumnsType } from 'antd/es/table';
import TableActions from 'n/components/UI/TableActions';

const columns: ColumnsType<Reservation> = [
  {
    title: 'Student Name',
    dataIndex: 'student_name',
    key: 'student_name',
  },
  {
    title: 'Book Title',
    dataIndex: 'book_title',
    key: 'book_title',
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
  },
  {
    title: 'end_date',
    dataIndex: 'end_date',
    key: 'end_date',
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => <TableActions id={record.id} pathName='reservations'/>
  },
];

const ReservationsList: React.FC = () => {

  const router = useRouter()
  const {data} = api.reservation.getAll.useQuery()

  return(
    <>
      <Row>
        <Col span={24}>
          <Button text='Create New Reservation' onClick={() => router.push('/reservations/new')}/>
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

export default ReservationsList;