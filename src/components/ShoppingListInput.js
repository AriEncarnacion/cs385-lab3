import * as React from "react";

// This component renders an <input> and a <button>

export function ShoppingListInput(props) {
  // onChange handler example:
  const [input, setInput] = React.useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={input} />
      <button
        onClick={function(e) {
          props.onAdd(input);
          setInput("");
        }}
      />
    </div>
  );
}
