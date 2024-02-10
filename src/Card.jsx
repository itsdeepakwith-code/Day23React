import React from "react";
import { useState } from "react";

function Card({ data, cart, setCart }) {
  const [btnClick, setBtnclick] = useState(true);

  return (
    <div>
      <div class="col mb-5">
        <div class="card h-100">
          <img class="card-img-top" src={data.img} alt="..." />
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{data.productName}</h5>

              <div class="d-flex justify-content-center small text-warning mb-2">
                {[...Array(Math.min(data.rating, 5))].map((_, index) => (
                  <div className="bi-star-fill"></div>
                ))}
              </div>
              <span
                style={{
                  marginRight: "5px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >{data.price}
              </span>
            </div>
          </div>

          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              {btnClick ? (
                <a
                  class="btn btn-outline-light bg-secondary mt-auto"
                  onClick={() => {
                    setBtnclick(false);
                    setCart(cart + 1);
                  }}
                >
                  Add to cart
                </a>
              ) : (
                <a
                  class="btn btn-outline-light bg-danger mt-auto"
                  onClick={() => {
                    setBtnclick(true);
                    setCart(cart - 1);
                  }}
                >
                  Remove from cart
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
