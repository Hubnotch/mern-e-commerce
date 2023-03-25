import { Link } from "react-router-dom"
import data from "./data"
function App() {
  return (
    <div>
      <header>
        <a href="/">ribsmarket</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div>
          {data.products.map(product => (
            <div key={product.brand}></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
