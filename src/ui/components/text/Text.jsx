import React from 'react'
import {
  Heading,
  Hightlight,
  Link,
  ListItem,
  PageHeading,
  PageSubheading,
  Paragraph,
  Subheading,
} from './styledText'

const styledText = {
  body: Paragraph,
  'list-item': ListItem,
  heading: Heading,
  subheading: Subheading,
  'page-heading': PageHeading,
  'page-subheading': PageSubheading,
  highlight: Hightlight,
}

const getTextComponent = (type) => styledText[type] || styledText.body

export const Text = ({ children, type = 'body', href, ...props }) => {
  const TextComponent = href ? Link : getTextComponent(type)
  return (
    <TextComponent {...props} href={href}>
      {children}
    </TextComponent>
  )
}
