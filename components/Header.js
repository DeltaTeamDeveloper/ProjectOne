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
import headericon1 from '../public/images/headericon/1.png'
import headericon2 from '../public/images/headericon/2.png'
import headericon3 from '../public/images/headericon/3.png'
import headericon4 from '../public/images/headericon/4.png'
import headericon5 from '../public/images/headericon/5.png'
import headericon6 from '../public/images/headericon/6.png'
import headericon7 from '../public/images/headericon/7.png'
import headericon9 from '../public/images/headericon/9.png'
import headericon10 from '../public/images/headericon/10.png'
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
                    <Row >
                      <Col lg={4}>
                        <ul className={`${styles.border}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon1} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-publishing-services">Book Publishing Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon2} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-promotion-services">Book Promotion Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon3} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-writing-services">Book Writing Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon4} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-editing-services">Book Editing Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon5} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-marketing-services">Book Marketing Services</Link>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={4}>
                        <ul className={`${styles.border}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/illustration">Illustration</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/digital-marketing-services">Digital Marketing</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-trailer-services">Book Trailer Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon6} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-proofreading-services">Proofreading Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon9} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ebook-writing-services">Ebook Writing Services</Link>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={4}>
                        <ul className={`${styles.border} ${styles.lastCol}`} >
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/audiobookproduction">Audio book production </Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon3} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/ghostwriting-services">Ghostwriting Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon7} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/book-formatting-services">Book Formatting Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon5} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/web-content-writing-services">Web Content Writing Services</Link>
                            </div>
                          </li>
                          <li className={`${styles.navlinks} ${styles.megaLinks}`} onClick={handleMenu}>
                            <Image loading="lazy" alt="Texas Book Publishing" src={headericon2} className='img-fluid'></Image>
                            <div className={styles.megaDiv}>
                              <Link className={styles.menulinks} href="/business-plan-writing-services">Business Plan Writing Services</Link>
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