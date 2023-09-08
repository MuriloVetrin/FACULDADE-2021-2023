/* eslint-disable @typescript-eslint/no-floating-promises */
import { BookOutlined, CheckOutlined, FormOutlined, HighlightOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Home from 'n/pages';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { type MenuInfo } from 'rc-menu/lib/interface';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;
type DefaultLayoutProps = {
  children: React.ReactNode;
} 

export const routes = [
  {
    name:'Home',
    path: '/',
    icon: HomeOutlined
  },
  {
    name:'Authors',
    path: '/authors',
    icon: HighlightOutlined
  },
  {
    name:'Courses',
    path: '/courses',
    icon: FormOutlined
  },
  {
    name:'Publisers',
    path: '/publishers',
    icon: ShopOutlined
  },
  {
    name:'Students',
    path: '/students',
    icon: UserOutlined
  },
  {
    name:'Reservations',
    path: '/reservations',
    icon: CheckOutlined
  },
  {
    name:'Books',
    path: '/books',
    icon: BookOutlined
  }
]

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}) => {
  const router = useRouter()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data: sessionData } = useSession();

  const loginButton = {
    name: sessionData ? 'Logout' : 'Login',
    path: 'login/logout',
    icon: sessionData ? LogoutOutlined : LoginOutlined
  }

  const selectedKey =  routes.findIndex((item) => router.pathname.includes(item.path)) + 1 ?? 1

  const navigation = async (path: string) => {
    await router.push(path)
  }
  
  const navigate = (e: MenuInfo) => {
    const {key} = e
    let path =  '/'

    if(parseInt(key) > routes.length) {
      return sessionData ? signOut() : signIn()
    }

    routes.forEach((route, i) => {
      if(i + 1 === parseInt(key)) path = route.path
    })

    navigation(path)
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" >
          <img src="/UNIBOOKS.png" alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => void navigate(e)}
          defaultSelectedKeys={[selectedKey.toString()]}
          items={[...routes, loginButton].map(
            (route, index) => ({
              key: String(index + 1),
              icon: React.createElement(route.icon),
              label: route.name,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: '87vh', background: colorBgContainer, margin: 'auto' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Hackaton ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;