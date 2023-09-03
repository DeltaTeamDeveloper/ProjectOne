import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
// import components
import Homebanner from '../../components/Homebanner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Stopworrying from '../../components/Stopworrying'
import Customersatisfaction from '../../components/Customersatisfaction'
import Comprehensive from '../../components/Comprehensive'
import Strugglingtogive from '../../components/Strugglingtogive'
import Strugglingwriters from '../../components/Strugglingwriters'
import Onestepsolutions from '../../components/Onestepsolutions'
//

export default function Home() {

  const newSpan = <>
    <h1 className='font50 fw500 text-blacks font-f hero-span'>
      <span className='fw700 color-blue'>Professional Book Writers</span>: Where Your Voice Finds Page</h1>
    <h5 className='font16 fw600 text-blacks font-f hero-span mt-3'>Your story = our expertise – we put the pages together.</h5>
  </>;

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>

  const discuss = <span>LET'S DISCUSS</span>


  // const schema1 = {
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

  const schema2 = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Texas Book Publishing",
    "alternateName": "Texas Book Publishing Hub",
    "url": "https://www.texasbookpublishing.com/",
    "logo": "https://www.texasbookpublishing.com/_next/image?ur…t%2Fstatic%2Fmedia%2Flogo.1b68673b.png&w=640&q=75",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": ""
    },
    "sameAs": [
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/i/flow/login?redirect_after_login=%2Fbookwritingexp",
      "https://www.linkedin.com/company/bookwritingexp/",
      "https://www.youtube.com/channel/UCMwHkNiJzrMd6MlPOBFMmLA",
      "https://www.instagram.com/bookwritingexp/"
    ]
  }

  // const schema3 = {
  //   "@context": "https://schema.org", "@type": "Service", "name": "book writing services book writing company book writers affordable book writing services", "description": "book writing services book writing company book writers affordable book writing services book writing services book writing company book writers affordable book writing services", "provider": { "@type": "Organization", "name": "book writing services book writing company book writers affordable book writing services", "url": "https://texasbookpublishing.com/" },
  //   "serviceType": ["book writing services book writing company book writers affordable book writing services"], "areaServed": { "@type": "country", "name": "us" }
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
        <meta name="ahrefs-site-verification" content="477dd6bba6df5cbe29b3e72784e78d88841329f22877beb016f1dde2e4967124"></meta>
        <title>Texasbookpublishing - Top Professional Book Writers Hub in USA</title>
        <meta name="description" content="Texas Book Publishing is a professional book writers hub with an expert team. They are passionate about bringing stories to life from fiction to non-fiction, and much more." />
        <link rel="canonical" href="https://texasbookpublishing.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Texasbookpublishing - Top Professional Book Writers Hub in USA" />
        <meta property="og:description" content="Texas Book Publishing is a professional book writers hub with an expert team. They are passionate about bringing stories to life from fiction to non-fiction, and much more." />
        <meta property="og:url" content="https://texasbookpublishing.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.png" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />*/}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
        /> */}

        {/* <Schema /> */}

      </Head>


      {/* googletagmanager */}

      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-210274244-13"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-210274244-13');
        `}
      </Script> */}

      <main>
        {/* banner components */}

        <Homebanner
          title={newSpan}
          text='Dreaming of becoming an author but don’t know where to start? You’ve come to the right place!'
          text2='Welcome to Texas Book Publishing: where professional book writers build your dreams, self-publishing on Amazon becomes a breeze, and the best in the USA await your story’s arrival.'
          discuss={discuss}
          homebannernum='Call Us Now'
          bannershome='banner'
        />


        {/* partners components */}
        <Partners />

        <Strugglingtogive
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(346) 502-3898"
        />

        {/* Talk To Our Experts! */}
        <Experts
          title="From Imagination to Reality: Let’s Begin Your Journey"
          text="Think ebooks; think Texas Book Publishing’s professional book writers."
          text2="Whether you’re considering stepping into the portal world of fiction or non-fiction, children’s tales, comic books, or even captivating autobiographies, Texas Book Publishing’s book consultants are the librarians experts you need to guide you."
          text3="Our commitment to quality, creativity, and vision sets us apart as the best book publishing company in the USA."
          number="(346) 502-3898"
          discuss="LET'S DISCUSS"
        />

        <div className='sliderImg'>
          <Strugglingwriters />
        </div>

        <Stopworrying
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />


        {/*  Comprehensive */}
        <div className='datacloudco'>
          <Comprehensive />
        </div>

        {/* Customersatisfaction */}
        <Customersatisfaction />

        {/* Why Choose Texas Book Publishing? */}
        <Whychoosebook
          title={<>Scripting Thoughts into Stories: <span className='color-blue'>Book and eBook Ghostwriters for Hire</span></>}
          text={<>When you sign up with Texas Book Publishing, you’re making an investment in your dreams and goals. Our proficient squad of book and <strong>eBook ghostwriters</strong> will take the lead on your ideas, transforming them into literary treasures. Think of us as the sherpas of book writing! We will be the guiding light you need to polish, publish, and organize your manuscript.</>}
        />

        {/* Talk To Our Experts! */}
        {/* <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="(346) 502-3898"
          discuss="LET'S DISCUSS"
        /> */}


        <div className='sliderImg2'>
          <Onestepsolutions />
        </div>


        {/* Stopworrying */}
        <div className='dataSetCo'>
          <Stopworrying
            title='Stop worrying about publishing books!'
            subtitle={posdata}
            btn1='Get a free Proposal'
            btn2='Talk to an expert'
          />
        </div>

        {/* Talk To Our Whatourclients! */}
        <Whatourclients />

        {/* Talk To Our Requestafreequote! */}
        <Requestafreequote />

      </main>
    </>
  )
}
