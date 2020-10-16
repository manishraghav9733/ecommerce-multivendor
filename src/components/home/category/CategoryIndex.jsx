import React, { useState, useEffect } from "react";
import { getProductsByCategoryData, getAddToCart } from "../../../actions";

import {
  Card,
  Col,
  Row,
  Button,
  Pagination,
  Spin,
  Empty,
  notification,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import history from "../../../history";
import "./category.css";
import { useSelector } from "react-redux";

const CategoryIndex = (props) => {
  const category = props.match.params.category;

  const user = useSelector((state) => state.userAuth);

  const userId = user.userId;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [count, setCount] = useState(null);
  const limit = 8;

  useEffect(() => {
    const callApi = async () => {
      try {
        setLoading(true);
        const response = await getProductsByCategoryData(
          limit,
          offSet,
          category
        );
        //  console.log(response.data.products);
        setData(response.data.products);
        setCount(response.data.count);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    callApi();
    return () => {};
  }, [category]);

  const onGoToDetailsClick = (data) => {
    let id = data._id;
    history.push(`/product/${id}`);
  };

  const handlePageChange = async (pageNumber) => {
    const temp_offset = pageNumber * limit - limit;
    setOffSet(temp_offset);
    setLoading(true);
    try {
      const response = await getProductsByCategoryData(
        limit,
        temp_offset,
        category
      );
      // console.log(response.data.data);
      setData(response.data.products);
      setCount(response.data.count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onAddToCartClick = async (data) => {
    // console.log("data", data);
    let selectedProductName = data.name;
    let product_id = data._id;
    let temp_quantity = 1;

    let values = {
      productId: product_id,
      userId: userId,
      quantity: temp_quantity,
    };
    try {
      const response = await getAddToCart(values);
      openNotification(selectedProductName);
      // message.success("added to cart");
    } catch (error) {}
  };

  const openNotification = (selectedProductName) => {
    notification.info({
      message: `Added to Cart `,
      description: `${selectedProductName}`,
      placement: "topRight",
      top: 150,
    });
  };

  return (
    <div>
      <div
        className="site-card-wrapper"
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        <Spin spinning={loading}>
          {data.length > 0 ? (
            <div>
              <Row
                gutter={[48, 24]}
                justify="space-around"
                style={{ margin: 0 }}
              >
                {data.map((item, i) => (
                  <Col
                    span={6}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={6}
                    xxl={6}
                    key={i}
                  >
                    <Card
                      // hoverable
                      className="product__card"
                      bordered={false}
                      style={{ marginTop: "20px" }}
                      // onClick={() => console.log("CARD CLICK")}
                    >
                      {item.is_discount ? (
                        <div className="product__discount__header">
                          {item.discount}%
                        </div>
                      ) : null}
                      <img
                        style={{
                          maxWidth: "100%",
                          height: "200px",
                        }}
                        src={item.productImage}
                      />
                      <div className="product__name">{item.name}</div>

                      <div
                        className="product__price__container"
                        style={{ marginTop: "3%" }}
                      >
                        {item.is_discount ? (
                          <span>
                            <span className="product__price__fixed">
                              Rs{" "}
                              {item.price - (item.price * item.discount) / 100}
                            </span>
                            <span
                              style={{
                                marginLeft: "4px",
                                textDecoration: "line-through",
                                color: "grey",
                              }}
                            >
                              Rs {item.price}
                            </span>
                          </span>
                        ) : (
                          <span className="product__price__fixed">
                            Rs {item.price}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          marginTop: "3%",
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          type="danger"
                          style={{ marginRight: "10px" }}
                          onClick={() => onAddToCartClick(item)}
                          //className="addcart"
                        >
                          <ShoppingCartOutlined />
                          Add To Cart
                        </Button>

                        <Button
                          onClick={() => onGoToDetailsClick(item)}
                          type="primary"
                          //  className="addcart"
                        >
                          Details
                        </Button>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                <Pagination
                  current={(offSet + limit) / limit}
                  pageSize={limit}
                  onChange={handlePageChange}
                  total={count}
                />
              </div>
            </div>
          ) : (
            <Empty />
          )}
        </Spin>
      </div>
    </div>
  );
};

export default CategoryIndex;
