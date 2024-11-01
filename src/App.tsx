import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Berlin", "Dresden", "Würzburg", "Passau"];
  return (
    <div>
      {" "}
      <ListGroup itemsets={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;
