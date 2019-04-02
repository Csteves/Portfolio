import React, {Component} from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax} from 'react-spring/addons.cjs'
import { UpDown} from '../styles/animations'


// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import BackEndCard from '../components/BackEndCard'


// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import recycle from '../../static/icons/rec.svg'
import garden from '../../static/icons/gardenLogo.svg'

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
const NavToolbar = styled(UpDown)`
position:fixed;
top:30px ;
right:40px ;
margin-left:auto;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:5px;
z-index:1000;
height:80px;
width:80px;
border-radius:15%;
/* background-color:#ffffff; */
background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
overflow:hidden;
transition-property:all;
transition-timing-function: ease;
transition-duration: .3s;
&:hover{
  & span{
    height:300px;
    width:0;
    background-color:inherit;
  }
  & button{
    display:inline;
    opacity:1;
    height:85px;
    width:85px;
    color:#f6d365;
    border: 2px solid #fda085 ;
    transition: all 0.3s ease-out ;
  }
  background-color:inherit;
  background-image:none;
  justify-content:flex-start;
  height:390px;
  width:100px;
  border-radius:0;
  transition: all 0.3s ease-out;
}
@media(max-width:600px){
  display:none;
}
`
const Bar = styled.span`
 display: block;
  height: 10px;
  width: 100%;
  background: #333;
  border-radius: 9px;
  opacity: 1;
  left: 7px;
  transition: all 0.1s ease-in ;
  transition:width 0.5s ease-out .1s;
`
const NavButton = styled.button`
height:0;
width:0;
border:black;
outline:transparent;
font-size:1.2em;
line-height:80px;
background-color:inherit;
opacity:0;
border-radius: 50%;
margin:5px;
color:black;
text-align:center;
text-decoration:none;
box-shadow: 0 0 3px gray;
&:hover{
  transform:scale(1.1)
}
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const SkillsHero = styled.div`
  ${tw`flex lg:flex-row  justify-center items-center  mt-8`};
 @media(max-width:800px){
   flex-direction:column;
   justify-content:center;
 }
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



class Index extends Component {



  render(){

    return(
      <>
      <Layout/>
      <NavToolbar>
          <Bar>
        <NavButton
        onClick={() => this.parallax.scrollTo(1)}
        color={'burlywood'} >About</NavButton>
          </Bar>
          <Bar>
            <NavButton
            onClick={() => this.parallax.scrollTo(2.5)}
            color={'burlywood'} >Projects</NavButton>
          </Bar>
          <Bar>
            <NavButton
            onClick={() => this.parallax.scrollTo(4)}
            color={'burlywood'} >Skills</NavButton>
          </Bar>
          <Bar>
            <NavButton
            onClick={() => this.parallax.scrollTo(5)}
            color={'burlywood'} >Contact</NavButton>
          </Bar>
      </NavToolbar>



      <Parallax  ref={ref => (this.parallax = ref)} pages={6}>
        <Hero id="hero" offset={0}>
          <BigTitle>
            Hello, <br /> I'm Craig Stevens.
          </BigTitle>
          <Subtitle>Full stack web developer</Subtitle>
        </Hero>

        <About offset={1}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Craig Stevens" />
            <AboutSub>
            Currently Developing web applications, passionate about finding solutions to problems while creating elegant user facing products.
            </AboutSub>
          </AboutHero>
          <AboutDesc id='about'>
           If you would like to see what I do for fun, view either one of my hosted <a href='' onClick={() => this.parallax.scrollTo(2.5)} >projects</a> below or visit my <a href="https://github.com/Csteves">Github</a> for all my doings.
          </AboutDesc>
        </About>

        <Projects offset={2} >
          <Title offset={2.5} >Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Footprint"
              link="/footprint"
              bg="linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%)"
              logo={recycle}
              color={'#e07628'}
              site={'https://foot-print.net'}
              >
                A Recyling Information Web Application.
            </ProjectCard>
            <ProjectCard
              title="S.O.S"
              link="/seeds"
              bg="linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)"
              logo={garden}
              color={'#558B2F'}
              site={'https://seedsofsuccess.foot-print.net'}
              >
                <p>
                  Seeds Of Success
                  <br/>
                  An Application Providing Gardening Information With Visual Garden Planning.
                </p>

            </ProjectCard>
          </ProjectsWrapper>
        </Projects>

        <Skills offset={4}>
          <Title>Skills</Title>
          <SkillsHero>
            <FrontEndCard
            title='Front-end Development'
            bg="linear-gradient(to right, #232526 0%, #414345 100%)"
            >
            I love creating interactive UI's with Javascript or Typescript, HTMl, and CSS. My library of choice is React.js with Redux to create reusable UI compontents and manage client state. Also familiar with Gatsby.js and Styled Components.
            </FrontEndCard>
            <BackEndCard
            title='Back-end Development'
            bg="linear-gradient(to right, #8e9eab 0%, #eef2f3 100%)"
            >
            {/* Add GraphQL logo */}
            Experienced with Node.js environments, commonly using Express, PostgreSQL, Massive, GraphQL, RESTful or GraphQL APIs, and authentication. For unit testing, endpoint testing and version control I use Jest, Postman, and Git.
            </BackEndCard>
          </SkillsHero>
        </Skills>

        <Contact offset={5}>
          <Inner>
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