import Head from 'next/head'
import Image from 'next/image'
import Nav from '../comps/Nav'
import styles from '../styles/Home.module.css'
import About from './About'
import Hm from './Hm'
import SimpleSlider from './SimpleSlider'
import Sponsors from './Sponsors'



export default function Home() {
  return (
    <div className='flex flex-col'>
       <Hm />
       <About />
       <Sponsors />
      {/* <SimpleSlider /> */}
    </div>
  )
}
