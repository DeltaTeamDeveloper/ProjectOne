import React, { useState } from 'react'
import styles from '@/styles/Strugglingtogive.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { TiTick } from 'react-icons/ti'
import Signup from './Signup'

const Strugglingtogive = (props) => {


  
    const [click, setclick] = useState(false);

  function toggle() {

    setclick((prevState) => !prevState);
  }

  const [show, setShow] = useState(false);

  function modal(e) { e.preventDefault(); setShow(true); }
  function closemodal() { setShow(false); }
  
    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    return (
        <div className={styles.strugglingtogive}>

            <Container>
                <Row className={` ${styles.forent} gy-5`}>
                    <Col lg={7}>
                        <h2 className='color-blue font40 fw700 font-f mb-4'>Turning Manuscripts into Milestones: Self-Publishing Services Designed For Success</h2>
                        <p className='textcolor fw600 font-f font15'>We handle the details; you enjoy the success.</p>
                        <div className='mb-4 mt-3'>
                            <p className='textcolor font-f font15'>Just leave it to us! Whether your manuscript needs a new layout or cover, we have the best book publishers to strategically walk you through the process so you don’t have to stress about anything.</p>
                            <p className='color-blue fw600 font-f font15'>Your Story, Your Success: <strong>Publish Your Book</strong> with Confidence</p>
                            <p className='textcolor font-f font15'>Imagine holding your published book in your hands, knowing it’s the result of your determination and our dedication.</p>
                            <p className='textcolor font-f font15'>With our assistance, you can confidently navigate the world of <strong>self-publishing on Amazon</strong> like a pro.</p>
                        </div>
                        <div>
                            <a href="javascript:void(0)" onClick={modal}> <button  className={styles.btnget1}> {props.btn1} </button></a>
                            <a href="javascript:$zopim.livechat.window.show();"><button className={styles.btnget2}> {props.btn2} </button></a>
                            <a href='tel:(346) 502-3898'><button className={styles.btnget2}> {props.btn3} </button></a>
                        </div>
                    </Col>

                    <Col lg={5}>

                        <Signup
                            bannershome='signup'
                            contacttext='contacttextblack'
                        />



                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Strugglingtogive