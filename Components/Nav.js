import React from 'react'

const Nav = (props) => {
    console.log(props.num)
  return (
    <div className="text-black bg-red-300  rounded-xl">
      {props.num}
    </div>
  )
}

export default Nav
