import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from '../../components';
import Input from '../../components/Input';
import { games } from '../../constants';
import { login } from '../../store/ducks/auth';
import "./styles.scss"


function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, userLoading } = useSelector(state => state.auth)
  const { game, score } = useSelector(state => state.game)
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (user?.token) {
      history.push(game || score ? `${games[game]?.to}` : "/")
    }
  }, [user])

  const onSubmit = (props) => {
    dispatch(login(props))
  }

  return (
    <div id="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="title-site" >GameHUB</span>
      </Link>

      <span className="subtitle">Login</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" name="email" placeholder="Email" ref={register({ required: true })} errors={errors} error="Email is required" />
        <Input type="password" name="password" placeholder="Senha" ref={register({ required: true })} errors={errors} error="Password is required" />

        {userLoading ? (
          <Spinner />
        ) : (
            <Button className="btn-primary" type="submit">Login</Button>
          )}
        <Button className="btn-outline-secondary">Sign up</Button>
      </form>
    </div>
  )
}

export default LoginPage
