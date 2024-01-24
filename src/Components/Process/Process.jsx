import React from 'react'
import "./process.css"
import ProcessCard from '../ProcessCard/ProcessCard'

const data=[
  {
    title:"Consultation",
    image:"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Fdoctor_n5rSAXMwJ.png&w=2048&q=75",
    desc:"1-1 consultation with physiotherapist having 14+ years avg. experience"
  }, {
    title:"Examination",
    image:"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Fmen_squat_IAAeduv30.png&w=2048&q=75",
    desc:"Artificial intelligence to detect the root cause of problem"
  },
  {
    title:"Treatment Session",
    image:"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Frew_ft41ZvgcVP.png&w=2048&q=75",
    desc:"45 min live 1-1 session with physiotherapist between 5am - 9pm"
  },
  {
    title:"Outcome Based Treatment",
    image:"https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fqtv93d5ym%2Fbefore_after__Ras5bK6l.png&w=2048&q=75",
    desc:"Progress measured & exercise updated every 5th session"
  }
]
const Process = () => {
  return (
    <div className='process'>
      <div >
        <p className='title'>Our Process</p>
      </div>
      <div >
        <p className='subtitle'>
        Backed by study in International Journal of Physiotherapy and Research
        </p>
      </div>
      <div className='process-card'>

        {
          data.map((item,i)=>{
            return <ProcessCard key={i} title={item.title} image={item.image} desc={item.desc}/>
          })
        }
      
      

      </div>
    </div>
  )
}

export default Process

