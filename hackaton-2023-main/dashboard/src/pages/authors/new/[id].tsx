import TextInput from "n/components/UI/TextInput";
import { useEffect, useState } from "react";
import { z } from "zod";
import Form from "n/components/UI/Form";
import { notification } from "antd";
import { useRouter } from 'next/router'
import { updateAuthor } from "n/utils/fetch";
import { api } from "n/utils/api";

export default function EditAuthor() {
  
  const router = useRouter()
  const {id} = router.query
  const {data} = api.author.getById.useQuery(id ? parseInt(id as string) : 1)

  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    uf: '',
    phone: '',
  })

  useEffect(() => {
    if(!data) return 
    setForm({
      name: data.name,
      address: data.address,
      city: data.city,
      uf: data.uf,
      phone: data.phone.toString(),
    })
  }, [data])

  const onSubmit = async () => {
    if(!id) return 
    const schema = z.object({
      name: z.string(),
      address: z.string(),
      city: z.string(),
      uf: z.string(),
      phone: z.number(),
    });

    const parsedForm = {
      ...form,
      phone: parseInt(form.phone)
    }
    const validatedData = schema.safeParse(parsedForm);
    
    if(validatedData.success) {
      await updateAuthor(parsedForm, id as string)
      notification.success({
        message:'Created sucessfully!!',
        description: ''
      })
      return router.push('/authors')
    }

    if(validatedData.error){
      return notification.error({
        message: validatedData.error.errors[0]?.message,
        description: validatedData.error.errors[0]?.path
      })
    }
    
  }

  return (
    <Form onSubmit={onSubmit} redirect="/authors">
      <TextInput 
        label='name'
        placeholder="jose"
        onChange={(e) => setForm({...form, name: e.target.value})}
        value={form.name}
      />
      <TextInput 
        label='address'
        placeholder="av abcd"
        onChange={(e) => setForm({...form, address: e.target.value})}
        value={form.address}
      />
      <TextInput 
        label='city'
        placeholder="pindamonhangaba"
        onChange={(e) => setForm({...form, city: e.target.value})}
        value={form.city}
      />
      <TextInput 
        label='UF'
        placeholder="parana"
        onChange={(e) => setForm({...form, uf: e.target.value})}
        value={form.uf}
      />
      <TextInput 
        label='phone'
        placeholder="44 9 9999 9999"
        onChange={(e) => setForm({...form, phone: e.target.value})}
        value={form.phone}
      />
    </Form>
  );
}
