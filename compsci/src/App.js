import React, {useState} from 'react';
import Announcement from './components/Announcement'
import Button from './components/Button'
import Announcements from './components/Announcements'

function App() {

  const[showAddMessage, setShowAddMessage] = useState(false);

  const [messages,setMessages] = useState([
    {
      message: "Hello",
      person:"Test",
    },
    {
      message:"Hello2",
      person:"Test2",
    }
  ])

  const addMessage = (message) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newMessage = {id, ...message}
    setMessages([newMessage, ...messages])
  }
  

  return (
    <div className="App">
      <Button text="Toggle New Announcement" onClick={() => setShowAddMessage(!showAddMessage)}/>
      {showAddMessage && <Announcements onAdd={addMessage}/>}
          {messages.map((message,index) => (
        <Announcement message={message.message} person={message.person}/>

      ))}

      
    </div>
  );
}

export default App;
