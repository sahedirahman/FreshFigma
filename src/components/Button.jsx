import React from 'react'

const Button = ({btnTex, className}) => {
  return (
    <button className={`font-pop font-semibold text-2xl ${className}`}>{btnTex}</button>
  )
}

export default Button
