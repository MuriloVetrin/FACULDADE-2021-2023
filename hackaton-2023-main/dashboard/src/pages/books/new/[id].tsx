import TextInput from "n/components/UI/TextInput";
import { useEffect, useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { updateBook } from "n/utils/fetch";
import { api } from "n/utils/api";
import Select, { type SelectOptions } from "n/components/UI/SelectInput";

export default function EditBook() {
  
  const router = useRouter()
  const {id} = router.query
  const {data} = api.book.getById.useQuery(id ? parseInt(id as string) : 1)
  const publishers = api.publisher.getAll.useQuery()
  const authors = api.author.getAll.useQuery()

  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    image: '',
    isbn: '',
    place: '',
    year: '',
    publisher_id: '',
    author_id:'',
  })

  useEffect(() => {
    if(!data) return 
    setForm({
      title: data.title,
      isbn: data.isbn,
      place: data.place,
      image: data.image,
      subtitle: data.subtitle,
      year: data.year.toString(),
      publisher_id: data.publisher_id.toString(),
      author_id: data.author_id.toString(),
    })
  }, [data])

  const onSubmit = async () => {
    if(!id) return 
    const schema = z.object({
      title: z.string(),
      isbn: z.string(),
      image: z.string(),
      place: z.string(),
      subtitle: z.string(),
      year: z.number(),
      publisher_id: z.number(),
      author_id: z.number(),
    });

    const parsedForm = {
      ...form,
      year: parseInt(form.year),
      publisher_id: parseInt(form.publisher_id),
      author_id: parseInt(form.author_id),
    }

    const validatedData = schema.safeParse(parsedForm);
    
    if(validatedData.success) {
      await updateBook(parsedForm, id as string)
      notification.success({
        message:'Created sucessfully!!',
        description: ''
      })
      return router.push('/books')
    }

    if(validatedData.error){
      return notification.error({
        message: validatedData.error.errors[0]?.message,
        description: validatedData.error.errors[0]?.path
      })
    }
  }

  const publishersOptions: SelectOptions | undefined = publishers.data?.map((publisher) => {
    return {
      value: publisher.id,
      label: publisher.name
    }
  })

  const authorsOptions: SelectOptions | undefined = authors.data?.map((author) => {
    return {
      value: author.id,
      label: author.name
    }
  })

  return (
    <Form onSubmit={onSubmit} redirect="/books">
      <TextInput 
        label='title'
        placeholder="math 2"
        onChange={(e) => setForm({...form, title: e.target.value})}
        value={form.title}
      />
      <TextInput 
        label='subtitle'
        placeholder="book of math"
        onChange={(e) => setForm({...form, subtitle: e.target.value})}
        value={form.subtitle}
      />
      <TextInput 
        label='Image'
        placeholder="https://image.com"
        onChange={(e) => setForm({...form, image: e.target.value})}
        value={form.image}
      />
      <TextInput 
        label='place'
        placeholder="jose"
        onChange={(e) => setForm({...form, place: e.target.value})}
        value={form.place}
      />
      <TextInput 
        label='year'
        placeholder="2023"
        type='number'
        onChange={(e) => setForm({...form, year: e.target.value})}
        value={form.year}
      />
      <Select
        label='publisher'
        onChange={(e) => setForm({...form, publisher_id: e as string})}
        defaultValue={form.publisher_id}
        options={publishersOptions ?? []}
      />
      <Select
        label='author'
        onChange={(e) => setForm({...form, author_id: e as string})}
        defaultValue={form.author_id}
        options={authorsOptions ?? []}
      />
    </Form>
  );
}
