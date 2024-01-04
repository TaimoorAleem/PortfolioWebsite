import React from 'react'
import { FaBars } from 'react-icons/fa';
import styled, { useTheme } from 'styled-components'

const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transtion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.a`
    color: white;
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 400;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) { 
  font-size: 14px;
  }
`;

const CollapseIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const CollapseMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};

`;

const CollapseMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const CollapseNavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo>Home</NavLogo>
        <CollapseIcon>
          <FaBars onClick={() => setOpen(!open)} /> {/* Correct the placement */}
        </CollapseIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href='https://github.com/TaimoorAleem' target='_blank'>
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <CollapseMenu open={open}>
            <CollapseMenuLink
              href='#about'
              onClick={() => {
                setOpen(!open);
              }}
            >
              About
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#skills'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#education'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Education
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#projects'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </CollapseMenuLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: theme.primary,
                color: theme.white,
                textAlign: "center",
                width: "max-content",
                margin: "0 auto",
              }}
              href='https://github.com/TaimoorAleem'
              target='_blank'
            >
              Github Profile
            </GitHubButton>
          </CollapseMenu>
      )}
    </Nav>
  );
};

export default Navbar