import React from 'react'
import styles from '@/styles/Bestinclass.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import buildyourownidentity from '/public/images/buildyourownidentity/dulpost.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Bestinclass = () => {
    return (
        <>

            <div className={styles.buildyourownidentity}>
                <Container>
                    <Row className='mb-3'>
                        <Col>
                            <h2 className="fw700 font40 color-blue font-f mb-2 t-center">Leading <Link className='textdocationnone color-blue hover' href="/digital-marketing-services/">Digital Marketing Agency</Link> in Texas</h2>
                            <p className='font15 textcolor font-f t-center mb-5'>As a top-tier provider of digital marketing services, we specialize in the art of promoting aspiring authors and ensuring their success. Our team goes above and beyond to guarantee that you shine brilliantly in the literary world. With our expertise and support, you will receive personalized branding for your books, establishing a unique and unforgettable author presence.</p>
                        </Col>
                    </Row>


                    <Row className={` ${styles.media} gy-5 `}>

                        <Col md={3}>

                            <div>
                                <h4 className='font16 fw600 color-blue t-center font-f'>SOCIAL MEDIA MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Harness the talents of our top-notch social media marketers, renowned for their ability to curate exceptional content and execute growth-oriented campaigns that amplify your publication's sales potential.</p>
                                <Link className={styles.lets} href='#'>Let’s Discuss Now!</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font16 fw600 color-blue t-center font-f'>BOOK COVER DESIGN</h4>
                                <p className='font15  textcolor t-center font-f'>Never underestimate the power of a book cover! Our range of digital marketing services includes captivating book cover designs that serve as the crucial component to boost your book's appeal. Remember, it is indeed a fact that people tend to judge a book by its cover!</p>
                                <Link className={styles.lets} href='#'>LET'S DISCUSS</Link>
                            </div>


                        </Col>
                        <Col md={6} className='text-center'>

                            <Image loading="lazy" src={buildyourownidentity} className='img-fluid' alt='Texas Book Publishing' />

                        </Col>
                        <Col md={3}>

                            <div>
                                <h4 className='font16 fw600 color-blue t-center font-f'>AMAZON BOOK MARKETING</h4>
                                <p className='font15  textcolor t-center font-f'>Unleash the full potential of Amazon book marketing with our innovative approach that empowers authors at all stages of their career to effectively promote their stories. Our dedicated team specializes in crafting personalized advertisements that precisely appeal to your target audience, ensuring maximum exposure for your publication.</p>
                                <Link className={styles.lets} href='#'>Hire Us Today!</Link>
                            </div>

                            <div className='mt-5'>
                                <h4 className='font16 fw600 color-blue t-center font-f'>SEO</h4>
                                <p className='font15  textcolor t-center font-f'>Our marketers leverage the benefits of Search Engine Optimization to promote your book and ensure it stands out in search results. Through search engine marketing, we take advantage of untapped marketing opportunities, maximizing the visibility of your book to capture the maximum attention.</p>
                                <Link className={styles.lets} href='#'>LET'S  DISCUSS </Link>

                            </div>


                        </Col>

                    </Row>
                </Container>

            </div>

        </>
    )
}

export default Bestinclass