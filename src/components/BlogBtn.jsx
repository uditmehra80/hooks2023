import React from "react";
import { UseBlogView } from "./context";

function BlogBtn(props) {
  const { loading, ClickFunction, PassValue } = UseBlogView();

  return (
    <div>
      <button onClick={ClickFunction}>SUBMIT</button>
      Loading..
      <b>{loading ? "true" : "false"}</b>
      <br />
      <button
        onClick={() => PassValue("hey this value sending from BlogBtn.jsx")}
      >
        Pass Value
      </button>
    </div>
  );
}

export default BlogBtn;
