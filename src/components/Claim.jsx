import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export const Claim = () => {
    const [claim, setClaim] = useState(false)
    const [claimR, setClaimR] = useState(false)
    const param = useNavigate()
    console.log(param)

    function handleHome() {
        param('/', {replace: true})
    }
    function handleClaimReward() {
        setClaim(true)
        setTimeout(() => {
            setClaim(false)
            setClaimR(true)
        }, 3000);
    }
  return (
    <div className='claim' >
        <div className="claim-mesg">
            <h2>Sepoila PoW Faucet</h2>
            <div className="txt">
                <h4>Claim Rewards</h4>
                <div className="cont">
                    <p>wallet:</p>
                    <p></p>
                </div>
                <div className="cont">
                    <p>Amount:</p>
                    <p></p>
                </div>
                <div className="cont">
                    <p>Timeout:</p>
                    <p></p>
                </div>
            </div>
            {
                claim && <div className="reward">
                    <div className="reward-mesg">
                        <p>The Faucet is now processing your claim </p>
                        <p>You can now close the page</p>
                        <div className="box">
                            <p>Tx-Status:</p>
                            <p>Pending</p>
                        </div>
                        <div className="box">
                            <p>Tx-Status:</p>
                            <p>Pending</p>
                        </div>
                        <div className="box">
                            <p>Tx-Status:</p>
                            <p>Pending</p>
                            
                        </div>
                    </div>
                </div>
            }
            {
                claimR && <div className="reward">
                    <div className="transac">
                        <div className="transac mesg">
                            <p>Claim Transaction has been confirmed in block #4791320</p>
                        </div>
                    </div>
                </div>
            }
            <button onClick={claimR? handleHome: handleClaimReward}>
                {claimR ? 'Go to homepage': 'Claim Rewards'}
            </button>
        </div>
    </div>
  )
}
