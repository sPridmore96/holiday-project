import React from 'react'
import "./Button.scss"

const Button = ({buttonText, whenClicked}) => {
  return (
    <button className='button' onClick={whenClicked} >{buttonText}</button>
  )
}

export default Button