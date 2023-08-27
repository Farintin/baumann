import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import { Footer, Body } from './component'



export default function Layout ({ title }) {
  return (
    <>
      <Header />
      <Body title={title}>
        <Outlet />
      </Body>
      <Footer/>
    </>
  )
}


