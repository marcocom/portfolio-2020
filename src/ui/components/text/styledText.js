import styled from 'styled-components'
import { media } from '@src/utils'

export const PageHeading = styled.h2`
  text-align: center;
  font-weight: 200;
`;
export const PageSubheading = styled.h3`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 400;
  text-align: center;
`;

export const Heading = styled.h3`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin-bottom: ${({ card }) => (card ? '5px' : '0.3em')};
  z-index: 2;
  position: relative;
`;

export const Subheading = styled.h4`
  font-weight: 400;
  line-height: 1.4rem;
  margin-bottom: ${({ card }) => (card ? '30px;' : '16px')};
`;

export const Paragraph = styled.p`
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: ${({ card }) => (card ? '30px' : '1.4em')};

  ${media.down.lg} {
    font-size: 1.1em;
    line-height: 1.4em;
  }

  ${media.down.sm} {
    font-size: 1em;
  }
`;

export const ListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 0.7em;

  ${media.down.lg} {
    font-size: 1.1em;
  }

  ${media.down.sm} {
    font-size: 1em;
  }
`;

export const ProjectYear = styled.h1`
  z-index: 1;
  font-size: 5em;
  font-weight: 200;
  letter-spacing: -.1em;
  display: block;
  position: absolute;
  opacity: 1;
  color: ${({theme}) => theme.color.imgBg};
  top: -5px;
  right: 10px;
  user-select: none;
`;

export const Hightlight = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`;

export const Link = styled.a`
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
`;
