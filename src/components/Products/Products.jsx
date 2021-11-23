import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Zapato', description: 'Zapatos deportivos.', price: '$5', image: 'https://i.pinimg.com/564x/80/72/bf/8072bfb439fb811a8c8a112dc485cb7f.jpg'},
//     { id: 2, name: 'Laptop', description: 'Laptop gamer.', price: '$50', image: 'https://i.pinimg.com/564x/bd/a2/90/bda290318816d59a338c97bb6beaa203.jpg'},

// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return ( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent ='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    ); 
}

export default Products;