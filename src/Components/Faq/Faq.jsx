import React from 'react'
import "./faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const data=[{
  que:"I want to know about Fix Health",
  ans:"Fix Health (YourPhysio previously) was started by Dr. Sheetal Mundhada who's a renowned physiotherapist with 33+ years of experience. The team has 60+ physiotherapists & has delivered 30,000+ online sessions with 96% patient satisfactionThe organization has been featured in Economic Times, Business World, Times of India for its effective online pain relief programs.Fix Health shares the same investors as companies like Ola, Snapdeal & Khatabook and the technology innovation is done by a team from IIT Bombay, IIT Madras & BITS Pilani."
},
{
que:"What are the requirements before the consultation starts?",
ans:"You will need to be prepared with the following requirements before the consultation starts:Share relevant medical documents & test reports on WhatsApp.Zoom link for the session will be shared 1 hour before the consultationConnect Zoom via mobile or laptop it in a silent place with open space around (4ft x 4 ft) & good internet connection"
},{
  que:"What will be the duration of the consultation?",
  ans:"The consultation duration may vary according to the condition. It generally take 30 - 45 mins."
}
]

const Faq = () => {
  return (
    <div className='faq'>
      <div className='faq-up'>
        <h1 className='title'>FAQ</h1>
        <p className='subtitle'>Have Questions? We're here to help </p>
      </div>
      <div className='faq-down'>
      
      {
        data.map((item,i)=>{
return  <Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1-content"
  id="panel1-header"
>
 {item.que}
</AccordionSummary>
<AccordionDetails >
  {item.ans}
</AccordionDetails>
</Accordion>
        })
      }
     
      
    </div>
      </div>
    
  )
}

export default Faq
