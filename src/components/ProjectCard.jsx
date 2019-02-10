import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`
const Text = styled.div`
  ${tw`opacity-75 font-sans text-base md:text-base xl:text-xl`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: ${props => props.color};
`
const Title = styled.div`
  ${tw` uppercase text-2xl md:text-3xl xl:text-5xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: ${props => props.color};
`
const Logo = styled.img`
  ${tw`  md:w-8 lg:w-12 xl:w-16  `}
  position:relative;
  top:8px;
`

const ProjectCard = ({ title, link, children, bg,color,logo }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title color={color}><Logo src={logo ? logo : null} />{title}</Title>
    <Text color={color} >{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
