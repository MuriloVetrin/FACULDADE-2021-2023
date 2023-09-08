import TextInput from "n/components/UI/TextInput";
import { useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { createStudent } from "n/utils/fetch";
import Select, { type SelectOptions } from "n/components/UI/SelectInput";
import { api } from "n/utils/api";

export default function NewStudent() {

  const router = useRouter()
  const course = api.course.getAll.useQuery()

  const [form, setForm] = useState({
    ra: '',
    name: '',
    address: '',
    city: '',
    uf: '',
    phone: '',
    course_id: '',
  })

  const onSubmit = async () => {
    const schema = z.object({
      ra: z.string(),
      name: z.string(),
      address: z.string(),
      city: z.string(),
      uf: z.string(),
      phone: z.number(),
      course_id: z.number(),
    });

    const parsedForm = {
      ...form,
      phone: parseInt(form.phone),
      course_id: parseInt(form.course_id),
    }
    const validatedData = schema.safeParse(parsedForm);
    
    if(validatedData.success) {
      await createStudent(parsedForm)
      notification.success({
        message:'Created sucessfully!!',
        description: ''
      })
      return router.push('/students')
    }

    if(validatedData.error){
      return notification.error({
        message: validatedData.error.errors[0]?.message,
        description: validatedData.error.errors[0]?.path
      })
    }
  }

  const coursesOptions: SelectOptions | undefined = course.data?.map((publisher) => {
    return {
      value: publisher.id,
      label: publisher.name
    }
  })

  return (
    <Form onSubmit={onSubmit} redirect="/students">
      <TextInput 
        label='RA'
        placeholder="321"
        onChange={(e) => setForm({...form, ra: e.target.value})}
        value={form.ra}
        type='number'
      />
      <TextInput 
        label='Name'
        placeholder="jose"
        onChange={(e) => setForm({...form, name: e.target.value})}
        value={form.name}
      />
      <TextInput 
        label='address'
        placeholder="av 123"
        onChange={(e) => setForm({...form, address: e.target.value})}
        value={form.address}
      />
      <TextInput 
        label='city'
        placeholder="san jose"
        onChange={(e) => setForm({...form, city: e.target.value})}
        value={form.city}
      />
      <TextInput 
        label='uf'
        placeholder="2023"
        type='number'
        onChange={(e) => setForm({...form, uf: e.target.value})}
        value={form.uf}
      />
      <TextInput 
        label='phone'
        placeholder="44 9 9999 9999"
        type='number'
        onChange={(e) => setForm({...form, phone: e.target.value})}
        value={form.phone}
      />
      <Select
        label='Course'
        onChange={(e) => setForm({...form, course_id: e as string})}
        defaultValue={parseInt(form.course_id)}
        options={coursesOptions ?? []}
      />
    </Form>
  );
}
