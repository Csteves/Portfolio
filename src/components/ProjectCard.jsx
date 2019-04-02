import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

//Finish creating card flip so that it displays information on backside along with link to live or info page;
const Wrapper = styled.div`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  perspective: 1000px;
  position: relative;
  overflow:hidden;
  &:hover {
    overflow:visible;
    transform: rotateY(180deg);
    transition:0.6s;
    transform-style: preserve-3d;
    position:relative;
    .back{
      top:10px;
      right:30px;
    }
  }

`
const Text = styled.div`
  ${tw`opacity-75 font-sans text-base md:text-base xl:text-xl`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: ${props => props.color};
  backface-visibility: hidden;
`
const Title = styled.div`
  ${tw` uppercase text-2xl md:text-3xl xl:text-5xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: ${props => props.color};
  backface-visibility: hidden;
`
const Logo = styled.img`
  ${tw`  w-10 md:w-12 lg:w-12 xl:w-16  `}
  position:relative;
  top:8px;
  backface-visibility: hidden;
`
const Flipped = styled.div`
   position:absolute;
   top:-50px;
   transform:rotateY(180deg);
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-content:center;
   width:50%;
   height:100%;
`
const Link = styled.a`
    ${tw`shadow-lg  no-underline rounded-lg  text-inherit`};

`;


const ProjectCard = ({ title, link, children, bg, color, logo, site}) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title className="front" color={color}><Logo src={logo ? logo : null} />{title}</Title>
    <Text className='front' color={color}>{children}</Text>
    <Flipped className='back'>
      <Link  href={site}>Info</Link>
      <Link  href={site}>View Live</Link>
    </Flipped>

  </Wrapper>
)

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
