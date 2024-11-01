import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const items = ["Berlin", "Dresden", "Würzburg", "Passau"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    /*
    <div>
      {" "}
      <ListGroup
        itemsets={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
    */

    /*
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
  */
    <div>
      <Alert>My alert</Alert>
      <Button color="danger" onClick={() => console.log("click")}>
        Click
      </Button>
    </div>
  );
}

export default App;
