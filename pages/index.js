import Head from 'next/head'
import Nav from '../comps/Nav'

import About from './About'
import Faq from './FAQ'
import Footer from './footer'
import Agenda from './Agenda'
import Hm from './Hm'
import Sponsors from './Sponsors'
import Speakers from '../comps/sections/speakers'



export default function Home() {
  return (
    <>
    <Head><title>Sport League</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>

    </Head>
    <div className='relative'>
      <div className="fixed top-0 z-40"><Nav /></div>
       
       
       <Hm />
       <About />
       <Speakers />
       <Agenda />
       <Sponsors />
       <Faq />
       <Footer />

    </div>
    </>

  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}