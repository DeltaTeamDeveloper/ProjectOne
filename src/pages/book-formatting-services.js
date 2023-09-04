import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import mission1 from '/public/images/bookformating/icon-1.png'
import mission2 from '/public/images/bookformating/icon-2.png'
import mission3 from '/public/images/bookformating/icon-3.png'
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



const EbookWritingservices = () => {

  const newSpan = <h1 className='font50 fw700 text-black font-f hero-span'>Exceptional <span className='color-blue'>Book Formatting Services</span></h1>

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Transform your book from an ordinary manuscript to a professionally formatted masterpiece! As an aspiring author, you know the importance of a captivating story, but have you considered the impact of an impeccable layout? Enhance your reader’s experience and set yourself apart with our team of exceptional experts.',
      subtext1: "Don't settle for anything less than perfection. Contact us today to embark on your journey towards literary success. Let us transform your vision into a book that you can proudly showcase to the world!",
      discuss: discuss,
      homebannernum: 'CAll US NOW',
      banners: 'bookformattingservices',
    }
  ]


  const geta = <span className='fw700 color-black'>With Us, Get Ready To Finally See Your Hard Work In Print!</span>

  const titleDb = <span>Do You Want To Captivate Your Readers From Beginning To End?
  </span>
  const posdata = <span className='fw700' >Give Your Book The Professional Look It Deserves With Our <Link className='color-blue textdocationnone hover' href='/book-formatting-services'>Formatting Services!</Link> </span>


  const fine = [

    {
      img: mission1,
      title: 'Polishing Your Book',
      text: 'Our team of skilled formatting professionals eagerly awaits your manuscript to begin transforming it into a masterpiece. Armed with a keen eye for detail, we meticulously identify any flaws and swiftly refine them, resulting in a flawlessly polished book that surpasses all expectations.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Bringing the Right Expertise and Tools to the Table',
      text: 'Our team of skilled professionals will leave no stone unturned as they polish every detail of your manuscript using the most effective formatting tools. Experience the magic as your book emerges with a vibrant and captivating charm that will captivate readers far and wide.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Tailored Book Formatting Services',
      text: 'Experience our unparalleled book formatting services tailored to your specific genre and individual requirements. We guarantee an uncompromising commitment to excellence, leaving no detail untouched in transforming your manuscript into a true work of art!',
      class: 'fintop',


    },


  ]



  const WaitingForSomeone = <span>Transform Your Book Into an <Link className='color-blue textdocationnone hover' href='/ebook-writing-services' >eBook!</Link></span>

  const text = <span>Revolutionize your book-writing journey with our team of professional specialists. Don't miss the chance to tap into the expertise of our eBook Writing Experts, known for their exceptional ability to craft persuasive words and impeccable linguistics that will elevate your work to new heights. You no longer have to worry about originality, as our customized solutions guarantee unique content delivered right on time. Best of all, our services are affordable, so you can achieve your dreams without breaking the bank. Contact us today and witness the magic yourself!
  </span>


  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/formatting-services/"
  //   },
  //   "headline": "Formatting Services To Help You Pen Down Your Thoughts Effortlessly!",
  //   "description": "Formatting Services",
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
  //   "url": "https://texasbookpublishing.com/book-formatting-services/",
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
  //   "url": "https://texasbookpublishing.com/book-formatting-services/",
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
  //   "@context": "https://schema.org/",
  //   "@type": "WebSite",
  //   "name": "bookwritingexperts",
  //   "url": "https://texasbookpublishing.com/book-formatting-services/",
  //   "potentialAction": {
  //     "@type": "SearchAction",
  //     "target": "https://texasbookpublishing.com/formatting-services/search?q={search_term_string}",
  //     "query-input": "required name=search_term_string"
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
        <title>Book Formatting Services - Texas Book Publishing</title>
        <meta name="description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />
        <link rel="canonical" href="/book-writing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book Formatting Services - Texas Book Publishing" />
        <meta property="og:description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />
        <meta property="og:url" content="/book-writing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="6 minutes" />
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
          discuss={item.discuss}
          homebannernum={item.homebannernum}
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


      {/* Stopworrying */}
      <Stopworrying
        title={titleDb}
        subtitle3={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-blue font25 fw600 t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw700 colortextgrey t-center pb-2'>Why Texas Book Publishing Is Your Best Bet For <span className='color-blue'>eBook Formatting</span>
            </p>

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




      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              Our book writing team is composed of the industry's elite who know the ins and outs of the writing industry better than any of us. If you have any more questions about signing up for the professional book writing services, we may have your answers listed below!
            </p>

          </Row>

          <Row>
            {whybookpublishingdata.map((item, i) =>
              <Whybookpublishing key={i}
                title={item.title}
                text={item.text}
                col6={item.col6}
              />
            )}
          </Row>
        </Container>
      </div> */}




      {/* Selfpublishing */}

      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="CAll US NOW"
          discuss="LET'S DISCUSS"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>





      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Lululogos components */}
      <Lululogos />




      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Unlock the Power of Your Words: Elevate Your Book with our Professional Formatting Services!'
          text="Your groundbreaking idea deserves a partner that propels it from conception to reality. Trust us to handle every vital aspect, guiding your vision towards a lasting legacy. Together, let's transform your unique concept into an extraordinary endeavor, etched forever in the written word."
          number="CAll US NOW"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices