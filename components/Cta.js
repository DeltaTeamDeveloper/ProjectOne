import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Dowecome.module.css'

const Cta = () => {
    return (
        <>
            <section className={styles.cta}>
                <Container>
                    <Row className={` ${styles.middle} gy-4`}>
                        <Col md={12}>
                            <div className={styles.dowemargin}>
                                <h3 className="fw700 font40 text-white font-f mb-4">Leading <Link className='color-blue fw700 hover textdocationnone' href='/book-publishing-services'>Book Publishing Services</Link> in Texas
                                </h3>
                                <p className='font15 fw400 font-f text-white pe-lg-5 pe-0'>
                                    Once you have created your masterpiece, your work is complete. Allow us to take the reins from here. Our comprehensive Amazon publishing services encompass the three essential aspects of the publishing journey: Production, Marketing, and Distribution. As industry-leading publishers, we possess vast expertise in successfully publishing numerous books written by professional authors. Our knowledgeable team has elevated countless writers to the esteemed rank of published book authors on a global scale. Now is the moment for you to embark on a journey to fame and recognition!
                                </p>
                                <div className='mt-5'>

                                    <Link className={styles.btn1} href="#">Chat With Our Expert Now!</Link>
                                    <Link className={styles.btn2} href="tel:(346) 502-3898">Call Us Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>
        </>
    )
}

export default Cta