import React from 'react'
import styles from '@/styles/Requestafreequote.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from "react";
// footer icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Router from 'next/router';
import axios from "axios";

const Requestafreequote = () => {


  const [score, setScore] = useState('Submit');





  const handleSubmit = async (e) => {
    e.preventDefault();

    let bodyContent = JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    });

    const JSONdata = JSON.stringify(bodyContent)

    setScore('Wating For Send Data');

    axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
      .then((response) => {
        setScore('Thank You');
        console.log(response.data);
      });

    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <>
      <div id="Requestafree" className={styles.freequote}>
        <Container>
          <h2 className="fw700 font40 color-blue font-f t-center mb-3 pt-5">Request A Free Quote</h2>
          <form className={styles.formalign} onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <input type="text" className={styles.formfree} required name="name" placeholder='Name' />
              </Col>

              <Col md={4}>
                <input type="email" className={styles.formfree} required name="email" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              </Col>

              <Col md={4}>
                <input type="number" className={styles.formfree} required name="phone" placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
              </Col>
              <Col md={12}>
              <textarea type="text" id="message" className={styles.textarea1} name="message" placeholder="Tell Us More About Your Project and Publishing Goals Here"></textarea>
              </Col>
            </Row>
            <p className='font14 fw400 mt-3'>
              <span className='fw700 d-block'>Note:</span>
              <span>By providing your phone number and clicking "Submit," you consent to receive text messages from Texas Book Publishing for marketing purposes, including promotions, updates, and offers related to our books and publishing services. You understand that message and data rates may apply, and you may opt-out at any time by texting "STOP" to [Short Code]. Your consent is in compliance with Texas state laws, including the Texas Business and Commerce Code, Chapter 35 (Electronic Transactions), and the Texas Finance Code, Chapter 35 (Consumer Protection).</span>
            </p>
            <button className={styles.freebtn} type="submit"> {score} </button>
          </form>
          <Row className={styles.leftemail}>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'>Email Us</h4>
                <p className={styles.bookemail}><MdEmail size={16} />
                  <Link className={`${styles.emailhref} hover`} href="mailto:info@texasbookpublishing.com"> info@texasbookpublishing.com </Link> </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For project inquiries only: </h4>
                <p className={styles.bookemail}><MdEmail size={16} />

                  <Link className={`${styles.emailhref} hover`} href="mailto:support@texasbookpublishing.com">  support@texasbookpublishing.com </Link> </p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4 className='fw700 font17 colorexpertgrey font-f'> For other inquiries only: </h4>
                <p className={styles.bookemail}><BsFillTelephoneFill size={12} />

                  <Link className={`${styles.emailhref} hover`} href="tel:(346) 502-3898"> (346) 502-3898 </Link> </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Requestafreequote