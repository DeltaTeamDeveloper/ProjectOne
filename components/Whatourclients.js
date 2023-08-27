import React from 'react'
import styles from '@/styles/Whatourclients.module.css'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import avtar1 from '../public/images/testimonial/avatar-11.png'
import avtar2 from '../public/images/testimonial/avatar-22.png'
import avtar3 from '../public/images/testimonial/avatar-33.png'

// footer icons
import { AiFillStar } from 'react-icons/ai';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Whatourclients = () => {

  var whatourclients = {
    dots: false,
    arrows: true,
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
        <Container className='testtimonials clintTesti'>
          <h3 className='font18 fw700 text-center color-blue mb-5'>Client Testimonials </h3>

          <Slider {...whatourclients}>


            <div className={styles.testiCard}>

              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>

                Since I was short on money and couldn’t afford an expensive proofreader for the book, I was legit quite worried because having a second opinion is always better? My friend recommended Texas Book Publishing’ affordable proofreading services, and wow! They were very accommodating and got my work done in 3 days only. So happy!

              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar1}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>Dyuti Hai</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>This was my first book to be 	My sister was struggling with her book sales; I recommended Texas Book Publishing book promotion services. Since then the sales have skyrocketed. I have never seen such great results in a short time. I had some difficulty understanding the formatting process for chapters and their titles.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar2}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>James Moris</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.whatclientlogo}>    </div>
              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>I worked with Sam Jordan for a few months preparing my first book. Sam was very helpful and courteous. We connected on the phone several times a week. I am not the most patient person, but I found Sam to be capable and professional. He helped me overcome any fears I had about the process.</p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar3}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>Ron</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>
            
            <div className={styles.testiCard}>

              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>

                Since I was short on money and couldn’t afford an expensive proofreader for the book, I was legit quite worried because having a second opinion is always better? My friend recommended Texas Book Publishing’ affordable proofreading services, and wow! They were very accommodating and got my work done in 3 days only. So happy!

              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar1}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>Dyuti Hai</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>This was my first book to be 	My sister was struggling with her book sales; I recommended Texas Book Publishing book promotion services. Since then the sales have skyrocketed. I have never seen such great results in a short time. I had some difficulty understanding the formatting process for chapters and their titles.
              </p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar2}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>James Moris</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>

            <div className={styles.testiCard}>
              <div className={styles.whatclientlogo}>    </div>
              <h2 className={styles.value}>Glowing Testimonials: Hear What <br /> Our Esteemed Clients Say!</h2>
              <p className={`${styles.canva}`}>I worked with Sam Jordan for a few months preparing my first book. Sam was very helpful and courteous. We connected on the phone several times a week. I am not the most patient person, but I found Sam to be capable and professional. He helped me overcome any fears I had about the process.</p>

              <div className={styles.clientData}>
                <div>
                  <Image loading="lazy" className='img-fluid'
                    src={avtar3}
                    alt='bookwritingexperts'
                  />
                </div>
                <div className={styles.clientDataTxt}>
                  <p className='font14 color-blue mb-1'><b>Ron</b></p>
                  <p className={styles.stars}><AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /> <AiFillStar size={20} /></p>
                </div>
              </div>
            </div>

          </Slider>


        </Container>

      </div>
    </>
  )
}

export default Whatourclients