'use client'
import React from 'react'
import { motion } from 'motion/react'

const page = () => {
  return (
    <div >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      className='w-screen max-h-screen bg-cotton flex flex-row flex-wrap items-center justify-center overflow-hidden'>
        <img src="/gifs/backmassage.gif" alt="mochimochigif" />
        <img src="/gifs/bump.gif" alt="mochimochigif" />
        <img src="/gifs/care.gif" alt="mochimochigif" />
        <img src="/gifs/cuddle.gif" alt="mochimochigif" />
        <img src="/gifs/kiss.gif" alt="mochimochigif" />
        <img src="/gifs/kisss.gif" alt="mochimochigif" />
        <img src="/gifs/save.gif" alt="mochimochigif" />
        <img src="/gifs/setup.gif" alt="mochimochigif" />
        <p className='absolute text-7xl font-bold text-candy text-center max-lg:text-5xl p-5 top-50 '>THIS COULD BE US
        </p>
        <span className='absolute text-center text-xl text-candy/50 top-96'>But you said NO</span>
      </motion.div>
    </div>
  )
}

export default page