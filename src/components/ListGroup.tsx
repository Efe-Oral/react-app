import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = ["Berlin", "Dresden", "Würzburg", "Passau"];
  //State hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p> No items found </p> : null;
  };
  /* Alternative way of cheking "No items found"
  if (items.length === 0)
    return (
      <Fragment>
        <h1>
          <p>No items found </p>
        </h1>
      </Fragment>
    );
  */

  const handleClick = (event: MouseEvent) => console.log(event);

  //{items.length === 0 ? <p> No items found </p> : null} = getMessage()
  return (
    <Fragment>
      <h1> List </h1>
      {items.length === 0 ? <p> No items found </p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group- item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
