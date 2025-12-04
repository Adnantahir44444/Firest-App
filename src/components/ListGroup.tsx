// import { Fragment } from "react";
// import type { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  // (item: string) => void;
  onSelectItem: (item: string) => void;
}

// {items:[], heading:string} => Destructuring with type annotation

function ListGroup({items, heading, onSelectItem}: Props) {

  // let selectedIndex = 0;  //the normal react varuable does not work for UI update so react provide us hook like useState to manage such variable
  //Destructuring array
  // const arr = useState(-1);
  //  arr[0]; //current value
  // arr[1]; //function to update value

  //Hook is function that allow us to build in feature from React

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  //   items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found.</p>
  //       </>
  //     );

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found.</p> : null;
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {/* {props.items.length === 0 ? <p>No items found.</p> : null} */}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
