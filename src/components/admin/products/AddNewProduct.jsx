import React, { useState } from "react";
import { Card, Select, Input, Button, message, Row, Col, Modal } from "antd";
import { getCreateNewProduct } from "../../../actions";
import { UploadOutlined } from "@ant-design/icons";

const AddNewProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);
  const [discount, setDiscount] = useState(null);
  const [isIconFileUplaoded, setIsIconFileUplaoded] = useState(false);
  const [fileIconSrc, setFileIconSrc] = useState("");
  const [mediaIconFile, setMediaIconFile] = useState(null);

  const onNameChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined
    ) {
      setName(null);
    } else {
      setName(event.target.value);
    }
  };

  const onPriceChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined ||
      event.target.value % 1 !== 0 ||
      event.target.value < 0
    ) {
      setPrice(undefined);
    } else {
      setPrice(event.target.value);
    }
  };

  const onDiscountChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined ||
      event.target.value % 1 !== 0 ||
      event.target.value < 0
    ) {
      setDiscount(undefined);
    } else {
      setDiscount(event.target.value);
    }
  };

  const filechangeIconHandler = (event) => {
    //let fileType = event.target.files[0].type;
    setMediaIconFile(event.target.files[0]);
    // console.log(event.target.files[0]);
    var readerIcon = new FileReader();
    var url = readerIcon.readAsDataURL(event.target.files[0]);
    readerIcon.onloadend = (e) => {
      setIsIconFileUplaoded(true);
      setFileIconSrc(readerIcon.result);
      // console.log(readerIcon.result);
    };
  };

  const reuploadIconMedia = () => {
    setIsIconFileUplaoded(false);
    setFileIconSrc("");
  };

  const createNew = async () => {
    if (name === null || name === undefined || name === "" || name === " ") {
      message.warning("Please enter Product Name");
      return;
    }

    if (
      price === null ||
      price === undefined ||
      price === "" ||
      price === " "
    ) {
      message.warning("Please enter Product price");
      return;
    }

    if (
      category === null ||
      category === undefined ||
      category === "" ||
      category === " "
    ) {
      message.warning("Please Select Product category");
      return;
    }

    if (
      isDiscount === null ||
      isDiscount === undefined ||
      isDiscount === "" ||
      isDiscount === " "
    ) {
      message.warning("Please Select Product isDiscount");
      return;
    }

    if (isDiscount === "true") {
      if (
        discount === null ||
        discount === undefined ||
        discount === "" ||
        discount === " "
      ) {
        message.warning("Please enter Product discount");
        return;
      }
    }

    if (
      mediaIconFile === null ||
      mediaIconFile === undefined ||
      mediaIconFile === "" ||
      mediaIconFile === " "
    ) {
      message.warning("Please Upload Media");
      return;
    }

    let tempDiscount;

    if (isDiscount === "true") {
      tempDiscount = discount;
    } else {
      tempDiscount = 0;
    }

    let formValues = {};

    formValues = {
      name: name,
      price: price,
      category: category,
      is_discount: isDiscount,
      productImage: mediaIconFile,
      discount: tempDiscount,
    };

    //  console.log("formValues", formValues);

    try {
      setLoading(true);
      await getCreateNewProduct(formValues);
      setLoading(false);
      message.success("Product Created");
      props.setCreateNewModalShow(false);
      props.setLoadAgain(!props.loadAgain);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Name starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Name
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Product Name"
              style={
                name === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onNameChange}
            />
          </div>
          {name === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>
      {/* Name ends*/}
      {/* price starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Price
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="number"
              min={1}
              placeholder="Price"
              style={
                price === undefined
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onPriceChange}
            />
          </div>
          {price === undefined ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>
      {/* price ends*/}
      {/* Category starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Category
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Select
              style={{ width: "100%" }}
              placeholder="Select Category"
              onChange={(value) => setCategory(value)}
            >
              <Select.Option value={"electronics"}>Electronics</Select.Option>
              <Select.Option value={"vegetable"}>Vegetable</Select.Option>
              <Select.Option value={"phone"}>Phone</Select.Option>
            </Select>
          </div>
          {category === undefined ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      {/* category ends*/}

      {/* Discount starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Is Discount
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Select
              style={{ width: "100%" }}
              placeholder="Select Is Discount"
              onChange={(value) => setIsDiscount(value)}
            >
              <Select.Option value={"true"}>Yes</Select.Option>
              <Select.Option value={"false"}>No</Select.Option>
            </Select>
          </div>
          {isDiscount === undefined ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      {/* is dicount ends*/}
      {/* discount starts*/}

      {isDiscount === "true" ? (
        <div style={{ display: "flex", marginBottom: "25px" }}>
          <div
            style={{
              width: "140px",
              fontWeight: 600,
            }}
          >
            Discount %
            <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
          </div>
          <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
            <div>
              <Input
                type="number"
                min={1}
                max={100}
                placeholder="Discount %"
                style={
                  discount === undefined
                    ? {
                        width: "100%",
                        border: "0.5px solid red",
                      }
                    : {
                        width: "100%",
                      }
                }
                onChange={onDiscountChange}
              />
            </div>
            {discount === undefined ? (
              <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* discount ends*/}
      {/* image starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Image Upload
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div
          style={{
            width: "calc(100% - 160px)",
            marginLeft: "20px",
            marginTop: "12px",
          }}
        >
          {isIconFileUplaoded === false ? (
            <div>
              <label>
                <Input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={filechangeIconHandler}
                />
                <span
                  style={{
                    border: "1px solid #1890ff",
                    background: "#fff",
                    color: "#1890ff",
                    fontWeight: 400,
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "6.5px 15px",
                    borderRadius: "4px",
                    lineHeight: "1.499",
                  }}
                >
                  <UploadOutlined style={{ paddingRight: "5px" }} />
                  Upload
                </span>
              </label>
            </div>
          ) : (
            <div style={{ maxWidth: "100%" }}>
              <div style={{ marginBottom: "20px", textAlign: "right" }}>
                <Button type="danger" onClick={() => reuploadIconMedia()}>
                  Change Media
                </Button>
              </div>
              <div>
                <img src={fileIconSrc} alt="icon" style={{ maxWidth: "60%" }} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Image ends*/}

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Create New Product
        </Button>
      </div>
    </div>
  );
};

export default AddNewProduct;
