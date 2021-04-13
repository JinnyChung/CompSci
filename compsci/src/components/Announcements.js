import React from 'react'
import Announcement from './Announcement'
import { useState } from 'react'
import ValidUsers from './ValidUsers'

 const Announcements = ({onAdd, showSubmit, tryVerify}) => {
    const [message, setText] = useState('')//message for new post
    const [person,setPerson] = useState('')//person for new post

    const [attempt, setAttempt] = useState('');//token attempt from user
  
    const onSubmit = (e) => { // this method tries to send the necessary information such as an object of message, person and see if the attempt is valid
      e.preventDefault()
  
      if (!message) {
        alert('Please add a task')
        return
      }
  
      onAdd({ message , person })
      isVerified(attempt)
      setText('')
      setPerson('')
      setAttempt('')
    }
  
    const isVerified = (possibleId) => { // NOT WORKING // trying to verify the user and make a boolean value
      for (const user in ValidUsers){
          if(possibleId === user.id){
              <h1> Verified !</h1>
              tryVerify();
          }
      }
  
  }

    
    return (
      <form className='add-form' onSubmit={onSubmit}>
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
        <div className='form-control'>
          <label>Verification</label>
          <label> {attempt}</label>
          <input
            type='text'
            placeholder='Add Token'
            value={attempt}
            onChange={(e) => setAttempt(e.target.value)}
          />
        </div>
       <input type='submit' value='Save Message' className='btn' />
      </form>
    )
}

export default Announcements; 