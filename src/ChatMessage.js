import React from 'react'
import { ChatDots, Person } from 'react-bootstrap-icons'
import './App.css'

export default function ChatMessage(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>

        {
 props.user ?(
    <span className='message-right'>
        <span className='message-text'>{props.message}</span>
        <Person className='message-icons'/>
    </span>
 ) :
 <span className='message-left'>
    <ChatDots className='message-icons'/>
    <span className='message-text'>{props.message}</span>
 </span>
        }
    </div>
  )
}
