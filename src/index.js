import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { fontSize: "48px", color: "red", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "https://i.ibb.co/JzR9bqt/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "https://i.ibb.co/JyR9L8P/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "https://i.ibb.co/YP3L2HY/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "https://i.ibb.co/7WXYjgv/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "https://i.ibb.co/p3rQD7H/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "https://i.ibb.co/Y0CZgW6/prosciutto.jpg",
      soldOut: false,
    },
  ];

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            {" "}
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, organic and finger licking delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* NOTE: Sometimes we want to pass a unique key to react fragment, then we write the complete tag <React.fragment key="xx">  */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="https://i.ibb.co/YP3L2HY/spinaci.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="https://i.ibb.co/7WXYjgv/funghi.jpg"
        soldOut={false}
      /> */}
      {/* <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* <img src="03-pizza-menu/pizzas/spinaci.jpg" alt="spinaci pizza" /> */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} border="0"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>Ingredients: {pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 12;
  const closingHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closingHour;
  console.log(isOpen);

  // isOpen ? alert("Hi! We're Open") : alert("Sorry we're closed");

  // return React.createElement("footer", null, "Hi, we're currently open");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently open ! */}

      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closingHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closingHour }) {
  return (
    <div className="order">
      <p> We're open until {closingHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
