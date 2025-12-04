// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // let items = ["New  York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Alert children="Hello World!" />
      <Alert>Hello <span>World</span></Alert>
    </div>
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
  );
}
export default App;
