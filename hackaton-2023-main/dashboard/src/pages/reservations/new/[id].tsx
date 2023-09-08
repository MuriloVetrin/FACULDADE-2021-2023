import { useEffect, useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { updateReservation } from "n/utils/fetch";
import { api } from "n/utils/api";
import Select, { type SelectOptions } from "n/components/UI/SelectInput";
import DatePicker, { type RangePickerValues } from "n/components/UI/DatePicker";
import moment from "moment";

export default function EditReservation() {
  
  const router = useRouter()
  const {id} = router.query
  const {data} = api.reservation.getById.useQuery(id ? parseInt(id as string) : 1)
  const students = api.student.getAll.useQuery()
  const books = api.book.getAll.useQuery()
  const [timeRange, setTimeRange] = useState<RangePickerValues>([
    moment(),
    moment().add(1, 'M'),
  ])
  const [form, setForm] = useState({
    student_id: '',
    book_id: '',
  })

  useEffect(() => {
    if(!data) return 
    setForm({
      student_id: data.student_id.toString(),
      book_id: data.book_id.toString(),
    })
  }, [data])

  const onSubmit = async () => {
    if(!id) return 
    const schema = z.object({
      student_id: z.number(),
      book_id: z.number(),
      start_date: z.string(),
      end_date: z.string()
    });

    const parsedForm = {
      start_date: timeRange[0].format('YYYY-MM-DD'),
      end_date: timeRange[1].format('YYYY-MM-DD'),
      student_id: parseInt(form.student_id),
      book_id: parseInt(form.book_id),
    }

    const validatedData = schema.safeParse(parsedForm);
    
    if(validatedData.success) {
      await updateReservation(parsedForm, id as string)
      notification.success({
        message:'Created sucessfully!!',
        description: ''
      })
      return router.push('/reservations')
    }

    if(validatedData.error){
      return notification.error({
        message: validatedData.error.errors[0]?.message,
        description: validatedData.error.errors[0]?.path
      })
    }
  }

  const studentsOptions: SelectOptions | undefined = students.data?.map((publisher) => {
    return {
      value: publisher.id,
      label: publisher.name
    }
  })
  const booksOptions: SelectOptions | undefined = books.data?.map((book) => {
    return {
      value: book.id,
      label: book.title
    }
  })

  return (
    <Form onSubmit={onSubmit} redirect="/reservations">
      <Select
        label='Student'
        onChange={(e) => setForm({...form, student_id: e as string})}
        defaultValue={form.student_id}
        options={studentsOptions ?? []}
      />
      <Select
        label='Book'
        onChange={(e) => setForm({...form, book_id: e as string})}
        defaultValue={form.book_id}
        options={booksOptions ?? []}
      />
      <DatePicker
        label='Start date and end Date'
        allowClear={false}
        onChange={(e) => setTimeRange(e)}
      />
    </Form>
  );
}
