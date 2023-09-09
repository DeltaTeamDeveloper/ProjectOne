import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios";

const Signup = (props) => {

  const [score, setScore] = useState('Best time to jump on a quick call:');

  const handleSubmit = async (event) => {

    event.preventDefault()


    const data = {
      first: event.target.first.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: (event.target.message.value == "") ? event.target.message.value : "No Message",
    }



    const JSONdata = JSON.stringify(data)

    setScore('Wating For Send Data');

    // axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
    //   .then((response) => {
    //     setScore('Thank You');
    //     console.log(response.data);
    //   });

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


    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
      <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
      <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="first" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address:" />
        <input type="number" className={`${styles.nametext} ${styles.margin}`} required name="phone" placeholder="Phone Number:" />
        <textarea required className={styles.textareanew} name="message" cols="40" rows="10" placeholder="Your project brief:"></textarea>

        <p className={`${styles.newPara} font14 fw400`}>
          <span className='fw700 d-block'>Note:</span>
          <span>By providing your phone number and clicking "Submit," you consent to receive text messages from Texas Book Publishing for marketing purposes, including promotions, updates, and offers related to our books and publishing services. You understand that message and data rates may apply, and you may opt-out at any time by texting "STOP" to [Short Code]. Your consent is in compliance with Texas state laws, including the Texas Business and Commerce Code, Chapter 35 (Electronic Transactions), and the Texas Finance Code, Chapter 35 (Consumer Protection).</span>
        </p>

        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup