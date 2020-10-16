import React, { useState } from "react";
import { Layout } from "antd";

import AdminMenu from "./AdminMenu";

import NotFound from "../NotFound";

const { Header, Sider, Content } = Layout;

const AdminIndex = (props) => {
  const userType =
    localStorage.getItem("user_type") === null ||
    localStorage.getItem("user_type") === undefined
      ? ""
      : localStorage.getItem("user_type");

  return (
    <>
      <div>
        {userType === "admin" ? (
          <Layout>
            <Sider className="admin-sider" theme="light">
              <AdminMenu />
            </Sider>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        ) : (
          <NotFound status="500" title="500" subTitle="Access Denied" />
        )}
      </div>
    </>
  );
};

export default AdminIndex;
