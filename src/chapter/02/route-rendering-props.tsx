import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

type Extra = { extra: boolean }
const Home = () => <h2>Home</h2>
const About = ({ extra }: Extra) => (
  <h2>{extra ? 'About Me' : 'About Him/Her'}</h2>
)
const Contact = ({ extra }: Extra) => (
  <h2>{extra ? 'Contact Me' : 'Contact Him/Her'}</h2>
)

export default (props: React.FC) => {
  const someVariable = true

  const renderAbout = () => <About {...props} extra={someVariable} />
  const renderContact = () => <Contact {...props} extra={someVariable} />

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/route-rendering-props">Home</Link>
          </li>
          <li>
            <Link to="/route-rendering-props/about">About</Link>
          </li>
          <li>
            <Link to="/route-rendering-props/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/route-rendering-props" component={Home} exact={true} />
        <Route path="/route-rendering-props/about" render={renderAbout} />
        <Route path="/route-rendering-props/contact" render={renderContact} />
      </Switch>
    </div>
  )
}
