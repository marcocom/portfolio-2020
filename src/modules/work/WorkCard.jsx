import React from 'react';
import styled from 'styled-components';

import { Button, Card, Text } from '@src/ui/components';
import { media } from '@src/utils';

const StyledWorkCard = styled(Card)`
  position: relative;
  display: block;
  margin: 0 10px;
  & h4 {
    text-align: left;
  }

  ${media.down.lg} {
    align-self: flex-start;
    margin: -100px auto -80px;
    width: 90%;
  }
`;

export const WorkCard = ({ title, subtitle, description, link, year, role }) => {
  const btnAction = (e) => {
    console.log('this works');
  };
  return (
      <StyledWorkCard>
        <Text type='project-year'>{year}</Text>
        <Text type='heading' card>{title}</Text>
        <Text type='subheading' card>{subtitle}</Text>
        <Text card>{description}</Text>
        <Button outline='true' to={link} text='See Details' hovertext='See Images, Videos, and Retrospective' />
      </StyledWorkCard>
    );
};
