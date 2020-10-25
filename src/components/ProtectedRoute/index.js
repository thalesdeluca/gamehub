import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const { user } = useSelector(state => state.auth);

  return user ? (
    <Route {...props} />
  ) : <Redirect to="/login" />
}
