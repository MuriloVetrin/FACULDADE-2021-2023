import TextInput from "n/components/UI/TextInput";
import { useEffect, useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { updateCourse } from "n/utils/fetch";
import { api } from "n/utils/api";

export default function EditCourse() {
  
  const router = useRouter()
  const {id} = router.query
  const {data} = api.course.getById.useQuery(id ? parseInt(id as string) : 1)

  const [form, setForm] = useState({
    name: '',
    coordinator: '',
    duration: '',
  })

  useEffect(() => {
    if(!data) return 
    setForm({
      name: data.name,
      coordinator: data.coordinator,
      duration: data.duration.toString(),
    })
  }, [data])

  const onSubmit = async () => {
    if(!id) return 
    const schema = z.object({
      name: z.string(),
      coordinator: z.string(),
      duration: z.number(),
    });

    const parsedForm = {
      ...form,
      duration: parseInt(form.duration)
    }
    const validatedData = schema.safeParse(parsedForm);
    
    if(validatedData.success) {
      await updateCourse(parsedForm, id as string)
      notification.success({
        message:'Created sucessfully!!',
        description: ''
      })
      return router.push('/courses')
    }

    if(validatedData.error){
      return notification.error({
        message: validatedData.error.errors[0]?.message,
        description: validatedData.error.errors[0]?.path
      })
    }
    
  }

  return (
    <Form onSubmit={onSubmit} redirect="/courses">
      <TextInput 
        label='name'
        placeholder="math"
        onChange={(e) => setForm({...form, name: e.target.value})}
        value={form.name}
      />
      <TextInput 
        label='coordinator'
        placeholder="jose"
        onChange={(e) => setForm({...form, coordinator: e.target.value})}
        value={form.coordinator}
      />
      <TextInput 
        label='duration'
        placeholder="32"
        type='number'
        onChange={(e) => setForm({...form, duration: e.target.value})}
        value={form.duration}
      />
    </Form>
  );
}
