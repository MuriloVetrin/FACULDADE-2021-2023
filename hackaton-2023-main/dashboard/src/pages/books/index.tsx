/* eslint-disable @typescript-eslint/no-misused-promises */
import { Col, Row } from 'antd';
import Button from 'n/components/UI/Button';
import { api } from 'n/utils/api';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Card from 'n/components/UI/Card';
import TextInput from 'n/components/UI/TextInput';

const BooksList: React.FC = () => {

  const router = useRouter()
  const {data} = api.book.getAll.useQuery()
  const [filter, setFilter] = useState('')

  const books = data?.filter((book) => book.title.toUpperCase().includes(filter.toUpperCase()))

  return(
    <>
      <Row>
        <Col span={24}>
          <Button text='Create New Book' onClick={() => router.push('/books/new')}/>
        </Col>
      </Row>
      <Row>
        <Col className='mt-6' span={8}>
          <TextInput label={'Filter by book name'} placeholder={'50 tons'} onChange={(e) => setFilter(e.target.value)} value={filter} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className='flex flex-wrap gap-4 mt-4'>
            {books?.map((book) => (
              <Card key={book.id} img={book.image} title={book.title} desc={book.subtitle} onClick={() => router.push(`/books/new/${book.id}`)}/>
            ))}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default BooksList;