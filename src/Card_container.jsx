import React from "react";
import Card from "./Card";
import Img1 from "./Images/ducati.png";
import Img2 from "./Images/DesertX.png";
import Img3 from "./Images/Streetfighter-V4S.png";
import Img4 from "./Images/Hypermotard-950.png";

function Card_contaier({ cart, setCart }) {
  const product_details = [
    {
      img: Img1,
      sale: true,
      productName: "Ducati Panigale V4R",
      rating: 5,
      price: " ₹69 lakhs",
    },
    {
      img: Img2,
      sale: true,
      productName: "Desert X",
      rating: 3,
      price: " ₹18 lakhs",
    },
    {
      img: Img3,
      sale: false,
      productName: "Streetfigher V4S",
      rating: 5,
      price: " ₹22 lakhs",
    },
    {
      img: Img4,
      sale: false,
      productName: "HyperMotorad",
      rating: 4,
      price: " ₹15 lakhs",
    },
  ];
  return (
    <div>
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {product_details.map((data, index) => (
            <Card setCart={setCart} cart={cart} data={product_details[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card_contaier;
