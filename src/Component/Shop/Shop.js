import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        const storedCart = getStoredCart();
        console.log(storedCart)
    },[])

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];//array copy korte ... use krte hoi
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={"/orders"}>
                        <button>
                            Review Order
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;