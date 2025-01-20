import React from 'react'
import Header from "./Header"
import SubText from "./SubText"

function Msg() {
  return (
    <div>
      <Header tag="h2" text='Welcome!' className='header' />
      <SubText tag="p" text="We are happy to have you back. Kindly login" className='sub-text'/>
    </div>
  )
}

export default Msg;