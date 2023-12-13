import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import image from '../../assets/image-equilibrium.jpg'


export const Mining = () => {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState(0)
    const [start, setStart] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const {id} = useParams()
    const interval = useRef(0); 
    const modalRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = 'hidden';
        } else{
          document.body.style.overflow = 'unset';
        }
        // function getTarget(e) {
        //   if (!modalRef.current.contains(e.target)) {
        //     setShowModal(false)
        //   }
        // }
        // document.documentElement.addEventListener('click', getTarget)
        
        return () => {document.body.style.overflow = 'hiddn';
                      document.body.style.overflow = 'unset';
                    //   document.body.removeEventListener('click', getTarget)
      }
      }, [showModal])
    function handleStart() {
        
        // clearInterval(interval.current);
        setShowModal(false)
        setStart(false)
        interval.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    }
    function stop() {
        setStart(true)
        setShowModal(true)
        clearInterval(interval.current)
    }
    function handleStop() {
        clearInterval(interval.current)
        setCount(0)
        setShowModal(false)
    }
    let ethMined = 0
    if (count > 0) {
        ethMined = count / 1000
    }

    function handleClaim() {
        navigate(`/claim/${id}`, {replace: true, state:{mine: ethMined, wallet: id}})
    }
    

  return (
    <div className='mine'>
        {/*   */}
        {showModal ?
        <div className="modal">
        <div className="balance" ref={modalRef}>
            <div className="balance-txt">
                <h3>Mining balance too low</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi maiores natus 
                    voluptatem ullam suscipit eos aperiam!
                    Natus optio, magnam officia eligendi, commodi nemo temporibus nostrum culpa
                    ad ipsum rerum accusamus.</p>
                    <div className="butn">
                        <button onClick={handleStop}>Stop Mining</button>
                        <button onClick={handleStart}>Continue Mining</button>
                    </div>
            </div>
        </div> 
        
    </div>: ''}
        <div className="mine-val">
        
            <div className="img">
                <img src={image} alt="" />
            </div>
            <p>target address: {id}</p>
            <div className="mesg">
                <div className="text">
                    <p>Your mining Reward:</p>
                    <h2>{ethMined} setETH</h2>
                </div>
                <div className="text">
                    <p>Current HashRate:</p>
                    <h2>742.85 H/s</h2>
                </div>
            </div>
            <div className="mesg1">
                <div className="msg">
                    <p>Number of workers:</p>
                    <div className="one">
                    <p>{val}/32</p>
                    <div className="btn">
                        <button onClick={() => {
                            if (val > 0) {
                                setVal(val => val - 1)
                            }
                        }}>-</button>
                        <button onClick={() => {
                            if (val < 32) {
                                setVal(val => val + 1)
                            }
                        }}>+</button>
                    </div>
                    </div>
                </div>
                <div className="msg">
                    <p>Minimum claim reward:</p>
                    <p>0.5 sepETH</p>
                </div>
                <div className="msg">
                    <p>Minimum claim reward:</p>
                    <p>2.5 sepETH</p>
                </div>
                <div className="msg">
                    <p>Remaining session time:</p>
                    <p>9</p>
                </div>
                <div className="msg">
                    <p>Total Share:</p>
                    <p>9</p>
                </div>
                <div className="msg">
                    <p>Average reward per hour:</p>
                    <p>2.745 sepETH</p>
                </div>
                <div className="msg">
                    <p>Reward boost:</p>
                    <p>+0 %</p>
                </div>
            </div>
            { ethMined < 0.01? 
            <button onClick={start ? handleStart: stop}>
                {start ? 'Start Mining': 'Stop Mining'}
            </button>:
            <button className='butn1' onClick={handleClaim}>
                Stop Mining and claim reward
                {/* <Link to={`/claim/${id}`} >
                </Link> */}
            </button>
            }
        </div>
    </div>
  )
}
