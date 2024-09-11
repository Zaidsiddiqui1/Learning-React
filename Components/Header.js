import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from "@/Helper/Context"

const Header = (props) => {
    const user = useContext(MyContext)
  return (
    <div className="p-4 text-black bg-green-300 rounded-xl">
          {/* Hey World */}
          {user}
          <Nav num={props.num} />
    </div>
  )
}

export default Header
