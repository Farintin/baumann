import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'



const Main = styled(Container)(() => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

export default function NotFound({ title, meta }) {
  return (
    <Main>
      <Typography
        variant="h1"
        sx={{
          color: '#000',
          fontSize: '18vw'
        }}
      >
        404
      </Typography>
    </Main>
  )
}
