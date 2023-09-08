import { BookOutlined, CheckOutlined, FormOutlined, HighlightOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";
import Button from "n/components/UI/Button";
import { api } from "n/utils/api";
import { signIn, useSession } from "next-auth/react";
import { type FC } from "react";

export default function Home() {
  const { data: sessionData } = useSession();
  const { data } = api.auth.getCounts.useQuery();
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <HighlightOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.authors}</h2>
              <p className="leading-relaxed">Authors</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FormOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.courses}</h2>
              <p className="leading-relaxed">Courses</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <ShopOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.publishers}</h2>
              <p className="leading-relaxed">Publisers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <UserOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.students}</h2>
              <p className="leading-relaxed">Students</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <CheckOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.reservations}</h2>
              <p className="leading-relaxed">Reservations</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <BookOutlined className="text-indigo-500 w-12 h-12 mb-3 inline-block text-4xl"/>
              <h2 className="title-font font-medium text-3xl text-gray-900">{data?.books}</h2>
              <p className="leading-relaxed">Books</p>
            </div>
          </div>
          {sessionData && <Introduction userName={sessionData.user?.name}/>}
          {!sessionData && <LoginButton />}
        </div>
      </div>
    </section>
  );
}


const Introduction: FC<{userName?: string | null}> = ({
  userName
}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hello {userName}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        We believe in the transformative power of books and the essential role libraries play in fostering knowledge, creativity, and lifelong learning. As the central hub for managing and organizing library resources, our administration team is dedicated to providing seamless and efficient library operations, ensuring that our patrons have the best possible experience.
      </p>
    </div>
  )
}

const LoginButton: FC = () => {

  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font my-4 text-gray-900">Login to have full acess</h1>
      <Button text='Login' onClick={() => void signIn()} />
    </div>
  )
}
