import api from "../../config/api"

const Types = {
  AUTH_LOGIN_USER: "AUTH/LOGIN_USER",
  AUTH_LOGIN_USER_SUCCESS: "AUTH/LOGIN_USER_SUCESS",
  AUTH_LOGIN_USER_FAILED: "AUTH/LOGIN_USER_FAILED",

  AUTH_SIGNUP_USER: "AUTH/SIGNUP_USER",
  AUTH_SIGNUP_USER_SUCCESS: "AUTH/SIGNUP_USER_SUCESS",
  AUTH_SIGNUP_USER_FAILED: "AUTH/SIGNUP_USER_FAILED",


  AUTH_LOGOUT_USER: "AUTH/LOGOUT_USER",
}

const INIT_STATE = {
  user: null,
  userLoading: false,
  userError: null,

  signupError: null
}

const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.AUTH_LOGIN_USER:
      return {
        ...state,
        user: null,
        userLoading: true,
        userError: null
      }

    case Types.AUTH_LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      }

    case Types.AUTH_LOGIN_USER_FAILED:
      return {
        ...state,
        userLoading: false,
        userError: action.payload
      }

    case Types.AUTH_SIGNUP_USER:
      return {
        ...state,
        user: null,
        userLoading: true,
        signupError: null
      }

    case Types.AUTH_SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      }

    case Types.AUTH_SIGNUP_USER_FAILED:
      return {
        ...state,
        userLoading: false,
        signupError: action.payload
      }

    case Types.AUTH_LOGOUT_USER:
      return {
        ...state,
        user: null
      }


    default:
      return state;
  }
}

const login = ({ email, password }) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: Types.AUTH_LOGIN_USER });
      const { data } = await api.post("/login", { email, password })
      if (data) {
        localStorage.setItem("@gamehub-token", String(data?.token))
        dispatch({ type: Types.AUTH_LOGIN_USER_SUCCESS, payload: data })
      }

    } catch (err) {
      dispatch({ type: Types.AUTH_LOGIN_USER_FAILED, payload: err })
    }
  }
}

const logout = () => {
  return (dispatch) => {
    dispatch({ type: Types.AUTH_LOGOUT_USER })
    localStorage.removeItem("@gamehub-token")
  }
}

const signup = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.AUTH_SIGNUP_USER });
      const { data } = await api.post("/signup", body)
      if (data) {
        localStorage.setItem("@gamehub-token", String(data?.token))
        dispatch({ type: Types.AUTH_SIGNUP_USER_SUCCESS, payload: data })
      }

    } catch (err) {
      dispatch({ type: Types.AUTH_SIGNUP_USER_FAILED, payload: err })
    }
  }
}

export {
  login,
  logout,
  signup
}

export default auth;