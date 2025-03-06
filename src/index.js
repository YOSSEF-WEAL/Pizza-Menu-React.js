import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App()
{
    // const x = 'jones';
    return <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div >;
};


function Header()
{
    // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }

    return <header className='header'>
        <h1 >Fast React Pizza Co.</h1>
    </header>;

}

function Menu()
{

    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;



    return <main className='menu'>
        <h2>Our menu</h2>

        {numPizzas > 0 ?
            <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                </p>
                <ul className='pizzas'>
                    {pizzas.map(piza =>
                        <Pizza pizzaOjb={piza} key={piza.name} />)}

                </ul>  </> : <p>We're still working on our menu. Plese come back later:)</p>}



        {/* <Pizza
            name="Pizza Spinaci"
            ingredients='Tomato, mozarella, spinach, and ricotta cheese'
            photoName='pizzas/spinaci.jpg'
            price={10} />
        <Pizza
            name="Pizza Funghi"
            ingredients='Tomato, mozarella, mushrooms, and onion'
            photoName='pizzas/funghi.jpg'
            price={12} /> */}

    </main>;
}

function Pizza({ pizzaOjb })
{

    // if (pizzaOjb.soldOut) return null;

    return (<li className={`pizza ${pizzaOjb.soldOut ? "sold-out" : ""}`} >
        <img src={pizzaOjb.photoName} alt={pizzaOjb.name} />
        <div>
            <h3>{pizzaOjb.name}</h3>
            <p>{pizzaOjb.ingredients}</p>

            {/* {pizzaOjb.soldOut ? (<span>SOLD OUT</span>) : (pizzaOjb.price + "$")} */}

            <span>{pizzaOjb.soldOut ? "SOLD OUT" : pizzaOjb.price + 4 + '$'}</span>
        </div>
    </li >);
};

function Footer()
{

    // return React.createElement('footer', null, "We're Current Open")
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (hour >= openHour && hour <= closeHour)
    //     console.log("We're Currenty Open!");
    // else
    //     console.log("Sorry We're Closed");

    // return <footer className='footer'>
    //     {new Date().toLocaleTimeString()}
    //     . We're Current Open</footer>;

    // if (!isOpen) return <p>We're Closed Now</p>;

    return <footer className='footer'>
        {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : (<p>We're not open until unit</p>)}
        <button className='btn'>Order Now</button>
    </footer >;

}

function Order({ closeHour, openHour })
{
    return <div className='order'>
        <p>We're open from {openHour} unit {closeHour}:00. Come Visit us or order online.</p>
    </div>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);

// React before 18
// React.render(<App />,document.getElementById("root"));