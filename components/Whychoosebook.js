import React from 'react'
import styles from '@/styles/Whychoosebook.module.css'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//
import whychoose from '/public/images/whychoosebooks/bg-img.png'
import icon1 from '/public/images/whychoosebooks/research.png'
import icon2 from '/public/images/whychoosebooks/customer.png'
import icon3 from '/public/images/whychoosebooks/speaker.png'
import icon4 from '/public/images/whychoosebooks/privacy.png'
import icon5 from '/public/images/whychoosebooks/writer.png'



const Whychoosebook = (props) => {
  return (
    <>

      <div className={styles.choosebook}>
        <Container>
          <Row className='align-items-center'>
            <Col lg={12}>
              <h2 className='fw700 font40 text-black font-f t-center'>
                {props.title}
              </h2>
              <p className={`${styles.whytext} font15 font-f t-center mt-3 mb-5 textcolor`}>
                {props.text}
              </p>
            </Col>
            <Col lg={6}>
              <div className={styles.whychoose}>
                <div className={styles.chosRow}>
                  <div className='pb-2'>
                    <span className='font30 fw500 font-f textcolor'>01</span>
                  </div>
                  <div className={styles.whychooseCnt}>
                    <span className='font20 fw500 font-f textcolor'>Research</span>
                    <Image loading="lazy" className='img-fluid' src={icon1} alt='Texas Book Publishing' />
                  </div>
                </div>
                <div className={styles.chosRow}>
                  <div className='pb-2'>
                    <span className='font30 fw500 font-f textcolor'>02</span>
                  </div>
                  <div className={styles.whychooseCnt}>
                    <span className='font20 fw500 font-f textcolor'>Customer Service</span>
                    <Image loading="lazy" className='img-fluid' src={icon2} alt='Texas Book Publishing' />
                  </div>
                </div>
                <div className={styles.chosRow}>
                  <div className='pb-2'>
                    <span className='font30 fw500 font-f textcolor'>03</span>
                  </div>
                  <div className={styles.whychooseCnt}>
                    <span className='font20 fw500 font-f textcolor'>Native English Speskers</span>
                    <Image loading="lazy" className='img-fluid' src={icon3} alt='Texas Book Publishing' />
                  </div>
                </div>
                <div className={styles.chosRow}>
                  <div className='pb-2'>
                    <span className='font30 fw500 font-f textcolor'>04</span>
                  </div>
                  <div className={styles.whychooseCnt}>
                    <span className='font20 fw500 font-f textcolor'>Privacy Guaranteed</span>
                    <Image loading="lazy" className='img-fluid' src={icon4} alt='Texas Book Publishing' />
                  </div>
                </div>
                <div className={styles.chosRow}>
                  <div className='pb-2'>
                    <span className='font30 fw500 font-f textcolor'>05</span>
                  </div>
                  <div className={styles.whychooseCnt}>
                    <span className='font20 fw500 font-f textcolor'>Experienced Ghost Writers</span>
                    <Image loading="lazy" className='img-fluid' src={icon5} alt='Texas Book Publishing' />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.whychooseimge}>
                <Image loading="lazy" className='img-fluid' src={whychoose} alt='Texas Book Publishing'></Image>
              </div>
            </Col>
          </Row>

        </Container>


      </div>

    </>
  )
}

export default Whychoosebook