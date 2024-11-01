import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

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
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;
