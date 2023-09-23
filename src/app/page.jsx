"use client"
import React from 'react'
import CenterDisplay from '@/Components/CenterDisplay/CenterDisplay'
import MainDisplay from '@/Components/MainDisplay/MainDisplay'

const Home = () => {
  return (
    <div className="home">
      <MainDisplay/>
      <CenterDisplay/>
    </div>
  )
}

export default Home