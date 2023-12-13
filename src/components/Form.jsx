import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Form = ({setEth}) => {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('0x')
  const [value2, setValue2] = useState('')
  const [isError, setIsError] = useState(false)
  const [isMined, setIsMined] = useState(true)

  const navigate = useNavigate()
  const modalRef = useRef(!null)
  const buttonRef = useRef(!null)

  useEffect(() => {
    if (isError) {
      document.body.style.overflow = 'hidden';
    } else{
      document.body.style.overflow = 'unset';
    }
      function getTarget(e) {
          if (!modalRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
            setIsError(false)
          }
        }
        document.documentElement.addEventListener('click', getTarget)
  }, [isError])
  
  function rand() {
    const num = '00000000000000';
    let rands = Math.floor(Math.random()* 12)+ 1
    return num.slice(0, rands)
  }
  
  function handleClick() {
    if (value.trim().length == 0) {
      setIsError(true)
      // console.log(isError)
    }
    else{
    setIsMined(false)
    setValue1('0x'+ rand() + value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
      setEth(value)
      navigate(`/mine/${value1}`, {replace: true})
  }
  return (
    <div className='form'>
        <form onSubmit={e =>handleSubmit(e)}>
          <label>
            <span>Best mining results so far:</span>
            <input className='value1' value={value1}
            readOnly
            onChange={e => setValue1(e.target.value)} type="text" 
            placeholder='' />
          </label>
          <label>
            <input type="text"
            value={value2}
            onChange={e => setValue2(e.target.value)}
            required placeholder='RequestId' />
          </label>
          <label>
            <input value={value}
            onChange={e => setValue(e.target.value)} type="text" 
            placeholder='My address' />
          </label>
          <div ref={modalRef} className={isError ? 'error open': 'error'}>
            <div className="error-mesg">
              <span>Error Message</span>
              <button type='button' onClick={() => setIsError(false)}>close</button>
            </div>
          </div>
          <div className="login">

          </div>
          <div className="captcha">

          </div>
          <button type='button' ref={buttonRef} onClick={handleClick}>
            Start Mining
          </button>
          <button type='submit' disabled={isMined} >
            Submit for commit
          </button>
        </form>
    </div>
  )
}
