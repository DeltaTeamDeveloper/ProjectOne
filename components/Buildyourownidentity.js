import React from 'react'
import styles from '@/styles/Buildyourownidentity.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/buildyour.png'
import Image from 'next/image'
import Link from 'next/link'

const Buildyourownidentity = () => {
    return (
        <>

            <div className={styles.buildyourownidentity}>
                <Container>
                    <Row className='mb-3'>
                        <Col>
                            <h2 className="fw700 font40 color-blue font-f mb-2 t-center">Stand Out Amongst the Crowd</h2>
                            <p className='font15 textcolor font-f t-center mb-5'>Digital marketing is the thrilling dance between strategy and creativity that waltzes through the virtual world, captivating audiences and transforming businesses. It's a symphony of eye-catching visuals, captivating content, and strategic tactics that attracts potential customers and leaves them longing for more. Buckle up, because the world of digital marketing is a rollercoaster ride you won't want to miss and we are to make the journey worthwhile with the services we offer.</p>
                        </Col>
                    </Row>


                    <Row className={` ${styles.media} gy-5`}>

                        <Col md={3}>

                            <div>
                                <h4 className='font16 fw600 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Looking to level up your social media game? Say hello to our SMM services - the secret weapon of savvy marketers. Get ready to skyrocket your brand's reach and engage with a whole new audience!</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font16 fw600 color-blue t-center font-f'>BRANDING SERVICES</h4>
                                <p className='font15  textcolor t-center font-f'>Unlock the power of your brand with our cutting-edge branding services! Our team of experts will help you create a strong and unique identity that will captivate your audience and leave a lasting impression.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>


                        </Col>
                        <Col md={6}>

                            <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt='Texas Book Publishing'></Image>

                        </Col>
                        <Col md={3}>

                            <div>
                                <h4 className='font16 fw600 color-blue t-center font-f'>EMAIL MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Looking to boost your business with powerful marketing? Look no further than email marketing services. Reach your target audience directly, engage with personalized content, and watch your conversions soar.</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font16 fw600 color-blue t-center font-f'>SEO SERVICES</h4>
                                <p className='font15  textcolor t-center font-f'>Are you tired of your website being lost in the vast sea of Google search results? Our SEO services are here to rescue and catapult your site to the top, earning you the recognition you deserve!</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>

                            </div>


                        </Col>

                    </Row>
                </Container>

            </div>

        </>
    )
}

export default Buildyourownidentity