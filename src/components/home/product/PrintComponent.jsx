import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return <div>CONTENT TO PRINT</div>;
  }
}

class PrintComponent extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => this.props.trigerItem}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default PrintComponent;
