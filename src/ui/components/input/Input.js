import styled from 'styled-components'

export const Input = styled.input`
  padding: 5px 55px 5px 5px;
  background: ${({ theme }) => theme.color.bgCard};
  transition: ${({ theme }) => theme.hoverTransition};
`;
