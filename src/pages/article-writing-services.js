import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import publishmybook from '/public/images/selfpublishingservices/4.jpg'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Aspiring from '../../components/Aspiring'
import Whatourclients from '../../components/Whatourclients'
import Selfpublishing from '../../components/Selfpublishing'
import Lululogos from '../../components/Lululogos'
import Customersatisfaction from '../../components/Customersatisfaction'
// css
import styles from '@/styles/Whybookpublishing.module.css'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import Finetoothedbook from '../../components/Finetoothedbook'




const articleWritingServices = () => {
  const text = <span>We write, market, and review books of all kinds.</span>;
  const subtext = <span> Profit from our wide range of book publication styles and forms to secure your position as a book writing guru. In addition to publishing children's books, we are among the top Amazon publishing service suppliers.</span>;

  const newSpan = <h1 className='font50 fw700 text-black font-f hero-span'>Magical <Link className='textdocationnone color-blue hover' href="/article-writing-services">Article Writing Services</Link> That Cast <br /> A Spell on Your Target Readers!</h1>;
  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Words have an enchanting effect on people, which is why we offer professional article writing services to produce captivating articles that leave your readers wanting more. Our team of highly-skilled and talented article writers understands the importance of content when it comes to expanding your reach for greater success.',
      discuss: discuss,
      homebannernum: 'Call Us Now',
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',
    }
  ]


  const geta = <span>Our Talented Writers Know The Art Of Turning Your Thoughts Into Compelling Pieces!</span>


  const work = <span>At Texas Book Publishing, our team of brilliant writers has the knowledge of the latest tricks and techniques that go into creating article pieces that increase engagement and boost a brand’s reach. Many of our writers have been behind some of the best-selling novels in recent years. Our aim is to help struggling authors make their mark in the ever-lasting and evolving industry of books. By collaborating with writers at Texas Book Publishing, you unlock the true potential of your talent and achieve your goals!</span>

  const dateset = <span className='fw500'><Link href="/article-writing-services/" className='textdocationnone color-blue hover'>Article Writing Services</Link> Aimed At Entertaining <br /> And Educating Your Ideal Readers!</span>


  // const schema = {

  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/book-publishing-services/"
  //   },
  //   "headline": "Providing Full Fledged Book Publishing Services To Our Struggling Authors",
  //   "description": "Top-Rated Book Publishing Services by Book Writing",
  //   "image": "https://texasbookpublishing.com/wp-content/uploads/2021/02/publishing.jpg?id=8354",
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
  //   "url": "https://texasbookpublishing.com/book-publishing-services/",
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
  //   "url": "https://texasbookpublishing.com/book-publishing-services/",
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
  //   "name": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
  //   "description": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
  //   "provider": {
  //     "@type": "Organization",
  //     "name": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
  //     "url": "https://texasbookpublishing.com/book-publishing-services/"
  //   },
  //   "serviceType": ["book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing"],
  //   "areaServed": {
  //     "@type": "country",
  //     "name": "us"
  //   }

  // }


  const fine = [

    {
      img: mission1,
      title: 'Experienced Article Writers',
      text: 'Texas Book Publishing’ Article Writers are familiar with the exact technique of adding flair to their articles, which enraptures your target audience every time. We come up with the greatest methods possible for our greatest clients!',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Compelling Content',
      text: 'Our skilled writers work on unique and high-quality pieces according to our client’s requirements. All our content is plagiarism-free and error-free!',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Quality Assurance',
      text: 'Before the content is delivered to our clients, we carry out thorough quality checks to ensure our work is polished to perfection just for you!',
      class: 'fintop',


    },
  ]



  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
        <meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <link rel="canonical" href="/book-publishing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
        <meta property="og:description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
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
          bannershome={item.banners}
          processs={item.process}
        />
      )}




      {/* Dowecome */}
      <Dowecome
        title={geta}
        text={work}
        Dowecome="publishmybook"

      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='Are You Looking For An Enthusiastic Writer To Convey Your Message To The World?'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>


      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray font25 t-center font-f mb-2'>Our Approach</h2>

            <p className='font40 font-f fw500 colortextgrey t-center mb-5'>Our <Link className='textdocationnone color-blue hover fw700' href='/article-writing-services/'>Professional Article Writing Services</Link> Are <br /> Designed To Captivate Your Readers</p>

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


      {/* Customersatisfaction */}
      <Customersatisfaction />



      <Selfpublishing
        title='Want Articles That Boost Engagement And Expand Your Reach?'
        text='Connect with our experienced writers that have the knowledge of the latest industry trends to write gripping articles, paving the way to success for you!'
        number="Call Us Now"
        discuss="LET'S DISCUSS"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>


      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title='Book Cover Designs That Stand Out'
          text='We are a fantastic choice for cover designs, page layouts, and book designs. We have a group of qualified graphic designers who have created dozens of book covers and page layouts. Our designers will work with you to ensure that your book and cover are supplied according to specifications using all of the information they have. To address any potential technical issues, we offer efficient maintenance for the given files.'

          number="Call Us Now"
          discuss="LET'S DISCUSS"

        />

      </div>




















    </>
  )
}

export default articleWritingServices