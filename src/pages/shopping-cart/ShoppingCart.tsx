import { useContext } from "react";
import { ShoppingCartContext } from "../../providers/ShoppingCartContext";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";

import './ShoppingCart.styles.scss';

const ShoppingCartPage = () => {
    const { productList } = useContext(ShoppingCartContext);

    return <div className="shopping-cart-page">
        <h1>Carrito</h1>
        <div className="shopping-cart-page-list">
            {
                productList.map((product: ProductCardProps) => {
                    return <div className="shopping-cart-page-product">
                        <div className="shopping-cart-page-product-image">
                            <img src={product.imagesUrl[0]} alt="" />
                        </div>
                        <div className="shopping-cart-page-product-desc">
                            <div>
                                {product.description}
                            </div>
                            <div>
                                CANTIDAD: {product.quantity}
                            </div>
                        </div>
                        <div className="shopping-cart-page-product-price">
                            ${product.price}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
};

export { ShoppingCartPage };
