import React from "react";
import { useStateValue } from "./stateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{}, dispatch] = useStateValue();
    return (
        <div className="shadow-md mt-2">
            <div className="flex">
                <img className="w-20 h-20" src={image} alt={title} />
                <div className="ml-4 w-2/3">
                    <h4 className="text-sm">{title}</h4>
                    <p className=" text-sm">₹{price}</p>
                </div>
                <div className="flex justify-between">
                    <button
                        className="text-sm"
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_FROM_BASKET",
                                id: id,
                            })
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProduct;
