import React from 'react'
import styles from '@/styles/Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
import axios from "axios";
import { useState } from "react";

const Contact = () => {

    const [score, setScore] = useState('Submit Form');

    const handleSubmit = async (event) => {

        event.preventDefault()



        const data = {
            first: event.target.first.value,
            email: event.target.last.value,
            phone: event.target.phone.value,

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


    // const schema = {

    //     "@context": "https://schema.org",
    //     "@type": "Corporation",
    //     "name": "bookwritingexperts",
    //     "alternateName": "Texas Book Publishing",
    //     "url": "https://texasbookpublishing.com/contact-us/",
    //     "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    //     "sameAs": [
    //         "https://texasbookpublishing.com/",
    //         "https://www.facebook.com/bookwritingexperts",
    //         "https://twitter.com/bookwritingexp",
    //         "https://www.instagram.com/bookwritingexpert/",
    //         "https://www.linkedin.com/company/book-writing-exp/",
    //         "https://www.pinterest.com/bookwritingexperts/"
    //     ]


    // }
    // const schema1 = {

    //     "@context": "https://schema.org",
    //     "@type": "ProfessionalService",
    //     "name": "bookwritingexperts",
    //     "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    //     "@id": "",
    //     "url": "https://texasbookpublishing.com/contact-us/",
    //     "telephone": "2132893888",
    //     "priceRange": "$99",
    //     "address": {
    //         "@type": "PostalAddress",
    //         "streetAddress": "445 S Figueroa St",
    //         "addressLocality": "Los Angeles",
    //         "addressRegion": "CA",
    //         "postalCode": "90071",
    //         "addressCountry": "US"
    //     },
    //     "geo": {
    //         "@type": "GeoCoordinates",
    //         "latitude": 34.0536155,
    //         "longitude": -118.2568651
    //     },
    //     "openingHoursSpecification": {
    //         "@type": "OpeningHoursSpecification",
    //         "dayOfWeek": [
    //             "Monday",
    //             "Tuesday",
    //             "Wednesday",
    //             "Thursday",
    //             "Friday",
    //             "Saturday",
    //             "Sunday"
    //         ],
    //         "opens": "00:00",
    //         "closes": "23:59"
    //     },
    //     "sameAs": [
    //         "https://texasbookpublishing.com/",
    //         "https://www.facebook.com/bookwritingexperts",
    //         "https://twitter.com/bookwritingexp",
    //         "https://www.instagram.com/bookwritingexpert/",
    //         "https://www.linkedin.com/company/book-writing-exp/",
    //         "https://www.pinterest.com/bookwritingexperts/"
    //     ]

    // }


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



                {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
                /> */}

            </Head>

            <section className={styles.contactbg}>
                <Container>
                    <Row className='gy-4'>
                        <Col md={5}>
                            <h2 className='color-blue font50 fw700 font-f'>
                                Have your story read.
                                Get published.
                            </h2>
                            <div className={`${styles.published} pt-5`}>

                                <p className='fw500 font20 text-black font-f'>
                                    Let’s get in touch!
                                </p>
                                <p className='font20 fw500 font-f text-black'>
                                    <span className=''>Phone:</span> <Link href='tel:(346) 502-3898' className={` ${styles.numpost} fw700 text-black textdocationnone`}> (346) 502-3898 </Link>
                                </p>
                                <p className='font20 fw500 font-f text-black'>
                                    <span className=''>Email:</span> 
                                    <Link href='info@texasbookpublishing.com' className={`${styles.numpost} fw700 text-black textdocationnone`}> info@texasbookpublishing.com</Link>
                                </p>
                            </div>

                            <p className='fw500 font20 text-black font-f mt-5'>
                                Unable to reach us? Fill out the  <Link href='#contpost' className='textdocationnone text-black'>form below</Link>
                            </p>

                        </Col>

                        <Col md={1}></Col>
                        <Col md={6}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.6609799252105!2d-95.3671296255554!3d29.758523332062968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3b02b00001%3A0x1b31520087aa9bd8!2s801%20Travis%20St%20Ste%202101%2C%20Houston%2C%20TX%2077002%2C%20USA!5e0!3m2!1sen!2s!4v1693162675788!5m2!1sen!2s" width='100%' height='252' ></iframe>

                            <h4 className='font-f fw600 font20 text-black t-center mt-3' >(Operations)</h4>
                            <p className='font-f fw500 mt-3 text-black t-center' >
                                801 Travis Street, 2101, Houston, TX 77002, United States
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='contpost' className={styles.contpost}>
                <Container>
                    <div className={styles.contfom}>
                        <Row className={styles.conrow}>
                            <Col md={9}>
                                <h2 className='t-center fw700 font40 color-blue font-f mb-5'> Fill Out The Form Below We Will Contact You Promptly</h2>

                                <form className={styles.label2} onSubmit={handleSubmit}>

                                    <Row className='gy-3'>
                                        <Col md={6}><input className={styles.inputfilet} required id='name' type='text' name='first' placeholder='Name' /></Col>
                                        <Col md={6}><input className={styles.inputfilet} required id='email' type='text' name='last' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" /></Col>
                                    </Row>

                                    <Row className='mt-3 mb-3 gy-3'>
                                        <Col md={6}> <input className={styles.inputfilet} required id='phone' type='number' name='phone' placeholder='Phone' /> </Col>
                                        <Col md={6}> <input className={styles.inputfilet} required id='tel' type='number' name='zip' placeholder='Location/Zip Code' /></Col>
                                    </Row>

                                    <Row>

                                        <Col>
                                            <textarea type="text" id="message" className={styles.textarea1} name="message" placeholder="Tell Us More About Your Project and  Publishing Goals Here"></textarea>
                                        </Col>

                                    </Row>

                                    <Col className='mt-3 mb-5'>
                                        <em className='textcolor'>
                                            You may find our confidentiality policy <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}>here</strong></Link> , or request a signed NDA by email: <Link className='textdocationnone colortextgrey' href="mailto:support@texasbookpublishing.com"> <strong className={styles.numpost}>support@texasbookpublishing.com</strong></Link> This site is protected by reCAPTCHA and the Google
                                            <Link className='textdocationnone colortextgrey' href="/privacy-policy"><strong className={styles.numpost}> Privacy Policy</strong></Link>  and Terms of Service <Link className='textdocationnone colortextgrey' href="/terms-of-use"> <strong className={styles.numpost}>Terms of Service</strong> </Link> apply.
                                        </em>

                                    </Col>

                                    <button className={styles.submitform} type='submit'>{score}</button>

                                </form>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className={styles.contactdata}>
                <Container>
                    <Row className={styles.conrow}>
                        <Col md={9}>

                            <h2 className='color-blue font40 fw700 font-f'> Your Publishing Goals Will All Be Realized Here!</h2>
                            <p className='font15  font-f colortextgrey' >Contact us and have yourself a best seller book written now. </p>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact