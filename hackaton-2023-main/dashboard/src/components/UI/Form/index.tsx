/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Button, { ButtonReturn } from '../Button';


type FormProps = {
  children: React.ReactNode,
  onSubmit: () => any,
  redirect?: string, 
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  redirect = '/'
}) => {
  const submit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    void onSubmit()
  }
  return (
    <form onSubmit={(e) => submit(e)} className="w-full max-w-lg">
      {children}
      <div className="md:flex md:items-center md:space">
        <ButtonReturn text='Go back' pathname={redirect}/>
        <Button text='Submit' type='submit' />
      </div>
    </form>
  );
}


export default Form;