import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

export default function TopHeader() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: this.toggle,
        }
      )}
    </Header>
  );
}
