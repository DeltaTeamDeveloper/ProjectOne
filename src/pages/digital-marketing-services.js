import React from 'react'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Link from 'next/link'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Aspiring from '../../components/Aspiring'
import Dowecome from '../../components/Dowecome'
import youareonestepcloserto from '/public/images/youareonestepcloserto/down2.jpg'
import Whatourclients from '../../components/Whatourclients'
import Buildyourownidentity from '../../components/Buildyourownidentity'
import Companypull from '../../components/Companypull'
import Buildingyour from '../../components/Buildingyour'
import Bestinclass from '../../components/Bestinclass'
import Stopworrying from '../../components/Stopworrying'
import Major from '../../components/Major'
import Cta from '../../components/Cta'


const Digitalmarketingservices = () => {

  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw700 text-black font-f hero-span'>Transform Your Business with Cutting-Edge <span className='color-blue'>Digital Marketing Services</span></h1>
        </>
      ),
      pra: (
        <> Looking to take your business to new heights in the Lone Star State? Look no further than our top-notch digital marketing services in Texas. From expertly crafted social media campaigns to cutting-edge SEO strategies, we'll help you reach your target audience, boost your online presence, and achieve unparalleled success in the competitive world of digital marketing. Get ready to transform your business and watch it thrive like never before. </>
      ),
      discuss: "LET'S DISCUSS",
      homebannernum: 'CAll US NOW',
      banners: 'digitalmarketingservices',
    }
  ]


  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/"
  //   },
  //   "headline": "Book Writing Company",
  //   "description": "Book Writing Company",
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
  //   "url": "https://texasbookpublishing.com/digital-marketing-services/",
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
  //   "url": "https://texasbookpublishing.com/digital-marketing-services/",
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
  //   "@type": "Article",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": "https://texasbookpublishing.com/digital...-services/"
  //   },
  //   "headline": "Digital Marketing Services",
  //   "description": "Digital Marketing Services",
  //   "image": "",
  //   "author": {
  //     "@type": "Organization",
  //     "name": "Mini Investments LLC"
  //   },
  //   "publisher": {
  //     "@type": "Organization",
  //     "name": "",
  //     "logo": {
  //       "@type": "ImageObject",
  //       "url": ""
  //     }
  //   },
  //   "datePublished": "2022-04-19"

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
        <title>Top Tier Digital Marketing Services - Texas Book Publishing</title>
        <meta name="description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <link rel="canonical" href="/digital-marketing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Tier Digital Marketing Services - Texas Book Publishing" />
        <meta property="og:description" content="Digital Marketing Services that will help your business grow. We offer various services to help you achieve ultimate success. Call us to get them." />
        <meta property="og:url" content="/digital-marketing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:58:56+00:00" />
        <meta property="og:image" content="/complogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="45 minutes" />
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
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannershome={item.banners}
        />
      )}


      {/* partners components */}


      {/* Dowecome */}
      <Dowecome
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />



      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Digital Marketing Projects'
          para='Let Our Digital Marketing Team Help You'
        />
      </div>

      {/* Lululogos components */}

      <Lululogos />



      <Buildyourownidentity />



      {/* Aspiring */}
      <Aspiring
        title='Captivating Book Cover Designs At Your Disposal'
        text={<> Our top-notch digital book marketing services offer customized cover designs, page layouts, and book designs tailored perfectly for your business. Our team of highly skilled graphic designers has created countless compelling book covers and page layouts. By employing our talented designers, we guarantee that your book and cover will be specifically customized to suit your unique business needs and requirements. </>}
        number="CAll US NOW"
        discuss="Chat With Us Today!"
      />


      {/* Cta */}
      <Cta />



      <div className='dataset'>
        <Buildingyour />
      </div>



      <Lululogos />

      {/* Aspiring */}
      <div className='newdatecloud'>
        <Aspiring
          title={<> Let Us Take Care of Your <Link className='textdocationnone color-blue hover' href="/digital-marketing-services/">Book Marketing</Link> Needs! </>}
          text={<> Book marketing can be difficult for many people, but not for Texas Book Publishing. We are experts in advertising, from creating persuasive pitches to developing successful social media campaigns and more. While these tasks may seem overwhelming to you, we have the knowledge and experience to handle them effortlessly. Let us take on the marketing workload and set the stage for your success! </>}
          number="CAll US NOW"
          img={youareonestepcloserto}

        />
      </div>


      <Companypull
        title={<> Expanding Your Story's Global Presence through Comprehensive <Link className='textdocationnone text-white hover' href="/digital-marketing-services/">Digital Marketing Services</Link>! </>}
        text={<> Contact Us Today to Illuminate Your Book's Path to Success. </>}
        number="CAll US NOW"
      />


      <Bestinclass />


      <Stopworrying
        title='Conquer the Challenges of Book Selling!'
        subtitle='One-Stop Solution For Ghostwriting, Promoting, And Branding Your Digital Riches.'
        subtitle2='Trust your books to be crafted by our team of professional writers.'
        btn1='Get a free Proposal'
        btn2='Hire Our Digital Book Marketing Services Now! '
      />



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

    </>
  )
}

export default Digitalmarketingservices