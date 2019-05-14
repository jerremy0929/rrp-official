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
              to="/guides/navigation"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: '#f24' }}
              to="/guides/navigation/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: '#f24' }}
              to="/guides/navigation/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/guides/navigation" component={Home} />
        <Route path="/guides/navigation/about" component={About} />
        <Route path="/guides/navigation/contact" component={Contact} />
      </Switch>
    </div>
  )
}
