import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import javascript from '../../static/icons/javascript.svg'
import css from '../../static/icons/css-3.svg'
import html from '../../static/icons/html-5.svg'
import react from '../../static/icons/React.js.svg'
import redux from '../../static/icons/redux.svg'
import gatsby from '../../static/icons/gatsby.svg'
import styledComp from '../../static/icons/styled-comp.png'


const Wrapper = styled.div`
  width: 350px;
  height:450px;
  min-width:350px;
  ${tw`shadow-lg relative rounded-lg text-white`};
  background: ${props => props.bg};
  display:flex:
  flex-direction: column;
  justify-content: space-between;
  flex-wrap:wrap;
  text-align: center;
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-l md:text-lg w-4/5`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin:20px auto;
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-2xl xl:text-2xl tracking-wide font-sans pt-1`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin:10px auto;
`
const SkillsWrapper = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom:10px;
  margin: 0 auto;
`
const Skill = styled.img`
${tw`rounded-full w-16 xl:w-16  h-auto`};
margin:5px;
`
const SkillWrap = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:10px;

`

const FrontEndCard = ({ title, link, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>{title}</Title>
    <Text>{children}</Text>
    <SkillsWrapper>
        <SkillWrap>
            <Skill src={javascript}/>
        </SkillWrap>
        <SkillWrap>
            <Skill  src={react}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={redux}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={html}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={css}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={gatsby}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={styledComp}/>
        </SkillWrap>
    </SkillsWrapper>
  </Wrapper>
)

export default FrontEndCard

FrontEndCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}