import { FC } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import { FaCartShopping } from "react-icons/fa6";
import './ProductCard.styles.scss';

export interface ProductCardProps {
    imageUrl: string;
    imageText?: string;
    description: string;
    price: number;
    stars: number;
    discount?: number;
}

const ProductCard: FC<ProductCardProps> = ({
    imageUrl,
    imageText,
    description,
    price,
    discount
}) => {
    return <div className="product-card">
        <img 
            className="product-card-img" 
            src={imageUrl} 
            alt={imageText} />
        <label>{description}</label>
        <div className="product-card-footer">
            <p>
                <label
                    className="product-card-price">
                        $MXN{price}
                </label>
                <label
                    className="product-card-discount">
                        -{discount}%
                </label>
            </p>
            <ButtonLink 
                href=""
                className="dark"
                iconAfter={() => <FaCartShopping />}
            />
        </div>
    </div>   
}

export { ProductCard };
