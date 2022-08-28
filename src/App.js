import CartCard from "./components/CartCard";

function App() {
  return (
    <div className="App text-3xl ml-5 mt-5">
      <p className="font-bold text-5xl mb-8">Ecommerce App</p>
      <div className="flex flex-wrap gap-4">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
}

export default App;
