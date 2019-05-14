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
            <Link to="/guides/basic-routing">Home</Link>
          </li>
          <li>
            <Link to="/guides/basic-routing/about">About</Link>
          </li>
          <li>
            <Link to="/guides/basic-routing/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/guides/basic-routing" component={Index} exact={true} />
      <Route path="/guides/basic-routing/about" component={About} />
      <Route path="/guides/basic-routing/users" component={Users} />
    </div>
  )
}
