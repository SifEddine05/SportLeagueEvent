import Head from 'next/head'
import Image from 'next/image'
import AgEv from '../comps/AgEv'
import Nav from '../comps/Nav'
import styles from '../styles/Home.module.css'
import About from './About'
import Faq from './FAQ'
import Footer from './footer'
import Agenda from './Agenda'
import Hm from './Hm'
import Sponsors from './Sponsors'
import Speakers from '../comps/sections/speakers'
import Layout from '../comps/layout'



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
       <Faq />
       <Agenda />
       <Sponsors />
       <Footer />
    </div>
    </>

  )
}
