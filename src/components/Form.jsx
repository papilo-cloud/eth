import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Form = ({setEth}) => {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if (value.trim().length == 0) {
      setIsError(true)
    } else {
      setEth(value)
      navigate(`/mine/${value}`, {replace: true})
    }
  }
  return (
    <div className='form'>
        <form onSubmit={e =>handleSubmit(e)}>
          <label>
            <input value={value}
            onChange={e => setValue(e.target.value)} type="text" 
            placeholder='Please Enter ETH address or ENS name' />
          </label>
          {isError && <div className="error">
            <div className="error-mesg">
              <span></span>
              <button onClick={() => setIsError(false)}>close</button>
            </div>
          </div>}
          <div className="login">

          </div>
          <div className="captcha">

          </div>
          <button type='submit'>
            Start Mining
          </button>
        </form>
    </div>
  )
}
