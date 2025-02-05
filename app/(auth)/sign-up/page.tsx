import { signUpSchema } from '@/lib/validations'
import React from 'react'
import AuthForm from '@/components/AuthForm'

const page = () => {
    return (
      <AuthForm
          type="SIGN_UP"
          schema={signUpSchema}
          defaultValues={{
              email: "",
              password: "",
              fullName: "",
              universityCard: "",
              universityId: "",
          }}
          onSubmit={() => {}}
       />
    )
}
  
export default page