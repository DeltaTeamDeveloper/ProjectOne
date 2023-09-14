import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Whatourclients.module.css'
//
import quote from '../public/images/testimonial/quote.png'
import avtar1 from '../public/images/testimonial/01.png'
import avtar2 from '../public/images/testimonial/02.png'
import avtar3 from '../public/images/testimonial/03.png'
import avtar4 from '../public/images/testimonial/04.png'
import avtar5 from '../public/images/testimonial/05.png'
import avtar6 from '../public/images/testimonial/06.png'
import avtar7 from '../public/images/testimonial/07.png'
import avtar8 from '../public/images/testimonial/08.png'
import avtar9 from '../public/images/testimonial/avatar-1.png'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {

  var whatourclients = {
    dots: true,
    arrows: true,
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
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “Really love how professional they are. They walked me through the process and were very cooperative. They were super patient and made the whole experience stress-free!”
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar9}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-black mb-0'><b>Michele </b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “They made the publishing process a breeze. I’m SO glad I went with their services! I was at my wit’s end, not knowing what to do with my manuscript. But their team helped with the editing, formatting, and publishing. They took care of everything so I didn’t have to do much. What a relief!”
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
                        <p className='font14 text-black mb-0'><b>Brenda</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “They listened to me patiently as I asked them to make changes. I have to say, they are extremely cooperative and the person I spoke to was very polite. She understood what I wanted and only made suggestions when I gave feedback. They also took care of the cover design, editing, formatting, publishing. I highly recommend their services.”
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar8}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-black mb-0'><b>Kevin</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “I had a few personal commitments so I could not work on my draft. I had an idea, concept, and story that I wanted to execute. So, I found their services online and decided to give it a go. Not only did the finished product blow me away, I was highly impressed by their professionalism. Their team took care of everything for more. They did developmental editing and designed the cover as well. It all came out looking super professional! I’m thankful for their services”
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
                        <p className='font14 text-black mb-0'><b>Richard</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “They completed the project before the deadline, which is pretty impressive, ngl! They provided me with outstanding services, which I am very grateful for. They answered my emails on time, implemented my suggestions and feedback, and were great to work with. KUDOS to you and your team!”
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar6}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-black mb-0'><b>Trey</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “If you’re looking for exceptional writing services, I highly recommend these guys. Their process is easy and stress-free. I’m super pleased with them.”
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
                        <p className='font14 text-black mb-0'><b>Sarah</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “What I really love about them is that they give me honest feedback and suggestions to let me know where I can improve.”
                      </p>
                    </div>
                    <div className={styles.clientData}>
                      <div>
                        <Image loading="lazy" className='img-fluid'
                          src={avtar7}
                          alt='bookwritingexperts'
                        />
                      </div>
                      <div className={styles.clientDataTxt}>
                        <p className='font14 text-black mb-0'><b>Mark</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.revCards}>
                  <div className={styles.reviews}>
                    <div className={styles.quote}>
                      <Image loading="lazy" className='img-fluid'
                        src={quote}
                        alt='bookwritingexperts'
                      />
                    </div>
                    <div className={styles.review}>
                      <p className={`${styles.canva}`}>
                        “I worked with their team and my experience was amazing. They are very professional and accommodating. I highly recommend their services.”
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
                        <p className='font14 text-black mb-0'><b>Krystal</b></p>
                        <p className={styles.stars}><AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /></p>
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