"use client";

import React from 'react'
import AuthForm from '../../../components/forms/AuthForm';
import { signUpSchema } from "../../../lib/validations";


const Signin = () => {
  return (
    <AuthForm
      fromType="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: ""}}
      onSubmit={(data) => Promise.resolve({ success: true, data })} 
      />
  );
};

export default Signin
