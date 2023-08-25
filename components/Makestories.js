import React from 'react'
import styles from '@/styles/Makestories.module.css'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

// images
import makestories1 from '../public/images/makestories/Book-Mockup1.png'
import makestories2 from '../public/images/makestories/Book-Mockup2.png'
import makestories3 from '../public/images/makestories/Book-Mockup3.png'
import makestories4 from '../public/images/makestories/Book-Mockup4.png'
import makestories5 from '../public/images/makestories/Book-Mockup5.png'
import makestories6 from '../public/images/makestories/Book-Mockup6.png'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Makestories = (props) => {


  const makestoriesimg =
    [

      { storiesimg: makestories1 },
      { storiesimg: makestories2 },
      { storiesimg: makestories3 },
      { storiesimg: makestories4 },
      { storiesimg: makestories5 },
      { storiesimg: makestories6 },


    ];

  var makestories = {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

      <div className={styles.makestories}>

        <Container>
          <h2 className="fw900 font40 color-blue font-f t-center">{props.title} </h2>
          <h2 className="font18 fw500 font-f t-center mb-5"> {props.para}</h2>

          <Slider {...makestories} className='newStory'>

            {makestoriesimg.map((item, i) => {
              return (
                <div key={i}>
                  <Image loading="lazy" className='pt-3 img-fluid' src={item.storiesimg} alt='Texas Book Publishing'></Image>
                </div>
              )
            })}

          </Slider>


        </Container>





      </div>


    </>
  )
}

export default Makestories