import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { BsFillPlayFill } from 'react-icons/bs'
import styles from '@/styles/Banner.module.css'


const Banner = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className={`${styles[props.bannershome]}`}>

        <Container>
          <Row>
            <Col md={6} className={styles[props.alignclass]}>

              <div className={`${styles.homebannertext} ${styles.otherBanner}`}>

                {props.title ?
                  props.title
                  :
                  ''
                }

                {props.text ?

                  <p className={`${styles.newPara}  font18 text-black font-f mt-4 m-0`}>{props.text}</p>
                  :
                  ''
                }

                {props.subtext ?

                  <p className={`${styles.newSubPara} font18 text-black font-f mt-4 m-0`}> <strong>{props.publishers}</strong> {props.subtext}</p>
                  :
                  ''
                }

                {props.subtext1 ?

                  <p className='fw500 font18 text-black font-f m-0'> {props.subtext1}</p>
                  :
                  ''
                }

                {props.subtext2 ?

                  <p className='fw500 font18 text-black font-f m-0'> {props.subtext2}</p>
                  :
                  ''
                }

                {props.subtext3 ?

                  <p className='fw500 font18 text-black font-f m-0'> {props.subtext3}</p>
                  :
                  ''
                }

                {props.subtext4 ?

                  <p className='fw500 font18 text-black font-f'> {props.subtext4} <strong>{props.subtext4bold}</strong> </p>
                  :
                  ''
                }

                {props.discuss ?
                  <div className={`${styles.bannerBtns} mt-5`}>
                    <Link className={styles.discuss} href="#">{props.discuss}</Link>
                    <Link className={styles.homenumer} href="tel:(346) 502-3898"> {props.homebannernum}</Link>


                    {/* {props.processs ?

                      <Link onClick={handleShow} className={` ${styles.homenumer} ${styles.new1} `} href='#'> <BsFillPlayFill size={25} /> {props.processs} </Link>

                      :
                      ''
                    } */}

                  </div>
                  :
                  ''
                }
                {props.thankyou ?
                  <div className='mt-5 mb-5'>

                    <Link className={styles.thankyoubtn} href="/"> Back To The Home Page</Link>
                  </div>
                  : ''}

                {props.free ?
                  <div className='mt-4 mb-5'>

                    <Link className={styles.free} href="#"> {props.free} </Link>
                  </div>
                  : ''}
              </div>
            </Col>
          </Row>
        </Container>


        <Modal className='modopp'
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          animation={false}

        >
          <span onClick={handleClose} className={styles.crossclose}>x</span>
          <Modal.Body className='modalprocess'>
            <video controls className={`${styles.bgVideo1}`} autoPlay muted loop src="/images/process-combine.mp4" type="video/mp4"></video>
          </Modal.Body>

        </Modal>



      </div>
    </>
  )
}

export default Banner