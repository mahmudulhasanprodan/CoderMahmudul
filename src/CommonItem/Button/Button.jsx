import React from 'react'

const Button = ({className, title}) => {
  return (
    <div>
        <button className={className ? className : "bg-BtnColor py-2 px-10"}>{title ? title : "Button"}</button>
    </div>
  )
}

export default Button
