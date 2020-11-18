import { ProjectFeatures, ProjectTech } from '@src/modules/project';
import { Text } from '@src/ui/components';
import React from 'react';
import {media} from '@src/utils';
import styled from 'styled-components';

const StyledProjectDev = styled.section`
  margin: 10px auto 60px;
  ${media.down.sm} {
    padding: 0 10px;
  }

  & .role-txt {
    font-size: 1.2em;

    color: ${({theme}) => theme.color.textSecondary}
  }
`;

export const ProjectDev = ({ devDesc, role }) => (
  <StyledProjectDev>
    <Text type='heading'>Introspective</Text>
    <Text type='subheading' className='role-txt'>My Role: {role}</Text>
    {devDesc.map((paragraph) => (
      <Text key={`DevDesc-${paragraph}`}>{paragraph}</Text>
    ))}
  </StyledProjectDev>
);
