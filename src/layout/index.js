import { Outlet } from 'react-router-dom'
import {  Body } from './component'



export default function Layout () {
  return (
    <>
      <Body>
        <Outlet />
      </Body>
    </>
  )
}


