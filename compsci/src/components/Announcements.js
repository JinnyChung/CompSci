import React from 'react'
import Announcement from './Announcement'
import { useState } from 'react'
import ValidUsers from './ValidUsers'
import Authenticate from './Authenticate'

 const Announcements = ({onAdd}) => {
    const [message, setText] = useState('')
    const [person,setPerson] = useState('')
    const [verified, setV] = useState(true);
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!message) {
        alert('Please add a task')
        return
      }
  
      onAdd({ message , person })
  
      setText('')
      setPerson('')
    }
  
    const isVerified = (possibleId) => {
        for (const user in ValidUsers){
            if(possibleId === user.id){
                <h1> Verified !</h1>
                setV(!verified)
            }
        }

    }

    
    return (
      <form className='add-form' onSubmit={onSubmit}>
          <Authenticate onTry={isVerified}/>
        <div className='form-control'>
          <label>Message</label>
          <input
            type='text'
            placeholder='Add Task'
            value={message}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Person</label>
          <input
            type='text'
            placeholder='Add Person'
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </div>

        {verified && <input type='submit' value='Save Message' className='btn' />}
      </form>
    )
}

export default Announcements; 