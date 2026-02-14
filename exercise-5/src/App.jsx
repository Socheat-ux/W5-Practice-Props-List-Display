import Cart from "./components/Cart";
import { IPHONE_SERIES } from "./data";

function App() {
  return (
    <>
      <header>
        <h1>Welcome to our shop!</h1>
        <p>IPHONE 17 SERIES</p>
      </header>

      <main>
        <section className="cart-category">
          <ul className="cart">
            {IPHONE_SERIES.map((cart) => <Cart name={cart.name} color={cart.color} image={cart.image} />)}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
