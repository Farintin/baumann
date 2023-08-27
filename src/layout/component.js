import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Page from './Page'



const Footer = styled(Box)(({ theme }) => ({
  marginRight: 28,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&.notFound': {
    display: 'none'
  },
  '& > .item': {
    margin: 10,
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      '& svg.icon': {
        fill: theme.palette.primary.light
      }
    }
  }
}))

const Body = Page



export { Footer, Body }
