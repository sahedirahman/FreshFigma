import React from 'react'

export const Container = ({children,className}) => {
  return (
    <div className={`max-w-containerAll mx-auto ${className}`}>{children}</div>
  )
}

export default Container