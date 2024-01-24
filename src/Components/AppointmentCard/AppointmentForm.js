import React, { useEffect, useState } from 'react'
import "./AppointmentForm.css"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const indianStatesWithDoctors = [
    {
      doctors: ['Dr. Reddy', 'Dr. Kumar', 'Dr. Raju', 'Dr. Naidu', 'Dr. Rao']
    },
    {
      doctors: ['Dr. Singh', 'Dr. Das', 'Dr. Chetri', 'Dr. Bhattacharya', 'Dr. Namgyal']
    },
    {
      doctors: ['Dr. Barua', 'Dr. Sharma', 'Dr. Saikia', 'Dr. Hazarika', 'Dr. Bora']
    },
    {
      doctors: ["select-docter",'Dr. Singh', 'Dr. Yadav', 'Dr. Sharma', 'Dr. Verma', 'Dr. Jha']
    },
    {
      doctors: ['Dr. Sahu', 'Dr. Patel', 'Dr. Yadav', 'Dr. Agrawal', 'Dr. Mishra']
    },
    {
      doctors: ['Dr. Naik', 'Dr. Kamat', 'Dr. Shirodkar', 'Dr. Prabhu', 'Dr. Desai']
    },
    // Add more states as needed
  ];
  
  console.log(indianStatesWithDoctors);
  


const AppointmentForm = () => {

    const [contact, setContact] = useState("")
    const [username, setusername] = useState("")
    const [age, setAge] = useState(18)
    const [city, setCity] = useState("")
    const [company, setCompany] = useState("")
    const [exprience, setExprience] = useState("")
    const [docter, setDocter] = useState("")
    const [random,setRandom]=useState(3)
    const [validContact, setvalidContact] = useState(true)
    
     useEffect(()=>{
       const rando=Math.random(indianStatesWithDoctors.length)*10
       setRandom(Math.floor(rando))
      
     },[])

    const handleChange = (value) => {
        setContact(value);
        setvalidContact(validatePhoneNumber(value));
      };

      const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = (/^(\+|\d)[0-9]{10,13}$/);
    
        return phoneNumberPattern.test(phoneNumber);
      };
       
      function booking(e){
        e.preventDefault();

        if(age<40){
            setExprience("No Exprience")
        }
        if(validContact){
            console.log(contact)
            console.log(username)
            console.log(age)
            console.log(city)
            console.log(company)
            console.log(exprience)
            console.log(docter)
            
        }else{
            console.log("enter valid contact")}
        
      }
    return (
        <div className='form'>
            <div className='form-left'>
                <div className='left-up'>
                    <p>Book an Appointment for <span>Rs 1000</span> FREE</p>
                    <h2>60+ Expert Physiotherapists for 200+ Conditions</h2>
                </div>
                <div className='left-down'>
                    <div className='left-down-hedder'>
                        Book Appointment
                    </div>
                    <form className='Appointment-form' onSubmit={(e)=>{booking(e)}}>
                        <input className='user' type='text' onChange={(e)=>{setusername(e.target.value)}} placeholder='Username' required />
                            <PhoneInput
                            className="phoneInput"
                                country={'in'}
                                value={contact}
                                onChange={handleChange}
                                inputProps={{
                                    required: true,
                                }}
                            />
                            <input type='number' placeholder='Age' onChange={(e)=>{setAge(e.target.value)}} required/>
                            <input type='text' placeholder='City' onChange={(e)=>{setCity(e.target.value)}} required/>
                            <input type='text' placeholder='Company' onChange={(e)=>{setCompany(e.target.value)}} required/>
                            {
                                age>=40?<textarea onChange={(e)=>{setExprience(e.target.value)}} placeholder='Any previous experience with physiotherapy'/>:<></>
                            }
               
                            <select onChange={(e)=>{setDocter(e.target.value)}}>
                               {
                                indianStatesWithDoctors[3].doctors.map((item,i)=>{
                                 return <option>{item}</option>
                                })
                                
                               } 
                                
                                
                            </select>
                            <div>
                            <button type='submit'>Start Your Recovery</button>
                            </div>
                            

                    </form>
                </div>
            </div>
            <div className='form-right'>

            </div>
        </div>
    )
}

export default AppointmentForm
