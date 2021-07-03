import React, {useState} from 'react'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
const { Sider } = Layout

export default function SiderMenu() {
  let [collapsed,setCollapsed] = useState(false)
  return (
    <Sider  trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">logo</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
    </Sider>
  )
}
