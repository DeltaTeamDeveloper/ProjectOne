import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Onestepsolutions.module.css'
import Link from 'next/link'
import Image from 'next/image'
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// images
import book100 from '../public/images/thousandsofstruggling/Book-Mockup1.png'
import book101 from '../public/images/thousandsofstruggling/Book-Mockup2.png'
import book102 from '../public/images/thousandsofstruggling/Book-Mockup3.png'
import book105 from '../public/images/thousandsofstruggling/Book-Mockup4.png'
import book106 from '../public/images/thousandsofstruggling/Book-Mockup5.png'

const Onestepsolutions = () => {

  const numdat1 =
    <span className={styles.join}>Our team of talented writers specializes in crafting engaging and immersive stories in various genres. We'll breathe life into your characters, construct a gripping plotline, and create an unforgettable reading experience. Let our <strong>fiction book writing services</strong> help you bring your imagination to life!</span>

  const numdat2 =
    <span className={styles.join}>Are you a non-fiction author in need of expert guidance to transform your ideas into a captivating book? Our non-writing service specializes in crafting exceptional non-fiction books that resonate with readers. With our in-depth research, engaging writing style, and professional <strong>eBook editing</strong>, we’ve got everything you’re looking for! Get ready to captivate readers and make an impact with our remarkable non-fiction book writing services.</span>

  const numdat3 =
    <span className={styles.join}>Are you eager to share your life's adventures and experiences with the world? Our <strong>autobiography writing services</strong> are here to bring your story to life! Our team of professional writers will carefully craft your unique journey into a captivating narrative that will inspire and engage readers. Let us help you leave a lasting legacy with our top-notch autobiography writing services.</span>

  const numdat4 =
    <span className={styles.join}>Are you an aspiring Christian author longing to share your message with the world? Look no further! Our Christian <strong>Ebook writing services</strong> are tailored to help you craft an impactful and inspiring manuscript that will captivate readers. Let our team of experienced writers guide you through the process, turning your vision into a compelling story that will leave a lasting impact on hearts and minds. Start your journey today and fulfill your calling as a Christian author!</span>

  const numdata5 = <span>Are you looking for captivating children's books that will delight and inspire young minds? Look no further! Our expert <strong>eBook writers</strong> will bring stories to life with enchanting characters, vibrant illustrations, and captivating plots that will spark every child's creativity. From picture books to chapter books, we offer tailored and engaging content that will foster a love for reading.</span>



  const makestoriesimg =
    [

      {
        num: '01',
        title: 'Fiction Books',
        text: numdat1,
        storiesimg: book100
      },
      {
        num: '02',
        title: 'Non-Fiction',
        text: numdat2,
        storiesimg: book101
      },
      {
        num: '03',
        title: 'Autobiography',
        text: numdat3,
        storiesimg: book102
      },
      {
        num: '04',
        title: 'Christian Book',
        text: numdat4,
        storiesimg: book106
      },
      {
        num: '05',
        title: 'Children`s Book',
        text: numdata5,
        storiesimg: book105
      },

    ];



  var makestories = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className={styles.onestepsolutions}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='font-fss fw500 colortextgrey t-center mb-5'>Our <Link className='color-blue textdocationnone fw700' href="/">Book Writing Company</Link> Will Be A One Stop Solution For You!</h2>
            </Col>

            <Col md={12}>

              <Slider {...makestories} className='makestories'>

                {makestoriesimg.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className={styles.boxSlide}>
                        <div>
                          <h3 className='color-blue font-f font30 fw600 maxwidth mb-4'>{item.title}</h3>
                          <p className={` ${styles.wrtingtext} font15 font-f textcolor maxwidth`}>{item.text}</p>
                        </div>
                        <div>
                          <Image loading="lazy" className='img-fluid' src={item.storiesimg} alt='Texas Book Publishing' />
                        </div>
                      </div>
                    </div>
                  )
                })}

              </Slider>

            </Col>

          </Row>
        </Container>

      </div>
    </>
  )
}

export default Onestepsolutions