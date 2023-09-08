import { type AppType } from "next/app";
import { api } from "n/utils/api";
import "n/styles/globals.css";
import DefaultLayout from "n/components/Layout";
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({ 
  Component, 
  pageProps: {session, ...pageProps}
}) => {
  return (
    <>
      <Head>
        <title>UniBooks</title>
        <meta name="description" content="Unibooks library" />
        <link rel="icon" href="/UNIBOOKS.png" />
      </Head>
      <SessionProvider session={session}>
        <DefaultLayout>
          <Component {...pageProps}/>
        </DefaultLayout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
