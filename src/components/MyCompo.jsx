import React, { useEffect, useState } from "react";

function MyCompo({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updateing ITEMS");
  }, [getItems]);

  return items.map((item) => <h4 key={item}>{item}</h4>);
}

export default MyCompo;
