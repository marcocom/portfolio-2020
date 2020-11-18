import { useTheme } from '@src/context'
import { DrawerNavLink } from '@src/ui/layout/nav/components'
import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { IoMdFolder, IoMdPerson, IoMdSunny, IoMdMoon, IoMdSubway } from 'react-icons/io'
import styled from 'styled-components'

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DrawerList = ({ setDrawerOpen }) => {
  const { theme, toggle } = useTheme();

  const handleDarkMode = () => {
    toggle();
    setDrawerOpen();
  };
  return (
    <NavList>
      <DrawerNavLink to='/' direction='down' name='Home' icon={<IoMdSubway />} />
      <DrawerNavLink to='/mywork' direction='up' name='My Work' icon={<IoMdFolder />} />
      <DrawerNavLink to='/about/' direction='left' name='About' icon={<IoMdPerson />} />
      <DrawerNavLink
        href='mailto:marcocom@gmail.com'
        name='Contact'
        icon={<FaRegEnvelope />}
        email
      />
      <DrawerNavLink href='https://github.com/marcocom' name='GitHub' icon={<FaGithub />} />
      <DrawerNavLink
        href='https://www.linkedin.com/in/marcocom/'
        name='LinkedIn'
        icon={<FaLinkedin />}
      />
      <DrawerNavLink
        onClick={handleDarkMode}
        name={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        icon={theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
      />
    </NavList>
  );
};
