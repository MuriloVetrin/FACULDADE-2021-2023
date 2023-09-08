/* eslint-disable @typescript-eslint/no-misused-promises */
import { Col, Row, Table } from 'antd';
import Button from 'n/components/UI/Button';
import { api } from 'n/utils/api';
import { useRouter } from 'next/router';
import React from 'react';
import { type ColumnsType } from 'antd/es/table';
import TableActions from 'n/components/UI/TableActions';
import { type Course } from 'n/server/api/routers/course';

const columns: ColumnsType<Course> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Coordinator',
    dataIndex: 'coordinator',
    key: 'coordinator',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => <TableActions id={record.id} pathName='courses'/>
  },
];


const CoursesList: React.FC = ({

}) => {
  const router = useRouter()
  const {data} = api.course.getAll.useQuery()

  return(
    <>
      <Row>
        <Col span={24}>
          <Button text='Create New Course' onClick={() => router.push('/courses/new')}/>
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

export default CoursesList;