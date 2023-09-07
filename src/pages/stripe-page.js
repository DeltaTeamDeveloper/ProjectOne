import Head from 'next/head'
import React from 'react'
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Stripe.module.css'

const Stripe = () => {

    const [score, setScore] = useState('CREATE URL');
    const [paymentLink, setLink] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault()

        const stripe = require('stripe')('sk_test_51NVWLjLLTR69UjiEvrkpcoHY7Zx660S2ZKK6kHZXuqXuzBu983s7KmPNVayYoHgbmGQNYAa2RLlvg7eclzjppTm600m6nyJSrZ');

        stripe.customers.create({
            name: event.target.clName.value,
            phone: event.target.clPhone.value,
            email: event.target.clEmail.value,
        }).then((customer) => {
            stripe.products.create({
                name: event.target.packgs.value,
            }).then((products) => {
                stripe.prices.create({
                    unit_amount: event.target.price.value,
                    currency: 'usd',
                    product: products.id,
                }).then((prices) => {
                    stripe.paymentLinks.create({
                        line_items: [
                            {
                                price: prices.id,
                                quantity: 1,
                            },
                        ],
                    }).then((paymentLinks) => {

                        const data = {
                            clName: event.target.clName.value,
                            clEmail: event.target.clEmail.value,
                            clPhone: event.target.clPhone.value,
                            zipcode: event.target.clZip.value,

                            agName: event.target.agName.value,
                            packages: event.target.packgs.value,
                            price: event.target.price.value,
                            paymentLink: paymentLinks.url
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
                        console.log(paymentLinks.url);
                        setLink(paymentLinks.url)
                    })
                });
            });
        })
            .catch(error => console.error(error));


        // setScore('Thank You');
        // const { pathname } = Router
        // if (pathname == pathname) {
        //     Router.push('/thank-you')
        // }

    }

    return (
        <>

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
                <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <title>Get in Touch, Contact Us Today and Drop Your Query</title>
                <meta name="description"
                    content="If you want to avail our services, or have any query,  our team is always ready to respond. Contact now, get a free session and know details about what you want." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Get in Touch, Contact Us Today and Drop Your Query" />
                <meta property="og:description"
                    content="If you want to avail our services, or have any query,  our team is always ready to respond. Contact now, get a free session and know details about what you want." />
                <meta property="og:url" content="/contact" />
                <meta property="og:site_name" content="Book Writing" />
                <meta property="article:modified_time" content="2022-08-31T23:04:58+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="4 minutes" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className={styles.stripe}>
                <Container>
                    <Row className='gy-4'>
                        <Col md={12}>
                            <form className={styles.stripeForm} id='strpForm' onSubmit={handleSubmit}>
                                <div className={`${styles.contfom} ${styles.client}`}>
                                    <h2 className='t-center fw700 font30 color-blue font-f mb-4 mb-md-5'>
                                        Client Details
                                    </h2>
                                    <Row className='gy-3'>
                                        <Col md={6}>
                                            <input required id='clName' type='text' name='clName' placeholder='Full Name' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='clEmail' type='text' name='clEmail' placeholder='Email Address' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='clPhone' type='tel' name='clPhone' placeholder='Phone Number' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='clZip' type='number' name='clZip' placeholder='Location/Zip Code' />
                                        </Col>
                                    </Row>
                                </div>
                                <div className={`${styles.contfom} ${styles.agent} mt-5`}>
                                    <h2 className='t-center fw700 font30 color-blue font-f mb-4 mb-md-5'>
                                        Agent Details
                                    </h2>
                                    <Row className='gy-3'>
                                        <Col md={6}>
                                            <input required id='agName' type='text' name='agName' placeholder='Full Name' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='packgs' type='text' name='packgs' placeholder='Package' />
                                        </Col>
                                        <Col md={12}>
                                            <input required id='price' type='text' name='price' placeholder='Price' />
                                        </Col>
                                        <Col md={12}>
                                            <button id='submitBtn' type='submit'>{score}</button>
                                            <p className='t-center fw600 font20 text-black font-f mt-4 mb-0'>{paymentLink}</p>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Stripe