import React from "react";
import { Result, Button } from "antd";
import history from "../history";

const NotFound = (props) => {
  const backToHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <Result
        status={props.status ? props.status : "404"}
        title={props.title ? props.title : "404"}
        subTitle={props.subTitle}
        extra={
          <Button onClick={backToHome} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
