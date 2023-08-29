import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import styles from '@/styles/Banner.module.css'


const Homebanner = (props) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <div className={`${styles[props.bannershome]} bannergllobal`}>

                <Container>
                    <Row>
                        <Col xl={6} lg={12} md={12} className={styles[props.alignclass]}>

                            <div className={styles.homebannertext}>

                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.text ?

                                    <p className={`${styles.newPara}  font16 text-black font-f mt-4 m-0`}>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.text2 ?

                                    <p className={`${styles.newPara}  font16 text-black font-f mt-4 m-0`}>{props.text2}</p>
                                    :
                                    ''
                                }

                                {props.discuss ?
                                    <div className={`${styles.bannerBtns} mt-5`}>
                                        <Link className={styles.discuss} href="#">{props.discuss}</Link>
                                        <Link className={styles.homenumer} href="tel:(346) 502-3898"> {props.homebannernum}</Link>
                                    </div>
                                    :
                                    ''
                                }

                                {props.thankyou ?
                                    <div className='mt-5 mb-5'>
                                        <Link className={styles.thankyoubtn} href="/"> Back To The Home Page</Link>
                                    </div>
                                    :
                                    ''
                                }
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

export default Homebanner