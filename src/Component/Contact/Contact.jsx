import React from 'react'
import './Contact.css'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { SiMessenger } from 'react-icons/si'
import { AiOutlineWhatsApp } from 'react-icons/ai'
const Contact = () => {
  return (
    <section className=' container contact_container'>

      <div className="contact_item">

        <article className='contact_option'>
          <HiOutlineMailOpen className='contact_icon' />
          <h4>Email</h4>
          <h5>arjunchaudhary757@gmail.com</h5>
          <a href="mailto:arjunchaudhary757@gmail.com">send mail</a>
        </article>
        <article className='contact_option'>
          <SiMessenger className='contact_icon' />
          <h4>Messenger</h4>
          <h5>Arjun Chaudhary</h5>
          <a href="https://m.me/arjunchaudhary2052">send message</a>
        </article>
        <article className='contact_option'>
          <AiOutlineWhatsApp className='contact_icon' />
          <h4>whats App / Viber</h4>
          <h5>+977 9806871568</h5>
          <a href="https://api.whatsapp.com/send?pone+9779806871568" >send message</a>
        </article>
      </div>
      <form className=" contact_message">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='email'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='btn'>send message</button>
      </form>



    </section>
  )
}

export default Contact