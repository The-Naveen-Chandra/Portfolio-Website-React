import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

import { HiOutlineMail } from 'react-icons/hi'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dyxnze', 'template_xwc2ulo', form.current, '7nWqm4rxUsMM5aPf6')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* CONTACT OPTIONS */}
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>naveen.chandra@ssipmt.com</h5>
            <a href="mailto:naveen.chandra@ssipmt.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>nav.chandra</h5>
            <a href="https://www.instagram.com/nav.chandra" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7722809944</h5>
            <a href="https://wa.me/917722809944" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact