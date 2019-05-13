import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              activeStyle={{ color: '#f24' }}
              to="/navigation"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: '#f24' }} to="/navigation/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: '#f24' }} to="/navigation/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/navigation" component={Home} />
        <Route path="/navigation/about" component={About} />
        <Route path="/navigation/contact" component={Contact} />
      </Switch>
    </div>
  )
}
