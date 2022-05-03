import React from 'react'

const Button = (props) => {

  return (
    <>  
        <input type="text" />
        <button style={{color: props.color}}>{props.texto}</button>
    </>
  )
}

export default Button;