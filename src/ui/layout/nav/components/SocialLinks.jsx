import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  //transition: ${({ theme }) => theme.hoverTransition};
  padding: 0 15px;
  font-size: 22px;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const SocialLinks = () => (
<>
  <li>
    <SocialLink
      href='https://github.com/marcocom'
      target='_blank'
      rel='noopener noreferrer'>
      <FaGithub />
    </SocialLink>
  </li>
  <li>
    <SocialLink
      href='https://www.linkedin.com/in/marcocom/'
      target='_blank'
      rel='noopener noreferrer'>
      <FaLinkedin />
    </SocialLink>
  </li>
</>
);
