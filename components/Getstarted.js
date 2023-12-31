import React from 'react'
import styles from '@/styles/Getstarted.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Router from 'next/router'
const Getstarted = (props) => {


  const [score, setScore] = useState('GET A QUOTE');

  const handleSubmit = async (event) => {

    event.preventDefault()


    const data = {
      first: event.target.first.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      services: event.target.services.value,
      message: event.target.message.value,
    }


    const JSONdata = JSON.stringify(data)
    setScore('Wating For Send Data');
    fetch('/api/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSONdata
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
        }
    })
  
  
      
   
    setScore('Thank You');
    const { pathname } = Router
    if (pathname == pathname) {
        Router.push('/thank-you')
    }

  }



  return (
    <>

      <div className={styles.getstart}>
        <h4 className="t-center font30 fw700 colortextgrey font-f">Let’s Get Started</h4>


        <p className="textcolor font-f mb-4 font15 t-center mt-3">Call us on: <Link className='textdocationnone colorexpertgrey hover fw600' href="tel:(346) 502-3898">(346) 502-3898</Link> or use the form below to start a conversation and show you how we can help!</p>

        <form className={styles.formalign} onSubmit={handleSubmit}>

          <Row className='start mt-3 gy-3'>
            <Col md={6}>
              <input type="text" className={styles.formfree} required name="first" placeholder="Enter Your Name" />
            </Col>
            <Col md={6}>
              <input type="email" className={styles.formfree} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter Your Email" />
            </Col>



            <Col md={6}>
              <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" />
            </Col>
            <Col md={6}>
              {/* <input type="number" className={styles.formfree} required name="phone" placeholder="Phone Number" /> */}
              <select name="services" className={`${styles.formfree} ${styles.formdrop}`}>
                <option value="">Please select Service(s)</option>
                <option value="Book Publishing Services">Book Publishing Services</option>
                <option value="Book Writing Services">Book Writing Services</option>
                <option value="Book Editing Services">Book Editing Services</option>
                <option value="Book Marketing Services">Book Marketing Services</option>
                <option value="Book Formatting Services">Book Formatting Services</option>
                <option value="Illustration">Illustration</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Book Trailer Services">Book Trailer Services</option>
                <option value="Proofreading Services">Proofreading Services</option>
                <option value="Ebook Writing Services">Ebook Writing Services</option>
                <option value="Ghostwriting Services">Ghostwriting Services</option>
                <option value="Audio Book Production">Audio Book Production</option>
                <option value="Web Content Writing Services">Ebook Writing Services</option>
                <option value="Business Plan Writing Services">Business Plan Writing Services</option>
              </select>
            </Col>

            <Col md={12}>
              <textarea className={styles.formfree} required name="message" rows="3" placeholder="Enter your Message"></textarea>
            </Col>

          </Row>

          <button className={styles.freebtn} type="submit"> {score} </button>

        </form>

      </div>


    </>
  )
}

export default Getstarted

