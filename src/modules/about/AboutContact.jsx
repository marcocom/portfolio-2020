import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

import { Text } from '@src/ui/components'
import { media } from '@src/utils'

const StyledAboutContact = styled.section`
  width:
`;

const AboutContactList = styled.ul`
  display: block;
  text-align: center;

  margin: 20px auto;
  width: 260px;
  list-style: none;
  & li {
      display: inline-block;
    & a {
      text-decoration: none;
      margin-bottom: 30px;
      position: relative;

      & svg {
        transition: color ease-in-out 250ms;
        font-size: 3em;
        margin-right: 0.5em;

        ${media.down.sm} {
          font-size: 2em;
        }
      }


      &:hover,
      &:active,
      &:focus {
        & span,
        & svg {
          color: ${({theme}) => theme.color.primary};
        }
      }
    }
  }
`;

export const AboutContact = () => (
  <StyledAboutContact>
    <Text type='heading' center>
      reach out
    </Text>
    <AboutContactList>
      <li>
        <a href='mailto:marcocom@gmail.com'>
          <FaRegEnvelope />
        </a>
      </li>
      <li>
        <a href='https://github.com/marcocom' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/marcocom/'
            target='_blank'
            rel='noopener noreferrer'>
         <FaLinkedin />
        </a>
      </li>
    </AboutContactList>
  </StyledAboutContact>
);
