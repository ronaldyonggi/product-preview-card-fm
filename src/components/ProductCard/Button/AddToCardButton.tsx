import cartIcon from '../../../assets/images/icon-cart.svg';
import styles from './AddToCardButton.module.css';

export default function AddToCardButton() {
  return (
    <button className={styles.container}>
      <img src={cartIcon} alt='Cart icon' className={styles.img} />
      <p className={styles.textContainer}>Add to cart</p>
    </button>
  );
}
