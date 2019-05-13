import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>
const NoMatch = () => <h2>NoMatch</h2>

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/matching-three">Home</Link>
          </li>
          <li>
            <Link to="/matching-three/about">About</Link>
          </li>
          <li>
            <Link to="/matching-three/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/matching-three" component={Home} exact={true} />
        <Route path="/matching-three/about" component={About} />
        <Route path="/matching-three/contact" component={Contact} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}
