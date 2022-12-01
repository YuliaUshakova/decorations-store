import AllCategories from "./Components/Filter/AllCategories";
import Cart from "./Components/Cart/Cart";
import Articles from "./Components/Articles/Articles";

function App() {
  return (<div className="App">
    <div className="sticky">
      <AllCategories/>   
      <Cart/>    
    </div>
        <Articles/>
        </div>
  );
}

export default App;
