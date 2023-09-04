import React from 'react'

// css
import styles from '@/styles/Serviceproviders.module.css'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import proposal from '/public/images/serviceproviders/3.svg'


const Serviceproviders = (props) => {
    return (
        <div className={styles.stopworrying}>

            <Container>
                <Row className={` ${styles.books} gy-5 `}>
                    <Col md={8}>
                        <h3 className='font25 font-f text-black fw300'> Stop worrying about publishing books! </h3>

                        <h2 className='font40 font-f text-black fw300'>
                            Let Our Best <Link className='color-blue fw700 textdocationnone hover' href="javascript:$zopim.livechat.window.show();">Amazon Kindle Direct  <br className="d-none d-xl-block" /> Publishing (KDP)</Link> Service Providers  <br className="d-none d-xl-block" /> Handle All Your Publishing Troubles!
                        </h2>

                        <div className={styles.aligntop}>

                            <Link href='#' className={styles.btn1}> Get A Free Proposal  </Link>
                            <Link href='#' className={styles.btn2}> Talk To An Expert  </Link>
                            <Link href='tel:+13465023898' className={styles.btn2}>CAll US NOW</Link>

                        </div>

                    </Col>
                    <Col md={3}>
                        <div className='text-center'>
                        <Image alt='Texas Book Publishing' src={proposal} className="img-fluid"></Image>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Serviceproviders