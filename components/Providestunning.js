import React from 'react'
import styles from '@/styles/Providestunning.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'

// images
import cover1 from '../public/images/makestories/Book-Mockup1.png'
import cover2 from '../public/images/makestories/Book-Mockup1.png'
import cover3 from '../public/images/makestories/Book-Mockup2.png'
import cover4 from '../public/images/makestories/Book-Mockup3.png'
import cover5 from '../public/images/makestories/Book-Mockup5.png'
import cover14 from '../public/images/makestories/Book-Mockup6.png'
import cover15 from '../public/images/makestories/Book-Mockup7.png'
import cover16 from '../public/images/makestories/Book-Mockup8.png'


const Providestunning = (props) => {

    var mockupslider = {
        dots: false,
        loop:true,
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
        loop:true,
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
                       { props.title }

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
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover14} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover15} className='img-fluid' />
                            </div>
                            <div>
                                <Image loading="lazy" alt="Texas Book Publishing" src={cover16} className='img-fluid' />
                            </div>
                           
                        </Slider>
                    </Col>

                    <Col lg={12}>

                        <Link className={`${styles.portfolio} mt-5`} href="javascript:$zopim.livechat.window.show();">OUR PORTFOLIO</Link>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Providestunning