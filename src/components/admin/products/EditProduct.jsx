import React, { useState, useEffect } from "react";
import { Card, Select, Input, Button, message, Row, Col, Modal } from "antd";
import { getUpdateProduct } from "../../../actions";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const EditProduct = (props) => {
  const selectedProductData = props.selectedProductData;

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(selectedProductData.category);
  const [isDiscount, setIsDiscount] = useState(
    selectedProductData.is_discount === true ? "true" : "false"
  );
  const [discount, setDiscount] = useState(null);
  const [isIconFileUplaoded, setIsIconFileUplaoded] = useState(false);
  const [fileIconSrc, setFileIconSrc] = useState("");
  const [mediaIconFile, setMediaIconFile] = useState(null);
  const [productId, setProductId] = useState(null);

  const [showChangeMediaIconButton, setShowChangeMediaIconButton] = useState(
    true
  );
  const [isIconFileChanged, setIsIconFileChanged] = useState(false);

  useEffect(() => {
    if (selectedProductData && Object.keys(selectedProductData).length !== 0) {
      setProductId(selectedProductData._id);
      setName(selectedProductData.name);
      setPrice(selectedProductData.price);
      setCategory(selectedProductData.category);

      setIsDiscount(
        selectedProductData.is_discount === true ? "true" : "false"
      );
      setDiscount(selectedProductData.discount);
      // console.log(JSON.parse(seriesDetails.description2));
      if (
        selectedProductData.productImage === undefined ||
        selectedProductData.productImage === null ||
        selectedProductData.productImage === ""
      ) {
        // console.log("no asstes")
        setIsIconFileChanged(true);
        setIsIconFileUplaoded(false);
      } else {
        if (
          selectedProductData.productImage === null ||
          selectedProductData.productImage === undefined ||
          selectedProductData.productImage === "" ||
          selectedProductData.productImage === " "
        ) {
          setIsIconFileChanged(true);
          setIsIconFileUplaoded(false);
        } else {
          setIsIconFileChanged(false);
          setIsIconFileUplaoded(true);
          setFileIconSrc(selectedProductData.productImage);
        }
      }
    }

    return () => {};
  }, [selectedProductData._id]);

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
    var readerIcon = new FileReader();
    var url = readerIcon.readAsDataURL(event.target.files[0]);
    readerIcon.onloadend = (e) => {
      setIsIconFileUplaoded(true);
      setFileIconSrc(readerIcon.result);
    };
    setShowChangeMediaIconButton(false);
  };

  const reuploadIconMedia = () => {
    setIsIconFileUplaoded(false);
    setIsIconFileChanged(true);
    // setFileIconSrc("");
    setMediaIconFile(null);
  };

  const discardIconMediaChange = () => {
    if (
      selectedProductData.productImage === null ||
      selectedProductData.productImage === undefined ||
      selectedProductData.productImage === ""
    ) {
      setFileIconSrc(null);
      setIsIconFileChanged(true);
      setIsIconFileUplaoded(false);
      setMediaIconFile(null);
    } else {
      setIsIconFileChanged(false);
      setIsIconFileUplaoded(true);
      setFileIconSrc(selectedProductData.productImage);
    }
    setShowChangeMediaIconButton(true);
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

    if (
      discount === null ||
      discount === undefined ||
      discount === "" ||
      discount === " "
    ) {
      message.warning("Please enter Product discount");
      return;
    }

    if (isIconFileChanged === true) {
      if (
        mediaIconFile === null ||
        mediaIconFile === undefined ||
        mediaIconFile === "" ||
        mediaIconFile === " "
      ) {
        if (
          selectedProductData.productImage === null ||
          selectedProductData.productImage === undefined ||
          selectedProductData.productImage === ""
        ) {
          message.warning("Please upload Product Image ");
        } else {
          message.warning("Please upload Product Image or discard Changes");
        }
        return;
      }
    }

    let formValues = {};

    if (isIconFileChanged === true) {
      formValues = {
        name: name,
        price: price,
        category: category,
        is_discount: isDiscount,
        productImage: mediaIconFile,
        discount: discount,
      };
    } else {
      formValues = {
        name: name,
        price: price,
        category: category,
        is_discount: isDiscount,
        // productImage: mediaIconFile,
        discount: discount,
      };
    }

    //  console.log("formValues", formValues);

    try {
      setLoading(true);
      await getUpdateProduct(formValues, productId);
      setLoading(false);
      message.success("Product Updated");
      props.setEditModalShow(false);
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
              value={name}
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
              value={price}
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
              value={category}
              defaultValue={category}
              onChange={(value) => setCategory(value)}
            >
              <Option value={"electronics"}>Electronics</Option>
              <Option value={"vegetable"}>Vegetable</Option>
              <Option value={"phone"}>Phone</Option>
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
              value={isDiscount}
              defaultValue={isDiscount}
              onChange={(value) => setIsDiscount(value)}
            >
              <Option value={"true"}>Yes</Option>
              <Option value={"false"}>No</Option>
            </Select>
          </div>
          {isDiscount === undefined ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      {/* is dicount ends*/}
      {/* discount starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Discount %<span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="number"
              min={1}
              max={100}
              placeholder="Discount %"
              value={discount}
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
      {/* discount ends*/}
      {/* image starts*/}
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Icon Upload
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          {isIconFileUplaoded === false ? (
            <div>
              {fileIconSrc === null ||
              fileIconSrc === undefined ||
              fileIconSrc === " " ||
              fileIconSrc === "" ? (
                <label>
                  <Input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    //value={fileIconSrc}
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
              ) : (
                <div>
                  <label>
                    <Input
                      type="file"
                      style={{ display: "none" }}
                      accept="image/*"
                      //value={fileIconSrc}
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
                  <span style={{ marginLeft: "30px" }}>
                    <Button
                      type="danger"
                      onClick={() => discardIconMediaChange()}
                    >
                      Discard Media Change
                    </Button>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div style={{ maxWidth: "100%" }}>
              {showChangeMediaIconButton === true ? (
                <div style={{ marginBottom: "20px", textAlign: "right" }}>
                  <Button type="danger" onClick={() => reuploadIconMedia()}>
                    Change Media
                  </Button>
                </div>
              ) : null}
              {isIconFileChanged === true ? (
                <div style={{ marginTop: "30px", textAlign: "right" }}>
                  <Button
                    type="danger"
                    onClick={() => discardIconMediaChange()}
                  >
                    Discard Media Change
                  </Button>
                </div>
              ) : null}
              <div>
                {fileIconSrc === null ||
                fileIconSrc === "" ||
                fileIconSrc === undefined ? null : (
                  <img
                    src={fileIconSrc}
                    alt="icon"
                    style={{ maxWidth: "60%" }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Image ends*/}

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Update Product
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
