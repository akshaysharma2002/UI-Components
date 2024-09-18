import React from 'react'
import NavBar from '@/components/NavBar/NavBar';
function NavBarComponent() {
    const NavTabs = {
        tabs: [
          {
            label: 'Home',
            link: '/',
          },
          {
            label: 'Gallery',
            link: '/gallery',
          },
          {
            label: 'About',
            link: '/about',
          },
          // Add more tabs here
        ],
      };
  return (
    <>
    <Breadcrumb breadcrumbLinks={breadcrumbLinks}/>
    </>
  )
}

export default NavBarComponent