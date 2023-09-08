/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { notification } from "antd";
import axios, { type AxiosResponse } from "axios";

export async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

export const validateRequest = (resquest: AxiosResponse) => {
  if(resquest.status < 300) return true
  return false
}

type NewAuthor = {
  name: string,
  address: string,
  city: string,
  uf: string,
  phone: number,
}

export const deleteRequest = async (path: string) => {
  let res = false 
  try {
    await axios.delete(`http://127.0.0.1:8000/api/${path}`).then((request) => {
      res = validateRequest(request)
      if(res) notification.success({
        message: 'Deleted Succesfuly',
        description: ''
      })
    }).catch((e) => {
      notification.error({
        message: 'Error',
        description: e ? `${e}`: ''
      })
    })
  } catch(e) {
    notification.error({
      message: 'Error',
      description: e ? `${e}`: ''
    })
  }
  return res
}

export const createAuthor = async (payload: NewAuthor) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/authors', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updateAuthor = async (payload: NewAuthor, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/authors/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

type NewPublisher = NewAuthor

export const createPublisher = async (payload: NewPublisher) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/publishers', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updatePublisher = async (payload: NewPublisher, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/publishers/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

type NewCourse = {
  name: string,
  coordinator: string,
  duration: number,
}

export const createCourse = async (payload: NewCourse) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/courses', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updateCourse = async (payload: NewCourse, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/courses/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

type NewBook = {
  title: string,
  subtitle: string,
  isbn: string,
  image: string,
  place: string,
  year: number,
  publisher_id: number,
  author_id: number,
}

export const createBook = async (payload: NewBook) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/books', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updateBook = async (payload: NewBook, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/books/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

type NewStudent = {
  ra: string,
  name: string,
  address: string,
  city: string,
  uf: string,
  phone: number,
  course_id: number,
}

export const createStudent = async (payload: NewStudent) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/students', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updateStudent = async (payload: NewStudent, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/students/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

type NewReservation = {
  student_id: number,
  book_id: number,
  start_date: string,
  end_date: string
}

export const createReservation = async (payload: NewReservation) => {
  let res = false
  try {
    await axios.post('http://127.0.0.1:8000/api/reservations', payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}

export const updateReservation = async (payload: NewReservation, id: string) => {
  let res = false
  try {
    await axios.put(`http://127.0.0.1:8000/api/reservations/${id}`, payload).then((request) => {
      res = validateRequest(request)
    }).catch((e) => {
      console.log(e)
    })
  } catch(e) {
    console.log(e)
  }
  return res
}