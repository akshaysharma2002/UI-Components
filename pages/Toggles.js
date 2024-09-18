import React from 'react'
import Switch from '@/components/Toggle/Switch'
function TogglesComponent() {                                          
  return (
    <>
      <Switch />
      <Switch defaultOn={false} />
      <Switch disabled />
    </>
  )
}

export default TogglesComponent