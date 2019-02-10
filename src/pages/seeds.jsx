import React from 'react';
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

import About from '../views/About'
import Layout from '../components/Layout'
import Hero from '../views/Foot'
import Projects from '../views/Projects'
import Slider from '../components/Slider';

import {Links,AboutDesc,TechItem} from './footprint'
import { Title, Subtitle } from '../elements/Titles'




 const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-green-dark mb-6 tracking-wide`};
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

const screenShots = [1,2,3,4]
const footprint = () =>{
    return(
        <>
        <Layout/>
            <Parallax  pages={4}>
                <Hero offset={0}>
                <BigTitle>
                    Seeds Of Success
                </BigTitle>
                    <Links>
                    <a href="https://foot-print.net">VIEW LIVE</a>
                    <a href="https://github.com/seeds-of-success-1/seeds-of-success">GITHUB</a>
                </Links>
                <Subtitle>For this project I wanted to contribute to someting that was meaningfull to me. Having worked in the recycling industry, I realized that proper recyling information is not very abundant. So I decidecd to make a web application that would provide the proper information to users.</Subtitle>

                </Hero>
                <About offset={1}>
                <Title>Tech</Title>
                <AboutDesc id='about'>
                <ul>
                    <TechItem>
                        Full CRUD application, using an Express server along with Massive to query an SQL database.
                    </TechItem>
                    <TechItem>
                        Utilized authentication as well as sessions to allow users and companies to register and navigate securely.
                    </TechItem>

                    <TechItem>
                        Took advantage of React's library to create a dynamic, high performing user interface.
                    </TechItem>

                    <TechItem>
                        Used Redux to aid in global state management, and handle asynchronous HTTP requests.
                    </TechItem>

                    <TechItem>
                        Used Earth911's API to connect with thier database, Containing to most recyling related data in the USA.
                    </TechItem>

                    <TechItem>
                        Integrated Google Maps and Google Geocoding API's pared with recycling information to allow users to find recycling locations accepting specified materials near them.
                    </TechItem>

                    <TechItem>
                        Implemented an Admin route along with NodeMailer to allow privileged users to send email to  registered users and update market prices for lucrative recyclables.
                    </TechItem>

                    <TechItem>
                        Parsed RSS feeds for recyling related news articles.
                    </TechItem>
                </ul>
                 </AboutDesc>
                </About>
            <Projects offset={2}>
                <Title>Screen Shots</Title>
                <ProjectsWrapper>
                <Slider images={screenShots}/>

                </ProjectsWrapper>

            </Projects>
            </Parallax>
        </>

    )
}
export default footprint