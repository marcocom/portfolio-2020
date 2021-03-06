import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { BtnSolidStyles, BtnOutlineStyles, BtnBackStyles } from './buttonStyles';
import {media} from '@src/utils';

const StyledButton = styled.button`
  ${({ outline }) => (outline === 'true' ? BtnOutlineStyles : BtnSolidStyles)};
`;

const StyledAnchor = styled.a`
  ${({ outline }) => (outline === 'true' ? BtnOutlineStyles : BtnSolidStyles)};
`;

const StyledAniLink = styled(AniLink)`
  ${({ outline }) => (outline === 'true' ? BtnOutlineStyles : BtnSolidStyles)};
  ${({ backbtn }) => (backbtn !== 'false' && BtnBackStyles)};
  ${media.up.md} {
    &.top {
      border-bottom-right-radius: 20px;
    }
    &.bottom {
      border-top-right-radius: 20px;
    }
  }
`;

export const Button = ({ outline = 'false', backbtn = 'false', direction = 'right', hovertext = null, to, href, text, handleClick }) => {
  const themeContext = React.useContext(ThemeContext);
  if (to) {
    return (
      <StyledAniLink
        backbtn={backbtn}
        className={backbtn}
        outline={outline}
        to={to}
        swipe
        direction={direction}
        bg={themeContext.color.bg}
        duration={0.4}
      >
        <ButtonText text={text} hovertext={hovertext}/>
      </StyledAniLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor href={href} outline={outline} target='_blank' rel='noopener noreferrer'>
        <ButtonText text={text} />
      </StyledAnchor>
    )
  }

  return (
    <StyledButton onClick={handleClick} outline={outline}>
      <ButtonText text={text} />
    </StyledButton>
  )
};

const ButtonText = ({ text, hovertext = null }) => (
  <>
    <div className='btn_text--default'>
      <span>{text}</span>
    </div>
    <div className='btn_text--hidden'>
      { !hovertext ?
        <span>{text}</span> :
        <span>{hovertext}</span>
      }

    </div>
  </>
);
