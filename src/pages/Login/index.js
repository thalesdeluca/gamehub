import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components';
import Input from '../../components/Input';
import "./styles.scss"


function LoginPage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (props) => {
    console.log(props)
  }

  return (
    <div id="login">
      <span className="title-site">GameHUB</span>
      <span className="subtitle">Login</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" name="email" placeholder="Email" ref={register({ required: true })} errors={errors} error="Email is required" />
        <Input type="password" name="password" placeholder="Senha" ref={register({ required: true })} errors={errors} error="Password is required" />

        <Button className="btn-primary" type="submit">Login</Button>
        <Button className="btn-outline-secondary">Sign up</Button>
      </form>
    </div>
  )
}

export default LoginPage
