import React from "react";
import { useStateValue } from "./stateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className="bg-white w-2/12 ml-5 px-2 py-3 rounded-md">
            <h1 className="text-3xl font-thin mb-4">Price Details</h1>
            <div className="flex w-full place-content-between">
                <span>Price</span>
                <span>{getBasketTotal(basket)}</span>
            </div>
            <div className="flex w-full place-content-between">
                <span>Discount Price</span>
                <span>{getBasketTotal(basket) / 10}</span>
            </div>
            <div className="flex w-full place-content-between">
                <span>Delivery Charge</span>
                <span>{50}</span>
            </div>
            <hr className="border-gray-400 mt-4" />
            <div className="flex w-full place-content-between">
                <span>Total</span>
                <span>
                    {getBasketTotal(basket) + getBasketTotal(basket) / 10 + 50}
                </span>
            </div>
        </div>
    );
}

export default Subtotal;
