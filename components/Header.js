import React, { useState } from 'react'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../public/images/logo.png';
import footerlogo from '../public/images/footerlogo.png'
import { IoMdArrowDropdown } from 'react-icons/io';
import Sticky from '../components/Sticky';
//
import publish from '../public/images/headericon/publish.gif'
import writing from '../public/images/headericon/writing.gif'
import editing from '../public/images/headericon/editing.gif'
import marketing from '../public/images/headericon/marketing.gif'
import formatting from '../public/images/headericon/formatting.gif'
import illustration from '../public/images/headericon/illistration.gif'
import digital from '../public/images/headericon/digital.gif'
import trailer from '../public/images/headericon/trailer.gif'
import reading from '../public/images/headericon/reading.gif'
import ebook from '../public/images/headericon/ebook.gif'
import audio from '../public/images/headericon/audio.gif'
import ghost from '../public/images/headericon/ghost.gif'
import website from '../public/images/headericon/website.gif'
import business from '../public/images/headericon/business.gif'
import backarrow from '../public/back-arrow.webp'
import Modal from 'react-bootstrap/Modal';
import Getstarted from './Getstarted'
import { useRouter } from "next/router";


const Header = () => {

  const [click, setclick] = useState(false);

  function toggle() {

    setclick((prevState) => !prevState);
  }

  const [show, setShow] = useState(false);

  function modal(e) { e.preventDefault(); setShow(true); }
  function closemodal() { setShow(false); }


  const router = useRouter();


  const [isActive, setIsActive] = useState(false);
  const [megamenu, setMegaMenu] = useState(false);


  const handleMenu = () => {
    setIsActive((prev) => !prev);
  }

  const handleMegaMenu = () => {
    setMegaMenu((prev) => !prev);
  }



  return (
    <>
      <header className={styles.headerhome}>
        <Container className={styles.headerContainer}>
          <div className={styles.navLogo}>
            <Link href="/">
              <Image loading="lazy" className={styles.logonew} src={logo} alt='logo' />
            </Link>
          </div>
          <nav className={styles.navBar}>
            <ul className={isActive ? `${styles.navalign} ${styles.active}` : `${styles.navalign}`}>
              <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                <Link href="/" onClick={handleMenu}>
                  <Image loading="lazy" className="img-fluid" src={footerlogo} alt='logo' />
                </Link>
              </div>
              <ul className={styles.align_menu}>
                <li className={styles.navlinks} onClick={handleMenu}>
                  <Link className={styles.menulinks} href="/">Home</Link>
                </li>
                <li className={`${styles.navlinks} ${styles.serviceshover}`} onClick={handleMegaMenu}>
                  <Link className={styles.menulinks} href="">
                    Services
                    <IoMdArrowDropdown size={12} />
                  </Link>
                  <div className={megamenu ? `${styles.megamenu} ${styles.opnMenu}` : `${styles.megamenu}`}>
                    <div className={styles.backArrow}>
                      <Image alt="bitswits"
                        src={backarrow}
                      />
                    </div>
                    <Row>
                      <Col lg={4}>
                        <ul className={`${styles.border}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={publish} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-publishing-services">Book Publishing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={writing} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-writing-services">Book Writing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={editing} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-editing-services">Book Editing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={marketing} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-marketing-services">Book Marketing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={formatting} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-formatting-services">Book Formatting Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={4}>
                        <ul className={`${styles.border}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={illustration} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/illustration">Illustration</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={digital} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/digital-marketing-services">Digital Marketing</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={trailer} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-trailer-services">Book Trailer Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={reading} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-proofreading-services">Proofreading Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={ebook} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ebook-writing-services">Ebook Writing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={4}>
                        <ul className={`${styles.border} ${styles.lastCol}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={audio} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/audio-book-production">Audio book production </Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={ghost} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ghostwriting-services">Ghostwriting Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={website} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/web-content-writing-services">Web Content Writing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={business} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/business-plan-writing-services">Business Plan Writing Services</Link>
                              <p>Get A Customized Solution By Best Publishing Services.</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </li>
                <li className={styles.navlinks} onClick={handleMenu}>
                  <Link className={styles.menulinks} href="/pricing">Pricing</Link>
                </li>
                <li className={styles.navlinks} onClick={handleMenu}>
                  <Link className={styles.menulinks} href="/about">About Us</Link>
                </li>
                <li className={styles.navlinks} onClick={handleMenu}>
                  <Link className={styles.menulinks} href="/contact">Contact us</Link>
                </li>
                <li onClick={modal} className={`${styles.navlinks} ${styles.headertel} ${styles.headerbtnspacing}`}>
                  <Link className={styles.headerbtncolor} href="">Get A Quote</Link>
                </li>
                <li className={`${styles.navlinks} ${styles.headertel}`} onClick={handleMenu}>
                  <Link className={`${styles.headerbtncolor} ${styles.headericon}`} href="tel:(346) 502-3898"> Call Us Now </Link>
                </li>
              </ul>
            </ul>
          </nav>
          <div className={styles.navTogle} onClick={handleMenu}>
            <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
            <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
            <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
          </div>
        </Container>
      </header>


      <Sticky />


      <Modal show={show} centered onHide={closemodal} className='getmodal'>
        <Modal.Body> <Getstarted /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

      </Modal>


    </>
  )
}

export default Header