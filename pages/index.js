import Head from 'next/head'
import Image from 'next/image'
import Nav from '../comps/Nav'
import styles from '../styles/Home.module.css'
import About from './About'
import Hm from './Hm'

export default function Home() {
  return (
    <div className='scroll'>
       <Hm />
       <About />

    </div>
  )
}
