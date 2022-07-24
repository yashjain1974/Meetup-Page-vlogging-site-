import AuthForm from "../../components/Auth/AuthForm"
import Head from 'next/head'
import React from "react";

const AuthPage = () => {

  return (
    <React.Fragment>
      <Head>
  <title>V-Meet : Login</title>
</Head>
<AuthForm />
    </React.Fragment>
  )
  ;
};

export default AuthPage;
