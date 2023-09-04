import React from 'react'
import Banner from '../../components/Banner'
import Link from 'next/link'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Head from 'next/head'
import Makestories from '../../components/Makestories'
import Lululogos from '../../components/Lululogos'
import howdoimg from '/public/images/howdowecomeintobeing/howdowecomeintobeing.png'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import whychoosebookritingcube from '/public/images/whychoosebookritingcube/whychoosebookritingcube.png'
import Dowecome from '../../components/Dowecome'
import Aspiring from '../../components/Aspiring'
import Stopworrying from '../../components/Stopworrying'

const About = () => {


  const newSpan = <>
    <h1 className='font50 fw700 text-blacks font-f hero-span'>We are devoted to bringing your story across the globe because it matters!</h1>
  </>


  const bannertext = [
    {
      title: newSpan,
      pra: 'At Texas Book Publishing, every voice is heard, every story is celebrated, and every idea is encouraged.',
      pra2: 'We`ve put together a team of savvy book writing consultants and the best book publishers who love making your dreams come true, no matter the genre.',
      discuss: 'LET S DISCUSS',
      homebannernum: '+1 (346) 502-3898',
      aboutbanners: 'aboutbanner',
    }
  ]


  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link> Service Providers Handle All Your Publishing Troubles!</span>

  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>


      {/* banner components */}
      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext={item.pra2}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.aboutbanners}
        />
      )}


      {/* Dowecome */}
      <Dowecome
        title='How Do We Come Into Being?'
        text="It calls for storytime! At first, it was just an idea to escape the daily 9 to 5 frustration and explore the storyteller hiding within. So after attempting multiple book writing projects, it convinced me of my storytelling destiny. Relaxing and solving the rubic’s cube, I came up with the name and booked the domain. It was my eureka moment!"
        subtext="So it is our story of inspiration and courage to do what we want. If you are inspired to write and put the courage to pen down a story, we are pretty sure you want it to be a bestseller? Why not let us be your guide in the journey from a writer to a bestseller?"
        number="+1 (346) 502-3898"
        discuss="LET'S DISCUSS"
        image={howdoimg}
        Dowecome="Dowecome"
      />



      {/* Makestories */}
      <Makestories
        title='We make stories… happen!'
        para='Let us help you tell it.'
      />



      {/* Lululogos components */}
      <Lululogos />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Why Choose Texas Book Publishing?'
        text="Started as a small online organization, expanded the team from a few to a handful of people, and set the office. We put our skills, experience, and everything we knew of book writing, editing, publishing, and marketing to acquire a significant clientele. Soon, we got partnerships with publications houses, reputable editors, and experienced marketers—it was my dream come true!"
        number="+1 (346) 502-3898"
        discuss="LET'S DISCUSS"
        image={whychoosebookritingcube}
        whychooseclass="whychoosebookwritingcube"

      />

      {/* Talk To Our Experts! */}
      <Experts
        title="Talk To Our Experts!"
        text="Call and get a free consultation, sample, & a price quote."
        number="+1 (346) 502-3898"
        discuss="LET'S DISCUSS"
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

      {/* Aspiring */}
      <Aspiring
        title='Over to you, all the courageous aspiring authors!'
        //  title= 'Over to you, all the courageous aspiring authors!' {...greeting}
        text="“A book is all about the verbal artificiality of reality and how well you convey your idea through this—and this is what we aim to bring out. We respect the efforts of every client, as we know what it takes to write a book. That’s why we try not to disrupt the original idea but make it sound convincing.” – A message from teams of The Bookwriting Cube."
        number="+1 (346) 502-3898"
        discuss="LET'S DISCUSS"
      />

    </>
  )
}

export default About