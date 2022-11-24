import AllCategories from "./Components/Filter/AllCategories";
import Cart from "./Components/Cart/Cart";
import Articles from "./Components/Articles/Articles";

function App() {
  return (<div className="App">
    <div className="block">
      <AllCategories/>
      <Cart/>
      <div className="block">
        <Articles/>
      </div>

    </div>
      
    </div>
  );
}

export default App;
