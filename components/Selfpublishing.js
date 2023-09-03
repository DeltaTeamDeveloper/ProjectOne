import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Selfpublishing.module.css'
import Image from 'next/image'
import Link from 'next/link'




const Selfpublishing = (props) => {
    return (
        <>

            <div className={styles[props.whychooseclass]}>
                <Container>
                    <Row className={`${styles.middle} gy-4`}>

                        <Col md={7}>

                            <div className={styles.cube}>

                                <h3 className="fw700 font30 color-blue font-f mb-3">{props.title}</h3>
                                <p className='font15  font-f textcolor'>{props.text}</p>
                                {props.subtext ?

                                    <p className='font15  font-f textcolor'>{props.subtext}</p>
                                    :
                                    ''
                                }


                                <div className='mt-5'>
                                    <Link className={styles.asdiscuss} href="#">{props.discuss}</Link>
                                    <Link className={styles.asnumber} href="tel:(346) 502-3898"> {props.number}</Link>

                                </div>

                            </div>


                        </Col>

                        <Col md={4}>

                            <div className={styles.image}>
                                <Image loading="lazy" src={props.image} className={`${styles.imgshowdow} img-fluid`} alt='Texas Book Publishing'></Image>
                            </div>

                        </Col>
                    </Row>
                </Container>



            </div>

        </>
    )
}

export default Selfpublishing