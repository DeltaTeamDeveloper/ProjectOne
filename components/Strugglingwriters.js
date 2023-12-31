import React from 'react'
import styles from '@/styles/Strugglingwriters.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'

// images
import cover1 from '../public/images/thousandsofstruggling/Book-Mockup1.png'
import cover2 from '../public/images/thousandsofstruggling/Book-Mockup2.png'
import cover3 from '../public/images/thousandsofstruggling/Book-Mockup3.png'
import cover4 from '../public/images/thousandsofstruggling/Book-Mockup4.png'
import cover5 from '../public/images/thousandsofstruggling/Book-Mockup5.png'
import cover6 from '../public/images/thousandsofstruggling/Book-Mockup6.png'
import cover7 from '../public/images/thousandsofstruggling/Book-Mockup7.png'
import cover8 from '../public/images/thousandsofstruggling/Book-Mockup8.png'

const Strugglingwriters = () => {

    var mockupslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    var mockupslider2 = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        rtl: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className={styles.strugglingwriters}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className='font-f font40 fw700 t-center text-black'>Your Tales, Our Words: <span className='color-blue'>Hire Professional Book Writers</span></h2>
                        <p className='font15 font-f t-center textcolor mt-3'>We are not just any <strong>ghostwriting agency</strong>. At Texas Book Publishing, we get that your story is your heart’s timeless tune. Our team of devotee <strong>professional book writers</strong> works on your orchestration, embracing your distinct style, and bringing your vision to life. </p>
                    </Col>
                </Row>


                <Row className={`${styles.aligncenter}`}>
                    <Col md={12}>
                        <Slider {...mockupslider} className='mt-5 mockupslider'>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover1} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover2} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover3} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover4} className='img-fluid' />
                            </div>
                        </Slider>
                        <Slider {...mockupslider2} className='mt-5 mockupslider'>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover5} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover6} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover7} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover8} className='img-fluid' />
                            </div>
                        </Slider>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Strugglingwriters