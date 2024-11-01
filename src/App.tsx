import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Berlin", "Dresden", "Würzburg", "Passau"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {" "}
      <ListGroup
        itemsets={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
  );
}

export default App;
