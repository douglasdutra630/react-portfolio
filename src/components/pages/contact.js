import React from "react";

import contactPicture from "../../../static/assets/images/contact/vanilla.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <h2>Contact Info</h2>
        <p>Name: Douglas Dutra (BrUch)</p>
        <p>Email: douglas.dutra630@gmail.com</p>
        <p>Phone Number: 1-801-382-5633</p>
        <p>LinkedIn: blah</p>
        <p>GitHub: Blah</p>
      </div>
    </div>
  );
}
