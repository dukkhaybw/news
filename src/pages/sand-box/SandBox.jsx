import React from 'react'
import { Layout } from 'antd'
import {Switch, Route} from 'react-router-dom'
import Home from './home/Home.jsx'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import NewsList from './news-manage/NewsList'
import SiderMenu from '../../component/sider-menu/SiderMenu'
import TopHeader from '../../component/top-header/TopHeader'

const { Content } = Layout;

function SandBox() {
  return (
    <Layout>
      <SiderMenu></SiderMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Content>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/user-manage/list' component={UserList}></Route>
              <Route path='/right-manage/role/list' component={RoleList}></Route>
              <Route path='/right-manage/right/list' component={RightList}></Route>
              <Route path='/news-manage/list' component={NewsList}></Route>
            </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default SandBox
