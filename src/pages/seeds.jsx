import React from 'react';
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

import About from '../views/About'
import Layout from '../components/Layout'
import Hero from '../views/Foot'
import Projects from '../views/Projects'
import Slider from '../components/Slider';
import landing from '../images/seeds-landing.png'
import project from '../images/seeds-projects.png'
import weather from '../images/dash-weather.png'
import news from '../images/dash-news.png'
import modal from '../images/seeds-modal.png'

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

const screenShots = [landing,project,weather,news,modal]
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
                    <a href="https://seedsofsuccess.foot-print.net">VIEW LIVE</a>
                    <a href="https://github.com/seeds-of-success-1/seeds-of-success">GITHUB</a>
                </Links>
                <Subtitle>Garden planning application allowing users to design gardens and specify which type of plants they would like to plant while providing gardening related information for each of the provided plant species.</Subtitle>

                </Hero>
                <About offset={1}>
                <Title>Tech</Title>
                <AboutDesc id='about'>
                <ul>
                    <TechItem>
                        Full CRUD application providing gardening Information with visual garden planning
                    </TechItem>
                    <TechItem>
                        RESTful API to allow the client side to interact with the server America to provide recycling solutions to users.
                    </TechItem>

                    <TechItem>
                        Utilized authentication as well as sessions to allow users to register and navigate securely.
                    </TechItem>

                    <TechItem>
                        Used Redux to aid in global state management, and handle asynchronous HTTP requests.
                    </TechItem>

                    <TechItem>
                        Created a virtual garden planner using React and CSS grid.
                    </TechItem>

                    <TechItem>
                        Integrated Google Maps and Google Geocoding API's pared with recycling information to allow users to find recycling locations accepting specified materials near them.
                    </TechItem>

                    <TechItem>
                        Modulized styles by using Styled Components
                    </TechItem>

                    <TechItem>
                        Implemented unit and endpoint testing
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