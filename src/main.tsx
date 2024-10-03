import './styles/reset.css'
import './styles/global.css'
import styles from './index.module.css'

import { createRoot } from 'react-dom/client';
import ProductCard from './components/ProductCard/ProductCard';
import imageProductMobile from './assets/images/image-product-mobile.jpg';
import imageProductDesktop from './assets/images/image-product-desktop.jpg';

const product = {
  name: 'Gabrielle Essence Eau De Parfum',
  category: 'Perfume',
  image: {
    mobile: imageProductMobile,
    desktop: imageProductDesktop,
  },
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: 149.99,
  originalPrice: 169.99,
};

export function App() {
  return (
    <main className={styles.appContainer}>
      <ProductCard product={product} />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
