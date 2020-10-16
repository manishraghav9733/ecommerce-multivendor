import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import history from "../../history";

const { SubMenu } = Menu;

const AdminMenu = (props) => {
  return (
    <>
      <div>
        <Menu
          mode="inline"
          // openKeys={this.state.openKeys}
          // onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <ShopOutlined />
                <span>Products</span>
              </span>
            }
          >
            <Menu.Item onClick={() => history.push("/admin/product")} key="1">
              All Products
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title={
              <span>
                <ShoppingOutlined />
                <span>Orders</span>
              </span>
            }
          >
            <Menu.Item onClick={() => console.log("/order")} key="5">
              All Orders
            </Menu.Item>
          </SubMenu>
          <Menu.Item onClick={() => history.push("/home")} key="home">
            <ShoppingOutlined />
            Shop
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default AdminMenu;
