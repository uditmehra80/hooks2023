import React, { useContext } from "react";
import { ThemeContext } from "../UseContext";

function FunctionContext(props) {
  const darkTheme = useContext(ThemeContext);

  return <div>{darkTheme ? "DARK" : "LIGHT"}</div>;
}

export default FunctionContext;
