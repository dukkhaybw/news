import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login/Login'
import SandBox from '../pages/sand-box/SandBox'


export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={SandBox}></Route>
      </Switch>
    </HashRouter>
  )
}
