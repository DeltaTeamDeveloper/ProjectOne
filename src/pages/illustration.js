import Head from 'next/head'
import Link from 'next/link'
// import components
import Banner from '../../components/Banner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Stoppublish from '../../components/Stoppublish'
import Customersatisfaction from '../../components/Customersatisfaction'
import Strugglingtogive from '../../components/Strugglingtogive'
import Illustrativebook from '../../components/Illustrativebook'
import Onestepsolutions from '../../components/Onestepsolutions'
import Script from 'next/script'
import Stunningillustrations from '../../components/Stunningillustrations'
import Serviceproviders from '../../components/Serviceproviders'
import banslider12 from '/public/images/illustrativebook/cartoon.svg'


function Illustrationbook() {



  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'>Illustrations</h1>

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link>Service Providers Handle All Your Publishing Troubles!</span>

  const dataspan = <h1 className='font40 text-black font-f hero-span'>  <Link className='fw700 dblockmobile textdocationnone color-blue hover' href="/illustration"> Texas Book Publishing </Link>  Is  <br className="d-none d-xl-block" /> waiting for you to Ask for a   <br className="d-none d-xl-block" />  <Link className='fw700 dblockmobile textdocationnone color-blue hover' href="/illustration"> Professional Illustrative Book </Link> </h1>;

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: (<>When it comes to book covers, we want you to see the <strong>bigger picture</strong>. See what we did there?</>),
      subtext1: "What makes our book designing and illustration services stand out is that we don’t believe in generic templates. Our team of experts is always ready to go above and beyond for our clients.",
      subtext2: "Our experts will work with text, images, formatting, and colors to create the book cover of your dreams. From customized logos or symbols for each chapter, to captivating graphics for children’s books; we’ve got everything you’re looking for. ",
      subtext3: "Give us a call to get started today!",
      discuss: discuss,
      homebannernum: 'CAll US NOW',
      banners: 'illustrationbook',
    }
  ]


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

  // const schema2 = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "bookwritingexperts",
  //   "alternateName": "Texas Book Publishing",
  //   "url": "https://texasbookpublishing.com/",
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
        <title>Professional Book Writing Services Company</title>
        <meta name="description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
        <link rel="canonical" href="https://texasbookpublishing.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Book Writing Services Company" />
        <meta property="og:description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
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
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />
        <script
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

        {/* banner components */}

        {bannertext.map((item, i) =>
          <Banner key={i}
            title={item.title}
            subtext1={item.subtext1}
            subtext2={item.subtext2}
            subtext3={item.subtext3}
            discuss={item.discuss}
            homebannernum={item.homebannernum}
            bannershome={item.banners}
            processs={item.process}
          />
        )}


        {/* partners components */}
        <Partners />

        <Strugglingtogive
          title=""
          text="You may be a victim of the following nuisances"
          list1="Slow Productivity"
          list2="Lack of Resources"
          list3="Mismanaged Time Schedules"
          list4="Financial Constraints"
          list5="Demotivation"
          list6="Delayed Creativity Process"
          list7="Delayed Writing Process"
          list8="Continuous Revisions"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(346) 502-3898"
        />

        <Illustrativebook
          title={dataspan}
          para='Hit us a message, or give us a call, and make the most of our Professional Illustrative Book'
          cartoonimg={banslider12}
          cartoon='cartoon'
        />

        <Stunningillustrations />



        <Stoppublish
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
          stopworrying='stopworrying'
        />


        {/* Why Choose Texas Book Publishing? */}
        <Whychoosebook
          title={<>Scripting Thoughts into Stories: <span className='color-blue'>Book and eBook Ghostwriters for Hire</span></>}
          text={<>When you sign up with Texas Book Publishing, you’re making an investment in your dreams and goals. Our proficient squad of book and <strong>eBook ghostwriters</strong> will take the lead on your ideas, transforming them into literary treasures. Think of us as the sherpas of book writing! We will be the guiding light you need to polish, publish, and organize your manuscript.</>}
        />

        {/* Customersatisfaction */}
        <Customersatisfaction />




        <div className='datacloud'>
          <Onestepsolutions />
        </div>


        <Serviceproviders />



        {/* Talk To Our Whatourclients! */}
        <Whatourclients />


        {/* Talk To Our Requestafreequote! */}
        <Requestafreequote />

      </main>
    </>
  )
}
export default Illustrationbook