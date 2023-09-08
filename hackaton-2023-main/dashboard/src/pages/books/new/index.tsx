import TextInput from "n/components/UI/TextInput";
import { useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { createBook } from "n/utils/fetch";
import Select, { type SelectOptions } from "n/components/UI/SelectInput";
import { api } from "n/utils/api";

export default function NewBook() {

  const router = useRouter()

  const publishers = api.publisher.getAll.useQuery()
  const authors = api.author.getAll.useQuery()

  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    isbn: '',
    place: '',
    image: '',
    year: '',
    publisher_id: '',
    author_id:'',
  })

  const onSubmit = async () => {
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
      await createBook(parsedForm)
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
    <Form onSubmit={onSubmit} redirect="/book">
      <TextInput 
        label='title'
        placeholder="math 2"
        onChange={(e) => setForm({...form, title: e.target.value})}
        value={form.title}
      />
      <TextInput 
        label='subtitle'
        placeholder="jose"
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
