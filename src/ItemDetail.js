import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${id}`);
    const itemData = await fetchItem.json(); 
    console.log(itemData)
    setItem(itemData);
  }
  useEffect(() => {
    fetchItem();
  }, []);
  
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title}/>
    </div>
  );
};

export default Item;