import React,{ useState} from 'react'
import ValidUsers from './ValidUsers'

const Authenticate = ({onTry}) => {
    const [trial, setTrial] = useState('')

    const onVerify = (e) => {
        e.preventDefault()
    
        if (!trial) {
          alert('Please verify')
          return
        }
    
        onTry({ trial })
    
        setTrial('')
      }
    return (
        <form className='add-form' onSubmit={onVerify}>
        <div className='form-control'>
          <label>Verify</label>
          <input
            type='text'
            placeholder='Verify'
            value={trial}
            onChange={(e) => setTrial(e.target.value)}
          />
        </div>
        <input type='submit' value='Verify' className='btn' />
        </form>
    )
}

export default Authenticate
