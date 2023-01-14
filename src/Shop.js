import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Shop = () => {

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const itemsArray = await data.json();
    console.log(itemsArray)
    setItems(itemsArray);
  }
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => (
        <h3 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h3>
      ))}
    </div>
  );
};

export default Shop;