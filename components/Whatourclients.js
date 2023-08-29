import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Whatourclients.module.css'
//
import avtar1 from '../public/images/testimonial/avatar-1.png'
import avtar2 from '../public/images/testimonial/avatar-2.png'
import avtar3 from '../public/images/testimonial/avatar-3.png'
import avtar4 from '../public/images/testimonial/avatar-1.png'
import avtar5 from '../public/images/testimonial/avatar-2.png'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {

  var whatourclients = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className={styles.ourclients}>
        <Container>
          <Row>
            <Col>
              <h3 className='font30 fw700 text-center color-blue mb-5'>Client Testimonials </h3>

              <Slider {...whatourclients} className='revcard'>

                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.review}>
                      <h4 className={styles.value}>
                        A Guiding Light for Upcoming Authors!
                      </h4>
                      <p className={`${styles.canva}`}>
                        I found Texas Book Publishing after an unsuccessful hunt for a dependable publisher. The genuine collaboration of their group was a welcome change. They went above and beyond to help me and that genuinely left me impressed.
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar1}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-white mb-1'><b>Dyuti Hai</b></p>
                        <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.review}>
                      <h4 className={styles.value}>
                        I like the services they provided.
                      </h4>
                      <p className={`${styles.canva}`}>
                        Since this was my first book  published, I was really anxious and unsure about the company I should be sending my money on. My expectations for Texas Publishing have  EXCEEDED. I couldn't be happier with their team's sincerity and dedication.
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar2}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-white mb-1'><b>Dyuti Hai</b></p>
                        <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.review}>
                      <h4 className={styles.value}>
                        I absolutely loved the finished product.
                      </h4>
                      <p className={`${styles.canva}`}>
                        The design team at Texas Book Publishing produced an attractive and unique cover for my most recent book. They were very cooperative, understanding, and enthusiastic about my idea. I got a lot of positive feedback on the book cover!
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar3}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-white mb-1'><b>Dyuti Hai</b></p>
                        <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.review}>
                      <h4 className={styles.value}>
                        They transformed my manuscript.
                      </h4>
                      <p className={`${styles.canva}`}>
                        I had this book, not the most exciting one, a murder mystery called "Shadows of Doubt." Feeling lost in the publishing world, I discovered Texas Book Publishing. Their team guided me so well throughout the process.
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar4}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-white mb-1'><b>Dyuti Hai</b></p>
                        <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.review}>
                      <h4 className={styles.value}>
                        A trustworthy company.
                      </h4>
                      <p className={`${styles.canva}`}>
                        I wanted to share my book with the world, and Texas Book Publishing made it happen in the best way. Right from the start, their team felt like friends cheering me on. They listened to me and worked with me – it was like a team effort.
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar5}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 mb-1'><b>Dyuti Hai</b></p>
                        <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                      </div>
                    </div>
                  </div>
                </div>

              </Slider>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Whatourclients