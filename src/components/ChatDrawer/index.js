import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChat, sendMessage } from '../../store/ducks/chat';
import Input from '../Input'
import Message from '../Message';
import { Spinner } from '../Spinner';
import "./styles.scss"

const ChatDrawer = ({ open }) => {
  const { user } = useSelector(state => state.auth)
  const { chat, chatLoading, messageLoading, message } = useSelector(state => state.chat);
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (open) {
        dispatch(getChat())
      }
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [open])

  const onChange = (e) => {
    setText(e?.target?.value)
  }

  const send = () => {
    dispatch(sendMessage(text));
    setText("")
  }

  const renderInput = () => user?.token && (
    <div class="input-group chat-input">
      <input className="form-control " type="text" placeholder="Say Hi" onChange={onChange} value={text} />
      <div class="input-group-append">

        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`drawer-container ${open && "on"}`}>
      {chatLoading && !chat?.length && (
        <div className="loading-chat">
          <Spinner dark />
        </div>
      )}

      <div className="drawer-content">

        {chat?.map((data) => (
          <Message key={data?.id} data={data} />
        ))}

        {message && messageLoading && (
          <Message you key={message} data={{ text: message, user: { name: "You" } }} />
        )}
      </div>
      {renderInput()}

    </div>
  )
}

export default ChatDrawer
