import React, { useState, ReactNode } from 'react'
import './index.css'

const Drawer: React.FC<{
  title: string
  children: ReactNode
  renderMenu: ReactNode
}> = ({ title, children, renderMenu }) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const toggleDrawer = () => {
    setToggle(!toggle)
  }

  const hideDrawer = () => {
    setToggle(false)
  }

  return (
    <div className={`drawer ${toggle ? 'open' : ''}`}>
      <div className="drawer__mask" onClick={hideDrawer} />
      <div className="drawer__body">
        <div className="drawer__hamburger" onClick={toggleDrawer} />
        <h1>{title}</h1>
        {children}
      </div>
      <div className="drawer__menu">{renderMenu}</div>
    </div>
  )
}

export default Drawer
