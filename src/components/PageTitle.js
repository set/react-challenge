import React from "react";

export default function PageTitle (props) {
  return (
    <nav className="page-title">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </nav>
  );
}