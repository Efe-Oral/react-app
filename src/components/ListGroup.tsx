import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["Berlin", "Dresden", "Würzburg"];
  items = [];

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

  return (
    <Fragment>
      <h1> List </h1>
      {items.length === 0 ? <p> No items found </p> : null} //getMessage()
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
