import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Stoppublish.module.css'


const Stoppublish = (props) => {
  return (
    <div className={styles[props.stopworrying]} >

      <Container>
        <Row>
          <Col md={12}>
            <h3 className='font25 font-f t-center text-white fw300'> {props.title} </h3>



            {props.title2 ?

              <h3 className='font40 font-f t-center text-white fw300'> {props.title2} </h3>
              :

              ''

            }

            {props.subtitle3 ?

              <p className='font15 text-white fw100 font-f t-center mt-4'>{props.subtitle3}</p>
              :
              ''

            }
            {props.subtitle4 ?

              <p className='font15 text-white fw100 font-f t-center'>{props.subtitle4}</p>
              :
              ''

            }


            <p className='font15 text-white fw100 font-f t-center'>{props.text}</p>
            {props.subtext ?

              <p className='font15 text-white fw100 font-f t-center'>{props.subtext}</p>
              :
              ''
            }


            <h2 className='font40 text-white fw300 font-f t-center mt-4'>{props.subtitle}</h2>
            {props.subtitle2 ?

              <p className='font18 text-white fw100 font-f t-center mt-4'>{props.subtitle2}</p>
              :
              ''

            }





            <div className={styles.aligntop}>

              <Link href='#' className={styles.btn1}> {props.btn1} </Link>
              <Link href='#' className={styles.btn2}> {props.btn2} </Link>
              <Link href='tel:+13465023898' className={styles.btn2}>CAll US NOW</Link>

            </div>

          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Stoppublish