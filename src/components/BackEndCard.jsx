import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Git from '../../static/icons/git-icon.svg'
import node from '../../static/icons/node.svg'
import jest from '../../static/icons/jest.png'
import psql from '../../static/icons/postgresql.svg'
import postman from '../../static/icons/postman.svg'
import express from '../../static/icons/expressjslogo.png'
import massive from '../../static/icons/massive-title.jpg'

const Wrapper = styled.div`
  width: 350px;
  height:450px;
  min-width:350px;
  margin: 10px 10px 10px 20px;
  ${tw`shadow-lg relative rounded-lg text-white`};
  background: ${props => props.bg};
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  @media(max-width:800px){
    margin:30px 0;
  }
  @media(min-width:900px){
    margin-left:15%;
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-l md:text-lg w-4/5`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin:20px auto;
`

const Title = styled.div`
  ${tw`text-black uppercase  text-2xl md:text-2xl xl:text-2xl tracking-wide font-sans pt-1`};
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
${tw`rounded-full w-16   h-auto`};
margin:5px;
`
const SkillWrap = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:10px;

`

const BackEndCard = ({ title, link, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>{title}</Title>
    <Text style={{color:'black'}}>{children}</Text>
    <SkillsWrapper>
        <SkillWrap>
            <Skill src={node}/>
        </SkillWrap>
        <SkillWrap>
            <Skill  src={psql}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={express}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={massive}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={Git}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={postman}/>
        </SkillWrap>
        <SkillWrap>
            <Skill src={jest}/>
        </SkillWrap>
    </SkillsWrapper>
  </Wrapper>
)

export default BackEndCard

BackEndCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}