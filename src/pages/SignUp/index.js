import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Spinner } from "../../components";
import Input from "../../components/Input";
import { signup } from "../../store/ducks/auth";
import "./styles.scss";

function SignupPage() {
  const { user, userLoading } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (user?.token) {
      history.push("/");
    }
  }, [user]);

  const onSubmit = (props) => {
    dispatch(signup(props));
  };

  return (
    <div id="signup">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="title-site">Games</span>
      </Link>

      <span className="subtitle">Sign Up</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="name"
          placeholder="John Doe"
          ref={register({ required: true })}
          errors={errors}
          error="Name is required"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
          errors={errors}
          error="Email is required"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
          errors={errors}
          error="Senha is required"
        />

        {userLoading ? (
          <Spinner />
        ) : (
          <Button className="btn-primary" type="submit">
            Sign up
          </Button>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
