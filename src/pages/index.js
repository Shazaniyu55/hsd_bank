import Hero from "@/components/hero2"
import AcademyCard from "@/components/herocard"
import NavBar from "@/components/navbar"
import React from "react"

export default function Home() {
  return (
    <>

    <NavBar imageSrc="/bank.png" backgroundColor="black"/>
    <Hero/>
    <AcademyCard/>
    
    </>
  )
}
