import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export const Helmet = ({ pageTitle }) => (
  <ReactHelmet>
    <meta charSet='utf-8' />
    <meta name='author' content='Marco Comparato' />
    <title>marco comparato :: technology creations :: welcome</title>
    <meta name="description" content="Marco Comparato, Design and Development." />
    <meta name="keywords" content="San Francisco, Web Design, Web Development, UI Design, User Interface Design, User Experience Design, Flash Design, Flash Animation, Flash Actionscripting, Flash Developer, Flash Development, User Interface Design, Multimedia Design." />
  </ReactHelmet>
);
