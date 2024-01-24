import React from 'react'
import './processCard.css'

const ProcessCard = ({title,image,desc,key}) => {
  return (
    <div className='processCard'>
      <div className='title'>
        <p>
           <span>{key+1}</span> {title}
        </p>
      </div>
      <div>
      <img src={image}/>
      </div>
      <div>
        <p className='disc'>
        {desc}
        </p>
      </div>
    </div>
  )
}

export default ProcessCard
