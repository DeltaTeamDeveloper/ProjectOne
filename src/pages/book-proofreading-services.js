import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Stillonthefence from '../../components/Stillonthefence'
import Major from '../../components/Major'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 text-black font-f hero-span'>Polish Your Writing to Perfection with <span className='color-blue'>Professional Proofreading Services</span></h1>

  const discuss = <span>LET'S DISCUSS</span>




  const bannertext = [
    {
      title: newSpan,
      pra: (
        <>
          Introducing Texas Book Publishing's exceptional professional proofreading services, designed to elevate your literary masterpiece to new heights! Our team of seasoned proofreaders meticulously scrutinizes every word, ensuring your manuscript is flawless, grammatically precise, and free of errors. With our unwavering commitment to perfection, your book will shine brilliantly, captivating readers and leaving them spellbound. Trust Texas Book Publishing's expert proofreading services to unveil the true potential of your magnum opus!
        </>
      ),
      discuss: discuss,
      homebannernum: '+1 (346) 502-3898',
      banners: 'offeringyoubook',




    }
  ]



  const reasons = [

    {
      title: 'Commitment to Details',
      text: (
        <>
          With our professional book proofreading services, we guarantee a meticulous review and refinement of every detail in your manuscript, ensuring flawless perfection. Our commitment leaves no space for errors or inconsistencies.
        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Credibility',
      text: (
        <>
          Investing in our book proofreading services guarantees enhancing the credibility of your work. Our unwavering dedication to precision ensures that your content is refined, expertly crafted, and deserving of the utmost praise.
        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Reader Satisfaction',
      text: (
        <>
          Immerse and captivate your readers with a flawless reading experience using our expert proofreading services. We guarantee a seamless flow, devoid of distractions and grammatical errors, that will engage your audience fully in the essence of your story.
        </>
      ),
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Polish Your Book',
      text: 'Differentiate your book in the fiercely competitive publishing landscape. With our team of skilled proofreaders, add a polished and professional touch to your manuscript. Rest assured; we will ensure that your book not only adheres to industry standards but also highlights your commitment to excellence.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Save Time',
      text: (
        <>
          Allow us to take care of the time-consuming task of proofreading your book, giving you the freedom to concentrate on your writing, and other critical aspects of publishing. With our efficient services, you can expect prompt results without compromising quality.
        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Publish Your Book with Confidence',
      text: (
        <>
          Eliminate any worries or uncertainties as you approach the publishing process with our exceptional book proofreading services. Our team of experts ensures that your book is meticulously vetted and fully prepared for publication, providing you with the confidence that your work is in capable hands.
        </>
      ),
      col: '6',
      classnum: 'number',
    },


  ]


  const geta = <span> <Link className='color-blue textdocationnone hover fw700' href='/book-proofreading-services'>Professional Proofreading Services</Link> to Turn Your Words into a Masterpiece!</span>





  const fine = [

    {
      img: mission1,
      title: 'Unmatched Expertise',
      text: (
        <>
          We employ a team of highly skilled professional proofreaders who ensure that every manuscript is thoroughly reviewed and corrected before going to print. Their meticulous attention to detail guarantees the delivery of high-quality books to readers.
        </>
      ),
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Prompt Deliveries',
      text: (
        <>
          At Texas Book Publishing, we prioritize prompt content deliveries and exceptional proofreading services. As a renowned publishing company, we are dedicated to ensuring that authors' creative visions are brought to life with utmost precision and delivered to readers with efficiency and care.
        </>
      ),
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'No Compromise on Quality!',
      text: (
        <>
          Our team of professional proofreaders is committed to maintaining the highest standards of quality. We offer valuable recommendations for enhancing the coherence and comprehensibility of your writing, resulting in a more captivating and impactful outcome. Ultimately, our goal is to generate refined and sophisticated content that leaves a remarkable impression on your readership.
        </>
      ),
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Your Search For A <span className='color-blue'>Professional Proofreader</span> Ends Here!</span>

  const addlink = <>
    Delve Into The World of Excellent <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Book Proofreading Services</Link>!
  </>

  const pc = <>

    Refine, Enhance, and Elevate Your Masterpiece with Our Exceptional <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Book Proofreading Services</Link>!

  </>

  const receives = <>
    Refining Your Book To Perfection Through Expert <span className='color-blue'>Book Proofreading</span> Process

  </>

  const qualified = <>

    If you encounter difficulties, trust our team of skilled editors to assist you. Reach out to us for their expertise in reviewing and correcting any errors in your paper. Whether it's a small oversight or a significant grammatical mistake, our team of book proofreaders will guarantee that your work is flawlessly refined before submission.

  </>



  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/proofreading-services/"
  //   },
  //   "headline": "Proofreading Services",
  //   "description": "Offering You The Impeccable Proofreading Services To Help You Earn Your Readers’ Trust!",
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
  //   "url": "https://texasbookpublishing.com/book-proofreading-services/",
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
  //   "url": "https://texasbookpublishing.com/book-proofreading-services/",
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
  //   "url": "https://texasbookpublishing.com/book-proofreading-services/",
  //   "potentialAction": {
  //     "@type": "SearchAction",
  //     "target": "https://texasbookpublishing.com/proofreading-services/search?q={search_term_string}",
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
        <title>Best Book Proofreading Services - Texas Book Publishing</title>
        <meta name="description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <link rel="canonical" href="/book-proofreading-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Book Proofreading Services - Texas Book Publishing" />
        <meta property="og:description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <meta property="og:url" content="/book-proofreading-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:03:57+00:00" />
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


      {/* partners components */}






      {/* Dowecome */}
      <Dowecome
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      <Stopworrying
        title={addlink}
        subtitle={pc}
        btn1='Get a free Proposal'
        btn2='Need To Discuss? Chat With Our Expert!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="colortextgrey font40 fw500 t-center font-f mb-5">Achieve Perfection In Your Work with Our  <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Proofreading Services</Link> </h2>
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
        title={receives}

        heading1='Embarking on the Journey!'
        para1='The proofreading process commences as our skilled team receives your manuscript or book.'
        num1='01'

        heading2={`Unleashing Our Editor's Expertise!`}
        para2='Every identified mistake is meticulously corrected, refining the manuscript with utmost precision.'
        num2='02'

        heading3='Witness Your Book Transformed into Perfection!'
        para3='Through this meticulous process, we deliver a flawlessly written book, free from any errors.'
        num3='03'

        heading4='Adding the Final Flourishes to the Canvas!'
        para4='Our expert proofreaders conduct a comprehensive review, ensuring no mistakes or omissions remain.'
        num4='04'

        heading5='The Ultimate Quest for Consistency!'
        para5='In the final stage, our proofreaders conduct a thorough examination, addressing any last-minute errors or inconsistencies in the text.'
        num5='05'


      />





      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3={<>When it comes to exceptional proofreading services, don’t go with just about anyone. We’re the leading book publishing and proofreading service in Texas for a reason! Let us turn your “I don’t have time” to “Phew, it’s <i>finally</i> done!”</>}
          btn1='Get a free Proposal'
          btn2='Chat With Us To Seek Our Expertise'
        />
      </div>




      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Stillonthefence component */}

      <Container fluid className='still'>


        <Row >
          <h2 className='font40 fw700 text-white t-center font-f px-5 mb-5'>Why Should You Choose Our <span className='color-blue'>Proofreading Services</span>?</h2>
        </Row>

        <Row className='gy-5'>
          {reasons.map((item, i) =>
            <Stillonthefence key={i}
              title={item.title}
              text={item.text}
              col6={item.col}
              classnumber={item.classnum}
            />
          )}

        </Row>
      </Container>





      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title={<>Your One-Stop Shop For Exceptional <span className='color-blue'>Proofreading Services</span></>}
          text={qualified}
          number="+1 (346) 502-3898"
        />

      </div>








    </>
  )
}

export default Bookpublishingservices