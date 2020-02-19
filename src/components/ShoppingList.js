import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";
// import ReactDOM from "react-dom";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [items, setItems] = React.useState(["turkey"]);
  const listItems = items.map(listItem => <ShoppingListItem name={listItem} />);

  return (
    <div>
      <ul>{listItems}</ul>
      <ShoppingListInput
        onAdd={function(item) {
          const temp = items;
          setItems([...temp, item]);
        }}
      />
    </div>
  );
}
