import React from 'react'

const faqData = [
  {
    id: 1,
    mesg: `This is an Ethereum Faucet running on the Sepolia Testnet.
    To prevent malicious actors from exhausting all available funds or 
    accumulating enough Ether to mount long running spam attacks, this
     faucet requires
     some mining work to be done in exchange for free testnet funds.`,
    text: 'What is a PoW Faucet?'
  },
  {
    id: 2,
    mesg: `Just enter your ETH Address and start mining. When you've 
    collected enough ETH, stop mining and claim your rewards. 
    For a more detailed technical description, check out this page.`,
    text: 'How does this work?'
  },
  {
    id: 3,
    mesg: `Replenish the faucet by sending funds you don't need anymore to:
    0x6Cc9397c3B38739daCbfaA68EaD5F5D77Ba5F455`,
    text: 'How to help the faucet?'
  },
  {
    id: 4,
    mesg: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
     consequuntur repudiandae minima provident eveniet nemo ratione 
     nesciunt? Quisquam vitae libero facere! Pariatur optio, aliquam
      earum dicta nesciunt ut quo debitis
    `,
    text: 'Lorem Ipsum'
  }
]
export const Faq = () => {
  function handleShow(e) {
    console.log(e.target.nextSibling.classList.toggle('show'))
  }
  return (
    <div className='faq'>
      <h2>FAQs</h2>
      {faqData.map(data => <div className="data" key={data.id}>
        <button onClick={(e) => handleShow(e)}>{data.text}+</button>
        <div className="content">
          <p>{data.mesg}</p>
        </div>
      </div> )}
    </div>
  )
}
