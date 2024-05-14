import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactus.css";
import Button from 'react-bootstrap/esm/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iqdv6jt', 'template_25daq6q', form.current, 'ob1xmBsrFyM5ILZ3V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  /* css inline style for conatact message input*/
  const textAlign ={
    textAlign : "left",
  } 


  return (
    <div id='contactus' className="contactusdiv">
      <h1 id='contactustopic'>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
      {/* <label id='labelnames'>Enter your name</label> */}
      <input className='fornInput' id='inputfields' type="text" placeholder='Name' name="user_name" />
      {/* <label id='labelnames'>Enter your email</label> */}
      <input className='fornInput' id='inputfields' type="email" placeholder='Your Email' name="user_email" />
      {/* <label id='labelnames'>Message</label> */}
      <textarea className='fornInput' id='inputfields' name="message" placeholder='Write your mail here...' style={textAlign}/>
      <Button id='sendBtn' variant="warning" type="submit">Send</Button>
    </form>

    </div>
    
  );
};

