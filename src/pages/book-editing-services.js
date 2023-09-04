import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import whychooseourbookeditingservices1 from '/public/images/whychooseourbookeditingservices/1.png'
import whychooseourbookeditingservices2 from '/public/images/whychooseourbookeditingservices/2.png'
import whychooseourbookeditingservices3 from '/public/images/whychooseourbookeditingservices/3.png'
import whychooseourbookeditingservices4 from '/public/images/whychooseourbookeditingservices/4.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'
import Cta from '../../components/Cta'
// css
import styles from '@/styles/Whybookpublishing.module.css'

const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>Book Editing Services</h1>

  const ideas = <span>Don’t trust your manuscript with just about anyone. When it comes to <strong>affordable book editing services</strong>, we are synonymous with quality. Whether you need to polish your manuscript or need to a quick grammar check, you can count on us to do an amazing job. We are one of the <strong>top book editing companies</strong> in Texas. </span>


  const discuss = <span>LET'S DISCUSS</span>



  const bannertext = [
    {
      title: newSpan,
      pra: ideas,
      subtext1: "But that’s not all we do. We make sure everything is perfect before hitting the ‘publish’ button. We bring your ideas and story to life. We make sure everything flows smoothly.",
      subtext2: "We have the secret ingredients to making sure your book takes the world by storm. Whether it’s developmental editing, proofreading, basic editing; just leave it all to us.",
      subtext3: "So, what are you waiting for? Get in touch with us today to get started.",
      discuss: discuss,
      homebannernum: '+1 (346) 502-3898 ',
      banners: 'bookeditingservices',
    }
  ]

  const posdata = <span>Let The  <Link className='textdocationnone color-blue fw500 hover' href='/book-editing-services'>Best Book Editing Service </Link> Rescue Your Manuscript</span>


  const finetitle = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Book Editing Service</Link>

  const finepare = <span>Don't settle for just any editor! Boost your book's success with the expertise and precision only a professional book editing service can offer. Invest in perfection and unlock the full potential of your work.</span>



  const finetitle1 = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Novel Editing Service</Link>

  const finepare1 = <span>Unlock the powerful potential of your novel with Texas Book Publishing - the masters of storytelling and novel editing. Let our expert editors sculpt your words, unleash your characters' brilliance, and ignite your plot's success. Don't accept anything less - transform your story into a mesmerizing bestseller today!</span>

  const finetitle2 = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Non-Fiction Editing Service</Link>

  const finepare2 = <span>Transform your raw facts into a mesmerizing narrative with our non-fiction editing expertise. Discover the power of clarity, precision, and enchanting literary magic, ensuring your ideas soar above mediocrity. Elevate your manuscript to success by hiring our exceptional team of non-fiction editors now!</span>


  const title2 = <span>A Glimpse Into Our <span className='color-blue'>Editing Process</span></span>


  const fine = [

    {
      img: mission1,
      title: finetitle,
      text: finepare,
      class: 'fintop',


    },

    {
      img: mission2,
      title: finetitle1,
      text: finepare1,
      class: 'fintop',


    },

    {
      img: mission3,
      title: finetitle2,
      text: finepare2,
      class: 'fintop',


    },


  ]

  const dateset = <span> Are You Ready to Bid Farewell to <br /> the Nightmares of  <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing</Link>? </span>


  const maketitle = <span>Our Portfolio of <span className='textdocationnone color-blue hover'>Book Editing</span> Projects</span>

  const book = <span>Words Perfected, Stories Enhanced - By our  <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link> for a flawless reading experience!</span>

  const collect = <span>Don't let your book collect dust on the shelf of mediocrity, hire the best <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link>  to polish your manuscript to perfection. </span>

  const mishaps = <span>Tired of False Promises? Hire A Professional <br /> <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing Service</Link>!</span>

  const errorless = <span>We don’t make false promises. We deliver your book within the given time. Our editors will go above and beyond to meet deadlines.</span>

  const glance = <span>Let Our Professionals Take Care of Everything!</span>

  const perplexing = <span>Turn your manuscript into a best-selling phenomenon with our expert book editors! Navigating the maze of editing, proofreading, and self-publishing has never been easier. Contact us today via call, text, or email to transform your dream of becoming a successful author into a reality!</span>


  // const schema = {


  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/book-editing-services/"
  //   },
  //   "headline": "Professional Book Editing Services For All The Idealists Within Their Reach",
  //   "description": "Book Editing Services",
  //   "image": "https://texasbookpublishing.com/wp-content/uploads/2021/02/editing-jpg.jpg?id=8355",
  //   "author": {
  //     "@type": "Organization",
  //     "name": "Mini Investments"
  //   },
  //   "publisher": {
  //     "@type": "Organization",
  //     "name": "",
  //     "logo": {
  //       "@type": "ImageObject",
  //       "url": ""
  //     }
  //   },
  //   "datePublished": "2022-03-18"


  // }
  // const schema1 = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "bookwritingexperts",
  //   "alternateName": "Texas Book Publishing",
  //   "url": "https://texasbookpublishing.com/book-editing-services/",
  //   "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
  //   "sameAs": [
  //     "https://texasbookpublishing.com/",
  //     "https://www.facebook.com/bookwritingexperts",
  //     "https://twitter.com/bookwritingexp",
  //     "https://www.instagram.com/bookwritingexpert/",
  //     "https://www.linkedin.com/company/book-writing-exp/",
  //     "https://www.pinterest.com/bookwritingexperts/"
  //   ]

  // }
  // const schema2 = {

  //   "@context": "https://schema.org",
  //   "@type": "ProfessionalService",
  //   "name": "bookwritingexperts",
  //   "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
  //   "@id": "",
  //   "url": "https://texasbookpublishing.com/book-editing-services/",
  //   "telephone": "2132893888",
  //   "priceRange": "$99",
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "445 S Figueroa St",
  //     "addressLocality": "Los Angeles",
  //     "addressRegion": "CA",
  //     "postalCode": "90071",
  //     "addressCountry": "US"
  //   },
  //   "geo": {
  //     "@type": "GeoCoordinates",
  //     "latitude": 34.0536155,
  //     "longitude": -118.2568651
  //   },
  //   "openingHoursSpecification": {
  //     "@type": "OpeningHoursSpecification",
  //     "dayOfWeek": [
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //       "Sunday"
  //     ],
  //     "opens": "00:00",
  //     "closes": "23:59"
  //   },
  //   "sameAs": [
  //     "https://texasbookpublishing.com/",
  //     "https://www.facebook.com/bookwritingexperts",
  //     "https://twitter.com/bookwritingexp",
  //     "https://www.instagram.com/bookwritingexpert/",
  //     "https://www.linkedin.com/company/book-writing-exp/",
  //     "https://www.pinterest.com/bookwritingexperts/"
  //   ]

  // }
  // const schema3 = {
  //   "@context": "https://schema.org",
  //   "@type": "Service",
  //   "name": "book editing services book editing company book editors",
  //   "description": "book editing services book editing company book editors book editing services book editing company book editors book editing services book editing company book editors",
  //   "provider": {
  //     "@type": "Organization",
  //     "name": "book editing services book editing company book editors",
  //     "url": "https://texasbookpublishing.com/book-editing-services/"
  //   },
  //   "serviceType": ["book editing services book editing company book editors"],
  //   "areaServed": {
  //     "@type": "country",
  //     "name": "us"
  //   }
  // }


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Editing Services at Affordable Price</title>
        <meta name="description" content="Are you looking for an affordable book editing services? Hire our professional book editors to review and proofread your book manuscript before publication." />
        <link rel="canonical" href="/book-editing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Editing Services at Affordable Price" />
        <meta property="og:description" content="Are you looking for an affordable book editing services? Hire our professional book editors to review and proofread your book manuscript before publication." />
        <meta property="og:url" content="/book-editing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:01:27+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.png" />


        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
        /> */}

      </Head>



      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext1={item.subtext1}
          subtext2={item.subtext2}
          subtext3={item.subtext3}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
          processs={item.process}
        />
      )}



      {/* Dowecome */}
      <Dowecome
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />

      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title={maketitle}
          para={book}
        />
      </div>


      {/* Stopworrying */}
      <Stopworrying
        title='Lost in the Editing Maze? Or Trapped in the Editing Enigma?'
        subtitle3={posdata}
        btn1='Get a free Proposal'
        btn2='Chat With Us Now!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="colortextgrey font40 fw700 t-center font-f mb-2"> <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing Services</Link> That We’re Offering</h2>

            <p className='font18 font-f fw500 colortextgrey t-center mb-5'> Find The Best Editing Style For Your Manuscript </p>

          </Row>

          <Row className='gy-5'>
            {fine.map((item, i) =>
              <Finetoothedbook key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                img1={item.img}
                btn={item.btn}
              />
            )}
          </Row>
        </Container>
      </div>


      <Ourprocess
        title2={title2}
        heading1='In-Depth Manuscript Analysis'
        para1={<>Discover the ultimate book optimization solution! Our expert team meticulously examines every element of your book, uncovering opportunities to amplify its structure, pace, character depth, and plot cohesion. Unleash your book's true potential with our unrivaled enhancement services.</>}
        num1='01'

        heading2='Line-by-Line Editing'
        para2={<>Experience the transformative power of our elite team of book editors. With meticulous attention to detail, we meticulously analyze your manuscript, incorporating expert suggestions to optimize sentence structure, clarity, and grammatical precision.</>}
        num2='02'

        heading3='Comprehensive Feedback'
        para3={<>Our expert feedback will elevate your narrative, intensify emotional impact, and refine your storytelling, culminating in an extraordinary and unforgettable reading adventure.</>}
        num3='03'

        heading4='Author-Editor Collaboration'
        para4={<>At Texas Book Publishing, we prioritize a strong partnership with you, collaborating closely to preserve the genuine essence of your voice while expertly refining your manuscript. Experience true authenticity in your work with our dedicated team.</>}
        num4='04'

        heading5='Quality Assurance '
        para5={<>Experience the power of our meticulous book QA process. We guarantee a flawless final review, incorporating all edits seamlessly. Trust us to prepare your manuscript for publication with unmatched precision.</>}
        num5='05'


      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={collect}
          btn1='Get a free Proposal'
          btn2='Chat With Us To Get Your Book Edited Today!'
        />
      </div>


      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col>
              <h2 className='text-black fw700 font40 font-f t-center'>Choose the Best: Hire <br></br> <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Top Book Editing Company</Link> in The US  </h2>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Selfpublishing */}
      <Selfpublishing
        title={<>Developmental Editing Service</>}
        text={<>At Texas Book Publishing, we wholeheartedly embrace the power of words. Our dedicated editors are passionate about perfecting stories of any length and style. Experience exceptional developmental editing/line-by-line editing services by choosing us to take your work to new heights.</>}
        number="(346) 502-3898"
        discuss="Hire The Best Book Editing Company Now!"
        image={whychooseourbookeditingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title={<>Editorial Assessment Services</>}
        text={<>Get the inside scoop on your manuscript with our top-notch editorial assessment. We offer a comprehensive evaluation that delves into your writing style, plot structure, pacing, and more. Find out your strengths and get expert recommendations to take your manuscript to the next level!</>}
        number="(346) 502-3898"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title={<>Structural Editing Service</>}
        text={<>Let our expert structural editors meticulously analyze your book's structure, flow, and coherence, guaranteeing an impeccably smooth reading experience. Partnering with our acclaimed editing company will fuel the creation of a captivating, finely-tuned narrative that effortlessly captivates readers from start to finish.</>}
        number="(346) 502-3898"
        discuss="Chat With Us Now! "
        image={whychooseourbookeditingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title={<>Copy-Editing Services</>}
        text={<>Our meticulous copy editors enhance language, elevate grammar, and perfect punctuation to ensure impeccable clarity. We eliminate errors and elevate your writing to a flawless and professional standard. Trust us to refine your prose to perfection.</>}
        number="(346) 502-3898"
        discuss="Discuss Your Project and Get Started With Us!"
        image={whychooseourbookeditingservices4}
        whychooseclass="marketyourbook"
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={mishaps}
          text={errorless}
          btn2='Chat With Our Experts Today!'
        />
      </div>



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}


      <Lululogos />



      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title={glance}
          text={perplexing}
          number="Call Us At (346) 502-3898 "
        />
      </div>




    </>
  )
}

export default Bookpublishingservices