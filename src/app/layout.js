"use client"

import { usePathname } from 'next/navigation'
import { NavbarResponsive } from './components/NavbarResponsive'
import { NavbarLoggin } from './components/NavbarLoggin'
import './globals.css'


export default function RootLayout({ children }) {

  const routesWithoutNavbar = ['/login']
  const routesWithNavbarLoggin = ['/main']
  const pathname = usePathname()
  const hideNavbar = routesWithoutNavbar.includes(pathname);
  const ShowNavbarLogg = routesWithNavbarLoggin.includes(pathname);

  return (
    <html lang="en">
      <body className="">
        {/* <NavbarLoggin/> */}
        {/* !hideNavbar && <NavbarResponsive /> */}
        {ShowNavbarLogg ? <NavbarLoggin /> : !hideNavbar && <NavbarResponsive />}
        {children}
      </body>
    </html>
  )
}
