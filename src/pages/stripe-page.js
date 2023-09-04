import Head from 'next/head'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Stripe.module.css'


const Stripe = () => {

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
                            <div className={`${styles.contfom} ${styles.client}`}>
                                <h2 className='t-center fw700 font30 color-blue font-f mb-5'>
                                    Client Details
                                </h2>

                                <form className={styles.stripeForm}>
                                    <Row className='gy-3'>
                                        <Col md={6}>
                                            <input required id='name' type='text' name='name' placeholder='Full Name' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='email' type='text' name='email' placeholder='Email Address' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='phone' type='tel' name='phone' placeholder='Phone Number' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='zip' type='number' name='zip' placeholder='Location/Zip Code' />
                                        </Col>
                                        <Col md={12}>
                                            <textarea type="text" id="message" name="message" placeholder="Message"></textarea>
                                        </Col>
                                        <Col md={12}>
                                            <button type='submit'>Submit</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                            <div className={`${styles.contfom} ${styles.agent} mt-5`}>
                                <h2 className='t-center fw700 font30 color-blue font-f mb-5'>
                                    Agent Details
                                </h2>

                                <form className={styles.stripeForm}>
                                    <Row className='gy-3'>
                                        <Col md={6}>
                                            <input required id='name' type='text' name='name' placeholder='Full Name' />
                                        </Col>
                                        <Col md={6}>
                                            <input required id='email' type='text' name='email' placeholder='Email Address' />
                                        </Col>
                                        <Col md={12}>
                                            <input required id='packgs' type='text' name='packgs' placeholder='Package' />
                                        </Col>
                                        <Col md={12}>
                                            <button type='submit'>Submit</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Stripe