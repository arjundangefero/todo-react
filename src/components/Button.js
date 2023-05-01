import React from 'react'
import propType from 'prop-types'

const Button = ({color,text, onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
      {text}
    </button> 
  )
} 

Button.defaultProps = {
  color: 'steelblue'
}

Button.defaultProps = {
  text: propType.string,
  color: propType.string,
  onClick: propType.func.isRequired 
}

export default Button