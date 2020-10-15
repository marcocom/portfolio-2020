import { ProjectFeatures, ProjectTech } from '@src/modules/project'
import { Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectDev = styled.section`
  margin: 60px auto 0;
`;

export const ProjectDev = ({ devDesc, features }) => (
  <StyledProjectDev>
    <Text type='heading'>Introspective</Text>
    {devDesc.map((paragraph) => (
      <Text key={`DevDesc-${paragraph}`}>{paragraph}</Text>
    ))}
  </StyledProjectDev>
);
