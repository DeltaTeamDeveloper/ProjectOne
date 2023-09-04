import React from 'react'
import styles from '@/styles/Experts.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Experts = (props) => {
  return (
    <>
      <div className={styles.experts}>

        <Container>
          <Row>
            <Col md={12}>
              <h2 className='fw700 font40 text-white font-f t-center font-f mb-4'>{props.title}</h2>
              <p className='fw500 text-white t-center font-f mb-3'> {props.text}</p>
              <p className='fw500 text-white t-center font-f mb-3'> {props.text2}</p>
              <p className='fw500 text-white t-center font-f mb-3'> {props.text3}</p>
              <div className={`${styles.orBtns} mt-5`}>
                <div className={`${styles.expertnum} t-center font-f font-f`}>
                  <Link className={`${styles.discuss}`} href="tel:(346) 502-3898">{props.number}</Link>
                </div>
                <div className={styles.expertdiscuss}>
                  <Link className={`${styles.discuss1}`} href="javascript:$zopim.livechat.window.show();">{props.discuss}</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Experts