import React from 'react'
import ImageGallery from '@/components/ImageGallery/ImageGallery'
function ImageGalleryComponent() {
    const ImageDisplay = {
        images : [
           
          {
            id: 1,
            src: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            alt: 'Image 1',
          },
          {
            id: 2,
            src: 'https://images.unsplash.com/photo-1687731216321-8265eacdc6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            alt: 'Image 2',
          },
          {
            id: 1,
            src: 'https://images.unsplash.com/photo-1687622577762-2c693481b4fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Image 1',
          },
          {
            id: 2,
            src: 'https://images.unsplash.com/photo-1687628511060-d59e84a47006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            alt: 'Image 2',
          },
          {
            id: 1,
            src: 'https://images.unsplash.com/photo-1687778682351-99d1e0f8f1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Image 1',
          },
          {
            id: 2,
            src: 'https://images.unsplash.com/photo-1687499559554-b12276ea77ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
            alt: 'Image 2',
          },
          {
            id: 1,
            src: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            alt: 'Image 1',
          }
          
          // Add more image objects here
        ]
      };
  return (
    <>
    <ImageGallery images={ImageDisplay.images}/>
    </>
  )
}

export default ImageGalleryComponent