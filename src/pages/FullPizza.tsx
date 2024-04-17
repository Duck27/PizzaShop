import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import pizzaData from "../assets/pizzas.json";

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://65ca29a23b05d29307dfd825.mockapi.io/items/" + id
        );

        setPizza(data);
      } catch (error) {
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }

  const imgURLFromJson: string = pizzaData[id].imageUrl;
  console.log(imgURLFromJson);

  return (
    <div className="container">
      <img src={imgURLFromJson} alt={"pizza image"} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} руб</h4>
    </div>
  );
};

export default FullPizza;
