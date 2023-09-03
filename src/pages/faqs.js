import React from 'react'
import Head from 'next/head'
import Banner from '../../components/Banner'
import Aspiring from '../../components/Aspiring'
import Faqslist from '../../components/Faqslist'

const Faqs = () => {

  const faqsHead = <h1 className='font50 fw700 color-blue'>Create An Impact With Our Non Fiction ghostwriting Services</h1>

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: faqsHead,
      pra: 'At highly affordable pricing, we bring our team of competent non fiction ghostwriters with their promising expertise',
      discuss: discuss,
      homebannernum: 'Call Us Now',
      faqs: 'faqs',
    }
  ]


  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "bookwritingexperts",
  //   "alternateName": "Texas Book Publishing",
  //   "url": "https://texasbookpublishing.com/faq/",
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

  const schema1 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Will the team brief me on every step of the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indeed! Our customer service agents would brief you on every aspect of the project, keeping you in the loop with all the project's inner workings! Our representatives coordinate with the client regularly and make sure that your concerns are addressed and catered to."
      }
    }, {
      "@type": "Question",
      "name": "What is the duration of each project? How soon can we publish and market the book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each project will have its own duration depending upon the length, nature, and labor that the project requires. Delays at our end rarely happen, but delays on your end are entirely in your hand. The more you delay the feedback, the further you stray from publishing and marketing. The ideal way to avoid delays is prompt feedback and crystal clear communication between the team and the client."
      }
    }, {
      "@type": "Question",
      "name": "How convenient is the payment method? Do we have to make the payment in full in advance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, most of our clients make advance payments; most projects have complete packages available at very feasible rates. If you are not able to pay the fee in one payment, our customer care representative can help break it down into more manageable installments. All the payments will be online by charging your card."
      }
    }, {
      "@type": "Question",
      "name": "Will your editors and writers communicate with us directly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If that is what you need, yes. Most of our coordination is done by a customer care executive, and they make sure to deliver all the writing and editing-related queries to the team and the client thoroughly. The team would send you correspondence letters, emails, and queries regularly, and you can send any query that you have back to the team. We are the best destination for book writers for hire , so, rest assured, you are having a competent team on your side."
      }
    }, {
      "@type": "Question",
      "name": "Is your marketing team aware of the current trends? How involved will I be in brainstorming a strategy ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our marketing team is totally aware of the current trends and is equipped with expert skills in marketing. Yes! You will be 100% involved in brainstorming and creating a marketing strategy for your product. Everything will only be taken forward as long as your approval is involved."
      }
    }, {
      "@type": "Question",
      "name": "How to become a successful author in 2023?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To become a successful author in 2023, budding writers must stay on top of trends and gain the necessary skills to survive. You must understand the publishing industry, not only what is popular now but also what is likely to be popular in the future. Also, it's essential to hone your craft by reading widely and studying the works of successful authors. It is also important to be adept with social media, marketing, blogging, and other content creation skills. Lastly, remember to network; building relationships with industry professionals is key to your success."
      }
    }, {
      "@type": "Question",
      "name": "What type of writer gets paid the most?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The type of writer that generally commands the highest salary is one with a specialized skill set and extensive experience. For instance, technical writers who can create manuals, articles for engineering projects, or other technical subjects are highly in demand and often command salaries well above average.Writers who specialize in legal documents or medical research are also highly valued. In sum, what type of writer gets paid the most depends on the individual's skills and years of experience."
      }
    }, {
      "@type": "Question",
      "name": "Which genre of books sell the most in 2023?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While some genres have become less popular due to the rise of new media formats, there are still several exciting and timeless book genres that continue to remain beloved by readers. Here are some of the book genres that continue to be well-loved in 2023: Sci- Fi and Fantasy: These genres continue to soar in popularity, with new and innovative tales that bring readers into brand- new worlds. Literary Fiction: As fiction trends 2023 change and evolve, classic novels remain beloved by the reading public.Readers continue to be drawn in by deep character arcs and skillful writing. Thrillers and Mysteries: The thrill of solving a puzzle and following a story full of twists and turns keeps readers engaged. Non - Fiction: Whether biographies or memoirs, books about real- life events and people continue to captivate audiences."
      }
    }, {
      "@type": "Question",
      "name": "How do I promote my book in 2023?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The following are some of the effective ways to promote your book in 2023: Utilize Social Media: Leverage the power of social media to create an online presence for your book and get it in front of potential readers. Host a Book Launch Event: Invite friends, family, influencers, and the local press to a special event at a local bookstore or library. Utilize Influencers: Reach out to influencers in your genre and give them an advance copy of your book to review or mention on their social media accounts. Create Video Content: Create compelling videos featuring yourself, interviews with other authors, and promotional footage of your book. Nonetheless, one best approach is to partner with book promotion services.These services implement an array of tactics and develop campaigns that help you establish yourself as an author in the industry."
      }
    }, {
      "@type": "Question",
      "name": "When should I start marketing my book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marketing your book should not be an afterthought but part of the writing process. To ensure that your book can reach its full potential with readers, you should start marketing your book even before it is published. By creating a buzz and building anticipation for the launch of your book, you can ensure that people are already excited about reading it once it comes out.It could involve creating a website or blog to share excerpts and updates about the book, engaging with readers on social media platforms, getting reviews from influential sites or individuals, and writing guest posts for other websites. These activities help create anticipation and build a readership for your book before it even launches.."
      }
    }, {
      "@type": "Question",
      "name": "What are publishers looking for in 2023?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As book publishing trends 2023 continue to evolve, publishers will look for stories with a unique spin. They will want authors and creators willing to push the boundaries of traditional book genres and explore more unconventional topics. Publishers will also look for more diverse writers who can provide fresh perspectives through their writing and content that appeals to a broader audience. Besides, book publishers in 2023 will search for stories with strong plots or characters and innovative approaches such as interactive books. Over and above, book publishing houses will be looking for stories that have the potential to make an impact on readers and incite meaningful conversations."
      }
    }, {
      "@type": "Question",
      "name": "When should I start editing my book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When editing your book, it’s better to start earlier. Starting the editing process early will help to smooth out any inconsistencies in your writing style and ensure that all parts of your book are consistent before you complete it. You can begin editing as soon as you have a good book draft; ideally, it should be done in stages. It will help to ensure that each book section is fully edited and that no errors are missed. This way, you can also focus on one section at a time rather than attempting to edit the entire book at once."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to edit a book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Editing a book is a significant undertaking that requires time and dedication. Various factors influence the amount of time it takes to edit a book. Some of them include length, complexity, genre, and author experience. Nonetheless, it can take days to months to complete the editing process — depending on the size of the manuscript and how extensive the editing work needs to be. An experienced editor might require more time than a novice one. Besides, the editor will have to take into account any other factors that might come up during the editing process. All in all, it's safe to state that the time needed to edit a book varies case by case."
      }
    }]
  }

  return (
    <>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>Frequently Asked Questions - Get Answers of Your Queries</title>
        <meta name="description"
          content="Discover our frequently asked questions (FAQs) for quick answers to common queries related to the services. Find solutions and insights of your queries here." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Frequently Asked Questions - Get Answers of Your Queries" />
        <meta property="og:description"
          content="Discover our frequently asked questions (FAQs) for quick answers to common queries related to the services. Find solutions and insights of your queries here." />
        <meta property="og:url" content="/faqs" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2022-08-31T23:04:08+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
        <link rel="icon" href="/favicon.png" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />*/}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />

      </Head>


      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.faqs}
        />
      )}


      {/* Faqslist */}
      <Faqslist />



      {/* Aspiring */}
      <div className='datacloudco'>
        <Aspiring
          title='Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
          text="Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable book writers for hire today!"
          number="Call Us Now"
          discuss="LET'S DISCUSS"
        />


      </div>


    </>
  )
}

export default Faqs