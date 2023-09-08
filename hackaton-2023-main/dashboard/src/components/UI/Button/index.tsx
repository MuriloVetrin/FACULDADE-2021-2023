/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import React from 'react';


type ButtonProps = {
  text: string,
  type?: "submit" | "reset" | undefined
  onClick?: () => any
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  onClick
}) => {

  return (
    <div className="md:w-3/3">
      <button
        onClick={onClick} 
        className="shadow bg-blue-500 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
        type={type}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

type ButtonReturnProps = ButtonProps & {
  pathname: string
}

export const ButtonReturn: React.FC<ButtonReturnProps> = ({
  text,
  onClick,
  pathname
}) => {
  const router = useRouter()

  const redirect = async () => {
    if(onClick) onClick()
    await router.push(pathname)
  }

  return (
    <div className="md:w-3/3 mr-auto mb-4">
      <button
        onClick={redirect} 
        className="shadow bg-red-500 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex items-center gap-3" 
        type={'button'}
      >
       <ArrowLeftOutlined /> {text}
      </button>
    </div>
  )
}
