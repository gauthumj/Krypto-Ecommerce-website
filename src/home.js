import React, { useEffect, useState } from "react";
import Header from "./header";
import Product from "./product";
import axios from "axios";
import { useStateValue } from "./stateProvider";
import { Link } from "react-router-dom";

const Home = () => {
    const { user } = useStateValue();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className=" min-h-screen  bg-slate-300">
            <Header />

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.amount}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
