import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'


// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'


// css
import styles from '@/styles/Whybookpublishing.module.css'




const BookTrailerServcies = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>Book Trailer Services</h1>

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: (<span className='fw600'>Lights, camera, action!</span>),
      subtext1: "Imagine this: you just published a book and now it’s time to pitch it to the world. If you’re an author who’s looking for exceptional book trailer services, you’ve come to the right place.",
      subtext2: "We offer professional book trailers that are not only budget-friendly, but exclusive, concise, and visually-captivating. From animated book trailers, to author interviews, we’ve got it all!",
      subtext3: "So, what are you waiting for? Give us a call to get started.",
      discuss: discuss,
      homebannernum: 'CAll US NOW',
      banners: 'bookvideotrailer',
    }
  ]

  const geta = <span className='font50 fw700 font-f hero-span'>

    <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services/'> Book Video Trailers</Link>  Are The Future For
    <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services/'> Digital Book Promotions,</Link> Get On The Trend With Us!

  </span>

  const leveup = <span className='font40 fw700 font-f  color-black textdocationnone  hero-span'>Level Up Your <Link href='/book-trailer-services' className='textdocationnone color-black hover fw700'>Book Promotion</Link> Game With Our #1 <Link className='textdocationnone color-black hover fw700' href='/book-trailer-services'>Book Video Trailer Services</Link> </span>

  const posdata = <span>Creative <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services'>Book Video Trailers</Link> Are Now Accessible At One-Click; Reach Us Now!</span>

  const fine = [

    {
      img: mission1,
      title: 'Engaging Content',
      text: 'We understand the importance of creating a trailer that accurately reflects the tone and style of your book. We will work with you to ensure that your trailer is an accurate representation of your work.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Promotion',
      text: 'We have a wide network of contacts in the book industry, and we can help you promote your book through these channels. We will work with you to ensure that your book reaches the widest possible audience.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Creativity At Work',
      text: 'We are committed to helping you create a trailer that is both creative and informative. We will work with you to ensure that your trailer is entertaining and informative. With our help, you can create a book video trailer that will make a lasting impression on your audience.',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Need An Expert For Your <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'> Book Promotions? </Link>  </span>

  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/book-trailer-services/"
  //   },
  //   "headline": "Book Trailer Services That Create Hype For Your Digital Asset!",
  //   "description": "Book Trailer Services",
  //   "image": "",
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
  //   "datePublished": "2022-03-21"
  // }
  // const schema1 = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "bookwritingexperts",
  //   "alternateName": "Texas Book Publishing",
  //   "url": "https://texasbookpublishing.com/book-trailer-services/",
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
  //   "url": "https://texasbookpublishing.com/book-trailer-services/",
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



  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Impactful Book Trailer Services - Texas Book Publishing</title>
        <meta name="description" content="Book trailer services to make a lasting impression on your audience. Avail our services and stay ahead of your competitors." />
        <link rel="canonical" href="/book-trailer-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Impactful Book Trailer Services - Texas Book Publishing" />
        <meta property="og:description" content="Book trailer services to make a lasting impression on your audience. Avail our services and stay ahead of your competitors." />
        <meta property="og:url" content="/book-trailer-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:37:31+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
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
        text='What’s the best way to get people interested in your book? By creating a video trailer, of course! A book video trailer is a short, attention-grabbing clip that gives viewers a taste of what your book is all about. At Texas Book Publishing, we create visually appealing book video trailers infused with creativity and innovation!'
        subtext=''
        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      <Stopworrying
        title='With The Right Mediums,
        Book Promotion Is Not That Hard!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row>
            <h2 className="color-lightgray font25 t-center font-f mb-2">Our Approach</h2>

            <p className='font40 font-f fw500 colortextgrey t-center mb-5'>Beat Your Competitors with Concise, Informative, and Engaging <Link className='textdocationnone color-blue hover fw700' href='/book-trailer-services'>  Book Video Trailers</Link></p>

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

      {/* Selfpublishing */}
      <Selfpublishing
        title={leveup}
        text='First impression is indeed the last impression, which is why Texas Book Publishing offer the best book video trailer services for our valued clients. Make the right impression on your readers with compelling book video trailers! '

        number="CAll US NOW"
        discuss="LET'S DISCUSS"
        image={newimagetwoo}
        whychooseclass="marketyourbook"
      />



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}
      <Lululogos />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Let’s Commence On The Journey To Book Excellence!'
          text="Give us a call at (346) 502-3898, or hit us up with your queries by filling out the form below."
          number="CAll US NOW"
          discuss="LET'S DISCUSS"
        />

      </div>

    </>
  )
}

export default BookTrailerServcies