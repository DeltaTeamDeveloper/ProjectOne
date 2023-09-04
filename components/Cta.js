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
                                    Your journey to fame and recognition begins now! With our comprehensive Amazon publishing services, we cover all the essential aspects of your publishing journey. From expert production and strategic marketing to wide-ranging distribution, we have successfully elevated countless professional authors to the esteemed rank of published book authors on a global scale. Let us take the reins and turn your masterpiece into a bestseller.
                                </p>
                                <div className='mt-5'>

                                    <Link className={styles.btn1} href="javascript:$zopim.livechat.window.show();">Chat With Our Expert Now!</Link>
                                    <Link className={styles.btn2} href="tel:(346) 502-3898">+1 (346) 502-3898</Link>
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