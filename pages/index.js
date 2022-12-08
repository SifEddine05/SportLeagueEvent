import Head from 'next/head'
import Image from 'next/image'
import Nav from '../comps/Nav'
import styles from '../styles/Home.module.css'
import About from './About'
import Faq from './FAQ'
import Footer from './footer'
import Hm from './Hm'
import SimpleSlider from './SimpleSlider'
import Speakers from './Speakers'
import Sponsors from './Sponsors'



export default function Home() {
  return (
    
    <div className=''>
       <Hm />
       <About />
       <Sponsors />
       <Speakers />
       <Faq />
       <Footer />

      {/* <SimpleSlider /> */}
    </div>
  )
}
