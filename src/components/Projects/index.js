import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProjectCard from '../Card/ProjectCard'
import { projects } from '../../data/constants'

const Container = styled.div`
    background: ${({ theme }) => theme.Bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-top: 50px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 10px 24px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        border-radius: 4px;
    }
`
const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.primary};
`


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web' ?
            <ToggleButton active value="web" onClick={() => setToggle('web')}>Web</ToggleButton>
            :
            <ToggleButton value="web" onClick={() => setToggle('web')}>Web</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile' ?
            <ToggleButton active value="mobile" onClick={() => setToggle('mobile')}>Mobile</ToggleButton>
            :
            <ToggleButton value="mobile" onClick={() => setToggle('mobile')}>Mobile</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects