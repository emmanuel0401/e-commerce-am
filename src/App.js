import React, { useState, useEffect } from 'react';

//Dashboard
import { commerce } from './lib/commerce';

//Productos y Barra navegadora
import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
      
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quanitity) => {
        const item = await commerce.cart.add(productId, quanitity);

        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);
    // console.log(products);

    return (
        <div>
            <Navbar />
            {/* <Navbar totalItems={cart.totalItems} /> */}
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default App;