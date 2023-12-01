import React, { useState } from 'react'
import image from '../assets/image-equilibrium.jpg'
import { Faq } from './Faq'
import { Form } from './Form'
export const Home = ({setEth}) => {
  return (
    <div className='home'>
        <div className="card">
            <div className="card-img">
              <div className="img">
                  <img src={image} alt="equilibrium" />
              </div>
            </div>
            <Form setEth={setEth} />
            <Faq />
        </div>
    </div>
  )
}
