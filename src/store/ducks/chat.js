import api from "../../config/api"

const Types = {
  CHAT_SEND_MESSAGE: "CHAT/SEND_MESSAGE",
  CHAT_SEND_MESSAGE_SUCCESS: "CHAT/SEND_MESSAGE_SUCCESS",
  CHAT_SEND_MESSAGE_FAILED: "CHAT/SEND_MESSAGE_FAILED",

  CHAT_GET_MESSAGE: "CHAT/GET_MESSAGES",
  CHAT_GET_MESSAGES_SUCCESS: "CHAT/GET_MESSAGES_SUCCESS",
  CHAT_GET_MESSAGES_FAILED: "CHAT/GET_MESSAGES_FAILED",
}

const INIT_STATE = {
  chat: [],
  chatLoading: false,
  chatError: null,

  message: null,
  messageLoading: false,
  messageError: null
}

const chat = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.CHAT_GET_MESSAGE:
      return {
        ...state,
        chatLoading: true,
        chatError: null,
      }

    case Types.CHAT_GET_MESSAGES_SUCCESS:
      return {
        ...state,
        chat: action.payload,
        chatLoading: false,
      }

    case Types.CHAT_GET_MESSAGES_FAILED:
      return {
        ...state,
        chatLoading: false,
        chatError: action.payload,
      }

    case Types.CHAT_SEND_MESSAGE:
      return {
        ...state,
        message: action.payload,
        messageLoading: true,
        messageError: null
      }

    case Types.CHAT_SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        chat: [...state.chat, state.message],
        message: null,
        messageLoading: false,
        messageError: null
      }

    case Types.CHAT_SEND_MESSAGE_FAILED:
      return {
        ...state,
        messageLoading: false,
        messageError: action.payload
      }

    default:
      return state;
  }
}

const sendMessage = (message) => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.CHAT_SEND_MESSAGE, payload: message })
      const { data } = await api.post("/chat", { message });

      if (data?.sent) {
        dispatch({ type: Types.CHAT_SEND_MESSAGE_SUCCESS })
      }

    } catch (err) {
      dispatch({ type: Types.CHAT_SEND_MESSAGE_FAILED, payload: err })
    }
  }
}

const getChat = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.CHAT_GET_MESSAGE })
      const { data } = await api.get("/chat");

      if (data) {
        dispatch({ type: Types.CHAT_GET_MESSAGES_SUCCESS, payload: data })
      }

    } catch (err) {
      dispatch({ type: Types.CHAT_GET_MESSAGES_FAILED, payload: err })
    }
  }
}

export { sendMessage, getChat }

export default chat;