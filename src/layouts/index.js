import React from 'react';
import router from 'umi/router';

import { Menu, Icon, Layout, Breadcrumb  } from 'antd';

const { SubMenu }  = Menu;
const { Header, Content, Footer } = Layout;

class BasicLayout extends React.PureComponent {
  state = {

  }
  handleNavChange = (item) => () => {
    router.push(item.path)
  }

  navItems = [{
    key: 'photo',
    path: '/photo',
    title: '相册'
  }, {
    key: 'video',
    path: '/video',
    title: '小视频'
  }, {
    key: 'meeting',
    path: '/meeting',
    title: '会议'
  }];
  renderSelectedKeys = () => {
    const { location } = this.props;
    const key = location.pathname.split("/")[1];
    return key;
  };
  render() {
    return (
      <Layout className="layout">
        {console.log(this.props)}
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            selectedKeys={this.renderSelectedKeys()}
          >
            {this.navItems.map((item) => {
              return (
                <Menu.Item key={item.key} onClick={this.handleNavChange(item)}>{item.title}</Menu.Item>
              )
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>MyView ©2019 Created by Rom Chung</Footer>
      </Layout>
    );
  }
}

export default BasicLayout;
