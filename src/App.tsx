import React from 'react'
import { Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import Guides from './chapter/guides'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Route path="/" component={Guides} />
      </div>
    </Drawer>
  )
}

export default App
