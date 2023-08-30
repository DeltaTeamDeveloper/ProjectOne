import React from 'react'
import styles from '@/styles/Makestories.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

// images
import makestories1 from '../public/images/makestories/Book-Mockup1.png'
import makestories2 from '../public/images/makestories/Book-Mockup2.png'
import makestories3 from '../public/images/makestories/Book-Mockup3.png'
import makestories4 from '../public/images/makestories/Book-Mockup4.png'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Buildingyour = (props) => {


  const makestoriesimg =
    [

      { storiesimg: makestories1 },
      { storiesimg: makestories2 },
      { storiesimg: makestories3 },
      { storiesimg: makestories4 },


    ];





  return (
    <>

      <div className={styles.makestories}>

        <Container>
          <h2 className="fw700 font40 color-blue font-f t-center mb-4">Become a Recognized Author</h2>
          <h2 className="font15 textcolor font-f t-center mb-5">Are you finished with book publishing? It's time to take charge of your story and market your work. If you need assistance, our digital marketing agency is dedicated to helping you succeed!</h2>


          <Row>
            {makestoriesimg.map((item, i) => {
              return (
                <Col md={3} key={i}>
                  <div>
                    <Image loading="lazy" className='p-4 img-fluid' src={item.storiesimg} alt='Texas Book Publishing'></Image>
                  </div>
                </Col>
              )
            })}

          </Row>

        </Container>





      </div>


    </>
  )
}

export default Buildingyour