import { Button, Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledProjectInfo = styled.section`
  width: 100%;
  margin: 10px auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 100px;
  width: 100%;
  grid-template-columns: 2fr 1fr;

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-gap: 15px;
  align-self: start;
  justify-self: end;

  ${media.down.md} {
    grid-template-columns: 1fr 1fr;
    justify-self: start;
  }
  ${media.down.sm} {
    justify-self: stretch;
  }
  ${media.down.xs} {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

const StyledTitle = styled.div`
  & h3, & h4 {
    text-align: left;
    color: ${({theme}) => theme.color.imgBg};
  }
`;

export const ProjectInfo = ({ title, subtitle, githubLink, hostedLink }) => (
  <StyledProjectInfo>
    <Grid>
      {/*<StyledTitle>
        <Text type='heading'>{title}</Text>
        <Text type='subheading'>{subtitle}</Text>
      </StyledTitle>*/}
      <Buttons>
        { hostedLink.length > 0 &&
          <Button text='See Website' href={hostedLink}/>
        }
        { githubLink.length > 0 &&
        <Button outline text='View on GitHub' href={githubLink} />
        }
      </Buttons>
    </Grid>
  </StyledProjectInfo>
);
