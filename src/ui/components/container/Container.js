import styled from 'styled-components'
import { media } from '@src/utils'

export const Container = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1300px;

  ${media.down.xl} {
    width: 1000px;
    padding: 0;
  }
  ${media.down.lg} {
    width: 860px;
    padding: 0;
  }
  ${media.down.md} {
    width: 88%;
  }
  ${media.down.sm} {
    width: 100%;
  }
  ${media.down.xs} {
    width: 100%;
  }
`;
