import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

interface Props {
  itemsets: string[];
  heading: string;
}
function ListGroup(props: Props) {
  //State hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return props.itemsets.length === 0 ? <p> No items found </p> : null;
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
      <h1> {props.heading} </h1>
      {props.itemsets.length === 0 ? <p> No items found </p> : null}
      <ul className="list-group">
        {props.itemsets.map((item, index) => (
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
