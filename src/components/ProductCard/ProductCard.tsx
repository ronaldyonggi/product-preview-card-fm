import { useEffect, useState } from 'react';
import { IProduct } from '../../types';
import styles from './ProductCard.module.css';
import AddToCardButton from './Button/AddToCardButton';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>

      <img
        src={width <= 375 ? product.image.mobile : product.image.desktop}
        alt='Image of product'
        className={styles.image}
      />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceContainer}>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.originalPrice}>${product.originalPrice}</p>
        </div>
        <div className={styles.buttonContainer}>
          <AddToCardButton />
        </div>
      </div>
    </div>
  );
}
