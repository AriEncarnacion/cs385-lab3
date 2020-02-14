import * as React from "react";

// This component renders an <input> and a <button>

export function ShoppingListInput(props) {
  // onChange handler example:
  // const handleChange = (e) => {
  //   setState(e.target.value);
  // }
  const [inputs] = React.useState("");

  return (
    <div>
      <input />
      <button />
    </div>
  );
}
