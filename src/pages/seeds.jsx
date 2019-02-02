import React from 'react';
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

import Layout from '../components/Layout'
import Hero from '../views/Foot'
import ProjectCard from '../components/ProjectCard'
import Projects from '../views/Projects'
import landing from '../images/landing.png'
import how from '../images/how.png'
import prices from '../images/prices.png'
import where from '../images/where.png'

import { Title, Subtitle } from '../elements/Titles'



const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
 const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-orange mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);`

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(1, 65vw);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 90vw;
    grid-gap: 2rem;
  }
`
const ScreenShot = styled.img`
  ${tw` w-99 xl:w-99 shadow-lg h-100%`};
  border-radius:5px;
`
const ScreenShotWrap = styled.div`
border:40px solid inherit;
`
const footprint = () =>{
    return(
        <>
        <Layout/>
            <Parallax  pages={4}>
                <Hero offset={0}>
                <BigTitle>
                    <a href="https://foot-print.net/">
                    Footprint
                    </a>
                </BigTitle>
                <Subtitle>For this project I wanted to contribute to someting that was meaningfull to me. Having worked in the recycling industry, I realized that proper recyling information is not very abundant. So I decidecd to make a web application that would provide the proper information to users.</Subtitle>

                </Hero>
            <Projects offset={1}>
                <Title>Screen Shots</Title>
                <ProjectsWrapper>
                <ScreenShotWrap>
                    <ScreenShot src={landing} alt="screen shot"></ScreenShot>
                </ScreenShotWrap>


                <ScreenShot src={how} alt="screen shot"></ScreenShot>

                <ScreenShot src={where} alt="screen shot"></ScreenShot>

                <ScreenShot src={prices} alt="screen shot"></ScreenShot>

                </ProjectsWrapper>

            </Projects>
            <Projects offset={3}>
                <h1>bottom</h1>
            </Projects>
            </Parallax>
        </>

    )
}
export default footprint