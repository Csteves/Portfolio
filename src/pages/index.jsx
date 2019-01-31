import React, {Component} from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'


// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import BackEndCard from '../components/BackEndCard'


// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Skills from '../views/skills'
import FrontEndCard from '../components/FrontEndCard'
import avatar from '../images/avatar.jpg'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const SkillsHero = styled.div`
  ${tw`flex lg:flex-row justify-between items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const MenuButton = styled.button`
    border: none;
    background-color: pink;
    ${tw` text-lg color-white w-64 rounded`}
`

class Index extends Component {



  render(){

    return(
      <>
      <Layout/>
      <Parallax  ref={ref => (this.parallax = ref)} pages={6}>
        <Hero id="hero" offset={0}>
        <button onClick={() => this.parallax.scrollTo(1)} >click</button>

          <BigTitle>
            Hello, <br /> I'm Craig Stevens.
          </BigTitle>


          <Subtitle>Full stack web developer.</Subtitle>
        </Hero>

        <About offset={1}>
        <button onClick={() => this.parallax.scrollTo(2)} >click</button>
          <Title>About</Title>

          <AboutHero>
            <Avatar src={avatar} alt="Craig Stevens" />
            <AboutSub>
            Professional with a coding habit.
            </AboutSub>
          </AboutHero>
          <AboutDesc id='about'>
          Out of curiosity I started learning about coding, I began with Harvard X's  CS50 Introduction To Computer Science course. Upon completion I was fully enveloped by software, which led me to quit my job of 13 years. Up to that point I was learning as much as possible in my free time and soon realized that I wanted to do this for a living. In order for that to become reality I knew it would take a full-time commitment. Thus, I decided to apply at DevMountain, an immersive web development bootcamp. As a result, the rest is history.
          </AboutDesc>
        </About>



        <Projects   offset={2}>
        <button onClick={() => this.parallax.scrollTo(0)} >click</button>

          <Title >Projects</Title>


          <ProjectsWrapper>

            <ProjectCard
              title="Footprint"
              link="/footprint"
              bg="linear-gradient(to right, #52c234 0%, #061700 100%)"
              >
                Footprint, a recyling information based web application.
            </ProjectCard>

          </ProjectsWrapper>
        </Projects>




        <Skills offset={4}>

          <Title>Skills</Title>
          <SkillsHero>
        <button onClick={() => this.parallax.scrollTo(5)} >click</button>
            <FrontEndCard
            title='Front-end Development'
            bg="linear-gradient(to right, #232526 0%, #414345 100%)"
            >
            I take pride in writing organized and succinct code when building front-end applications and websites. I specialize in React with Redux. I also program in vanilla JavaScript, HTML5, and CSS3.
            </FrontEndCard>
            <BackEndCard
            title='Back-end Development'
            bg="linear-gradient(to right, #8e9eab 0%, #eef2f3 100%)"
            >
           I use Nodejs enviroments. Commonly using Express, PostgresSQL, Massive, Bcrypt, RESTful APIs, and more. I also incorporate unit & endpoint testing along with version control.  My tools of choice are Git, Jest, and Postman.
            </BackEndCard>

          </SkillsHero>

        </Skills>

        <Contact offset={5}>
          <Inner>
        <button onClick={() => this.parallax.scrollTo(0)} >click</button>
            <Title>Get in touch</Title>
            <ContactText id="projects">
              Contact me  via <a href="mailto:craigstevens044@gmail.com">Email,</a> {' '}
              <a href="https://linkedin.com/in/craig-stevens-044/">  Linkedin</a> or{' '}
              <a href="https://github.com/Csteves">Github.</a>
            </ContactText>
          </Inner>
          <Footer>
          </Footer>
        </Contact>
      </Parallax>
    </>
    )
  }

}

export default Index
