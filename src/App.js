import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Button } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import { analyze } from './utils';
import download from './download.jpg';
const App = () => {
  const[messages,setMessages]=useState([
{
  message:'Hi,may I have your name?'
},

  ]);
  const[text,setText]=useState('');
  const onSend=() =>{
    let list=[...messages,{message:text,user:true}];
    if(list.length>2){
        const reply=analyze(text)
        list=[
          ...list,{message :reply}
        ]
    }else{
      list=[
        ...list,{
          message:`Hi, ${text}`
        },
        {
          message:'How can i help you?',
        },
      ];
    }
    setMessages(list)
    setText("")
    setTimeout(() =>{
      document.querySelector('#copyrights').scrollIntoView();
    },1);
  };
  return (
    <div>
      <div className='d-flex alighn-items-center justify-content-center'>
        <img src={download}
         alt='logo' height={150} weight={150}></img>
        <h2 className='text-primary'> Code Decoder Chatbot</h2>
      </div>
      <div className='chat-messsage'>
          {
            messages.length>0 && messages.map((data)=><ChatMessage{...data}/>)
          }
<div className='d-flex mt-2'>
  <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)}/>
  <Button type='primary' className='ms-3' onClick={onSend}>Send</Button>
</div>
     <div id='copyrights'></div>
      </div>
      </div>
  )
}

export default App