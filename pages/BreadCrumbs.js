import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
function BreadCrumbsComponent() {
    const breadcrumbLinks = [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Category',
          url: '/category',
        },
        {
          label: 'Subcategory',
          url: '/category/subcategory',
        },
        {
          label: 'Current Page',
          url: '/category/subcategory/current-page',
        },
      ];
  return (
    <Breadcrumb breadcrumbLinks={breadcrumbLinks}/> 
  )
}

export default BreadCrumbsComponent