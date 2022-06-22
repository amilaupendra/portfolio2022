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

  return (
    <div className="contactusdiv">
      <h1 id='contactustopic'>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label id='labelnames'>Name</label>
      <input id='inputfields' type="text" name="user_name" />
      <label id='labelnames'>Email</label>
      <input id='inputfields' type="email" name="user_email" />
      <label id='labelnames'>Message</label>
      <textarea id='inputfields' name="message" />
      <Button variant="warning" type="submit">Send</Button>
    </form>

    </div>
    
  );
};

