import React, { useContext, useState } from "react";

const BlogViewContext = React.createContext();

export function UseBlogView() {
  return useContext(BlogViewContext);
}

export function BlogViewProvider({ children }) {
  const [loading, setLoading] = useState(false);

  function ClickFunction() {
    setLoading((prev) => !prev);
  }

  const PassValue = (value) => {
    console.log(value);
  };

  return (
    <BlogViewContext.Provider
      value={{
        loading,
        setLoading,
        ClickFunction,
        PassValue,
      }}
    >
      {children}
    </BlogViewContext.Provider>
  );
}
