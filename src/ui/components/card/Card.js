import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: ${({theme}) => theme.shadows.boxShadow};
  padding: 20px 30px;
  background: ${({ theme }) => theme.color.bgCard};
  transition: ${({ theme }) => theme.hoverTransition};
  grid-area: card;
`;
