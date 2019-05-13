import React from 'react'
import { Link, Route } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/basic-routing">Home</Link>
          </li>
          <li>
            <Link to="/basic-routing/about">About</Link>
          </li>
          <li>
            <Link to="/basic-routing/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/basic-routing" component={Index} exact={true} />
      <Route path="/basic-routing/about" component={About} />
      <Route path="/basic-routing/users" component={Users} />
    </div>
  )
}
