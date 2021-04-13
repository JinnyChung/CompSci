import React, {useState} from 'react';
import Announcement from './components/Announcement'
import Button from './components/Button'
import Announcements from './components/Announcements'
import ValidUsers from './components/ValidUsers'

function App() {

  const [verified, setV] = useState(false);//is the message by a verified user
  const[showAddMessage, setShowAddMessage] = useState(false); //toggle between being able to add a message or not for design 
  const [messages,setMessages] = useState([
    {
      message: "Hello",
      person:"Test",
    },
    {
      message:"Hello2",
      person:"Test2",
    }
  ]) // starting of array with messages

  const addMessage = (message) => {
    if(verified){
    const id = Math.floor(Math.random() * 10000) + 1
    const newMessage = {id, ...message}
    setMessages([newMessage, ...messages])
    }
    setV(false);
  }//if the post is by a verified user, add it to the messages array at the top 
  
 

  return (
    <div className="App">
      <Button text="Toggle New Announcement" onClick={() => setShowAddMessage(!showAddMessage)}/> {/*button to toggle announcements, passes the prop to toggle the add message screen */}
      {showAddMessage && <Announcements onAdd={addMessage} tryVerify={ ()=> setV(!verified)} />}{/*trying to set up verification process */}
          {messages.map((message,index) => ( 
        <Announcement message={message.message} person={message.person}/>

      ))} {/*map out all of the messages from the array*/}

      
    </div>
  );
}

export default App;
