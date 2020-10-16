import React, { useState, useEffect } from "react";

import Product from "./Product";

const Home = () => {
  return (
    <>
      {/**
      <Row
        style={{ margin: 0 }}
        gutter={24}
        // justify="center"
      >
        <Col xs={24} sm={24} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={3} lg={3} xl={3}>
          <SideBar />
        </Col>
        <Col xs={24} sm={24} md={13} lg={14} xl={14}>
          <Banner />
        </Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Deal />
        </Col>
        <Col xs={24} sm={24} md={1} lg={1} xl={1}></Col>
      </Row>
       */}

      <div>
        <Product />
      </div>
    </>
  );
};

export default Home;
