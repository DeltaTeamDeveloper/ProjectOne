import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'


// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Major from '../../components/Major'

// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>Book Marketing Services</h1>

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: (<>We understand that as a new author, you might have limited resources for <strong>book marketing</strong> your book. Don’t worry; that’s where we come in!</>),
      subtext1: (<>We make sure you get a bang for your buck by making every dollar count. Our exclusive <strong>book marketing services</strong> will not only help you reach your target audience; we will make sure your book is number one and on the top shelves!</>),
      subtext2: "That’s because we firmly believe your book deserves to be a bestseller. Whether you’re looking for full-scale marketing services, or a small campaign, you can count on our experts.",
      subtext3: (<>Get in touch with us today to get started on your <strong>book marketing</strong> campaign!</>),
      discuss: discuss,
      homebannernum: 'CAll US NOW',
      banners: 'bookmarketingservices',
    }
  ]

  const geta = <span>Book Promotion Has Just Become Easier With The Global <Link className='color-blue textdocationnone hover fw700' href='/book-marketing-services'>Book Marketing Services.</Link></span>


  const posdata = <span>Let Us Put Your Book On The Fast Track To Success With the Dynamic And Innovative  <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Book Marketing</Link> Take Charge Of Your  <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Strategies Of Our Team!</Link> </span>


  const missiontext = <span>With our comprehensive <Link className='textdocationnone color-black hover1' href='/book-marketing-services'>book marketing services</Link>, we'll position you as the go-to expert in your field. Through targeted outreach, thought leadership initiatives, and strategic branding, we'll amplify your visibility and establish your authority. Prepare to be recognized as the author readers trust and industry professionals seek out. Partner with us, and let us unlock your full marketing potential.</span>

  const experienced = <span>Our experienced and award-winning team of <Link className='textdocationnone color-black hover1' href='/book-marketing-services'>book marketing</Link> experts goes the extra mile to deliver tailored services designed specifically for you. With our bespoke and personalized approach, we not only help you secure valuable reviews but also market your book effectively. No matter the size or genre of your campaign, we enhance its potential to ensure maximum success. Rest assured, every client holds significance to us, and we are committed to their individual journey.</span>

  const fine = [

    {
      img: mission1,
      title: 'Exceptional Creative Marketing Strategies',
      text: 'At Texas Book Publishing, our exceptional marketing experts possess an unrivaled ability to create captivating promotions that leave a lasting impression. With our strategic and imaginative campaigns, we skillfully entice your target audience, compelling them to eagerly explore the captivating pages of your book. It’s that effortless!',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Carve Your Legacy',
      text: 'Supercharge your book’s success with our all-inclusive book marketing services. Become the trusted voice in your industry as we boost your visibility through targeted outreach, thought leadership campaigns, and expert branding. Prepare to be the go-to author readers trust and industry giants look up to. Unleash your marketing potential; partner with us today!',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Tailored Services for All Your Needs',
      text: 'Experience the expertise of our renowned team of book marketing experts who go above and beyond to provide personalized services exclusively for you. Our bespoke approach ensures valuable reviews and effective book marketing, regardless of your campaign’s size or genre. Trust us to prioritize your journey and deliver maximum success.',
      class: 'fintop',


    },


  ]


  const potential = <span>Uncover Book Marketing Success with Our Potential-Packed <Link className='textdocationnone color-blue hover' href='/book-marketing-services'>Book Marketing Agency</Link>! </span>


  const dateset = <span className='fw500'>Looking for a  <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'> Book Marketing Expert</Link>? </span>




  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/book-marketing-services/"
  //   },
  //   "headline": "Connect To The Best Book Marketing Service Providers In Town!",
  //   "description": "Book Marketing Services",
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
  //   "datePublished": "2022-03-18"
  // }
  // const schema1 = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "bookwritingexperts",
  //   "alternateName": "Texas Book Publishing",
  //   "url": "https://texasbookpublishing.com/book-marketing-services/",
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
  //   "url": "https://texasbookpublishing.com/book-marketing-services/",
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
  //   "name": "book marketing services book marketing company book marketing agency best book marketing services book advertising services",
  //   "description": "book marketing services book marketing company book marketing agency best book marketing services book advertising services book marketing services book marketing company book marketing agency best book marketing services book advertising services",
  //   "provider": {
  //     "@type": "Organization",
  //     "name": "book marketing services book marketing company book marketing agency best book marketing services book advertising services",
  //     "url": "https://texasbookpublishing.com/book-marketing-services/"
  //   },
  //   "serviceType": ["book marketing services book marketing company book marketing agency best book marketing services book advertising services"],
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
        <title>Professional Book marketing services for self-published Authors</title>
        <meta name="description" content="Market and promote your book today with our book marketing service in US. Being the top book marketing agency, texas book publishing always ready to fulfill your need." />
        <link rel="canonical" href="/book-marketing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book marketing services for self-published Authors" />
        <meta property="og:description" content="Market and promote your book today with our book marketing service in US. Being the top book marketing agency, texas book publishing always ready to fulfill your need." />
        <meta property="og:url" content="/book-marketing-services" />
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
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      <Stopworrying
        title='Accelerate Your Book’s Success With Our Innovative Marketing Strategies!'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Chat With Our Book Marketing Experts Now!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-blue font25 fw600 t-center font-f mb-2">Our Approach</h2>

            <p className='font40 font-f fw500 colortextgrey t-center mb-5'>Ignite Literary Triumphs with Our Irresistible <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Book Marketing</Link> Solutions!</p>

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
        title={potential}
        text='Brace yourself for the ultimate clarity and peace of mind as we deliver regular updates, providing a transparent window into our perspective. Join us on this thrilling path where transparency is guaranteed every step of the way, and prepare to witness your book soar to unimaginable heights. Your captivating journey starts now at Texas Book Publishing.'

        heading1='Social Media and Additional Media Channels:'
        para1='We’ll conduct a thorough analysis of your target audience and develop highly impactful content to effectively engage them. From selecting the perfect platform to crafting engaging book trailers and effective Facebook ads, our transparent process ensures you’re kept well-informed every step of the way.'
        num1='01'

        heading2='The Comprehensive Marketing Plan:'
        para2='With impeccable expertise in book marketing, we recognize the vital importance of a meticulous promotion blueprint. Our all-encompassing marketing strategy impeccably targets your ideal readers, precisely when and where they’re most receptive, while seamlessly aligning with your budget. Together, we’ll engineer a compelling marketing campaign to escalate your book sales sky-high.'
        num2='02'

        heading3='Marketing Plan Implementation:'
        para3='Maximize your book’s potential with a tailored marketing plan that refines your message. Trust our expert book marketers to connect with eager readers actively seeking your unique offering. Boost your book’s presence and entice new audiences to embark on an exciting literary journey.'
        num3='03'

        heading4='Target Audience:'
        para4='Our team comprehends the unique appeal of your book that speaks to a select group of passionate readers. With this in mind, we have meticulously developed a precisely tailored approach to captivate the attention of individuals who are highly inclined towards your book’s genre. By concentrating our efforts on this specific audience, we guarantee an exceptional surge in the number of potential readers, ultimately paving the way for the resounding success of your literary masterpiece.'
        num4='04'

        heading5='Effective Marketing Strategy is What is Needed:'
        para5="Discover the game-changing power of our comprehensive book marketing strategies, crafted to make your book an unparalleled success. Our accomplished team of experts in the realm of book marketing tirelessly immerse themselves in the ever-evolving marketing landscape, developing a personalized approach that perfectly aligns with your unique vision and aspirations."
        num5='05'
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text='Discover the ultimate secret to skyrocketing your book’s success with the unrivaled guidance of our esteemed team of book marketing experts. Let our unmatched expertise pave the way for your captivating story to reach an expansive audience, propelling it to the forefront of literary greatness.'
          btn1='Get a free Proposal'
          btn2='Chat With our Experts!'
        />
      </div>





      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col> 
              <h2 className='text-black fw700 font40 font-f t-center'>Why Settle for Ordinary When You Can Have Extraordinary? Discover Our <Link href='/book-editing-services' className='textdocationnone color-blue hover'>Book Marketing Services</Link> Today!</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Selfpublishing */}
      <Selfpublishing
        title='Our Personalized Approach to Strategic Planning:'
        text='At our cutting-edge book marketing agency, we go beyond the norm to craft a strategic marketing plan exclusively designed for your book. Our dedicated team of experts dissects your content, identifies your niche audience, and studies market dynamics to pave the path for your success.'
        number="(346) 502-3898"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Our Unique Approach to Boosting Visibility:'
        text="Our comprehensive book marketing services guarantee heightened exposure on social media, email campaigns, and influential review sites. Stand out in the bustling literary world and capture readers' attention. Take your book to new heights with our unbeatable strategies."
        number="(346) 502-3898"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title='Your Book is in Good Hands: Our Team of Experienced Book Marketing Professionals:'
        text='Experience the power of our team of book marketing professionals and creative masters who possess an unmatched understanding of the book industry. With their expertise in crafting captivating email campaigns and designing mesmerizing book covers, we guarantee your success.'
        number="(346) 502-3898"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Turn Your Dream into Reality: Result-Driven Book Marketing Services'
        text='Boost your book’s success with our top-performing book marketing services. We prioritize your goals while tracking our progress towards incredible outcomes. Amplify sales, elevate your author platform, and create a buzz for your latest release, guided by our unparalleled tools and expertise.'
        number="(346) 502-3898"
        discuss="Let’s Discuss Your Project"
        image={bookmarketingservices4}
        whychooseclass="marketyourbook"
      />

      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text='Discover the ultimate secret to skyrocketing your book’s success with the unrivaled guidance of our esteemed team of book marketing experts. Let our unmatched expertise pave the way for your captivating story to reach an expansive audience, propelling it to the forefront of literary greatness.'
          btn1='Get a free Proposal'
          btn2='Chat With our Experts!'
        />
      </div>


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}
      <Lululogos />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Turn the Tables with Unique Book Marketing Services'
          text='Elevate your book from ordinary to extraordinary! Partner with us to craft an unbeatable book marketing plan that will make waves amidst tough competition. Embrace your literary success and let’s ignite conversations that will put your story in the spotlight it deserves.'
          number="Call Our Team - (346) 502-3898"
        />

      </div>























    </>
  )
}

export default Bookpublishingservices