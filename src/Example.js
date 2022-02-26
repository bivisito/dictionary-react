import React from "react";
import "./Example.css";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
