import React from 'react'
import './Footer.css'
import { AiOutlineFacebook } from 'react-icons/ai'
const Footer = () => {
  return (
    <section className='footer_container'>

      <div className="footer_front">
        <div className="footer_wrap">
          <article >
            <h5>Our Location</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.135898653423!2d84.430857!3d27.700795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97796dc1d7c3314!2sNepal%20trasport%20narayanghat%20branch!5e0!3m2!1sen!2snp!4v1654850973512!5m2!1sen!2snp">map</iframe>
          </article>
          <article className='footer_social' >
           <a> <AiOutlineFacebook className='contact_icon'/> Facebook</a>
           <a> <AiOutlineFacebook className='contact_icon' /> Facebook</a>
           <a> <AiOutlineFacebook className='contact_icon' /> Facebook</a>
           <a> <AiOutlineFacebook className='contact_icon' /> Facebook</a>
          </article>
          <article className='footer_about'>
            <h2>About Us</h2>
            <h3>Contact : 9845245401</h3>
            <h3>News Portal Website</h3>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Footer