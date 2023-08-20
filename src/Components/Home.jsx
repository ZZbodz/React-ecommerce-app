import React from "react";
import Product from "./Product";

function Home() {
  const products = [
    {
      id: "1",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
    {
      id: "2",
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 239.0,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
    {
      id: "3",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
    {
      id: "4",
      title:
        "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SX425_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
    {
      id: "5",
      title:
        "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
    {
      id: "6",
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x1440",
      price: 1094.98,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
      quantity: 1, // Set the initial quantity for this product
    },
  ];

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_image">
          <img
            className="home_image"
            src=""
            alt=""
          />
        </div>

        <div className="home_row">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
