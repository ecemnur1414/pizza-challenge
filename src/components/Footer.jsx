import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h2 className={styles.footerTitle}>Lezzetli Pizza</h2>
            <div className={styles.footerContactItem}>
              <FaMapMarkerAlt className={styles.footerIcon} />
              <p>123 Pizza Caddesi, Pizzaville</p>
            </div>
            <div className={styles.footerContactItem}>
              <FaEnvelope className={styles.footerIcon} />
              <p>iletisim@lezzetlipizza.com</p>
            </div>
            <div className={styles.footerContactItem}>
              <FaPhone className={styles.footerIcon} />
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className={styles.footerMenu}>
            <h3 className={styles.footerTitle}>Sıcak Menü</h3>
            <ul>
              <li>Margarita</li>
              <li>Pepperoni</li>
              <li>BBQ Tavuk</li>
              <li>Havai</li>
              <li>Vejetaryen</li>
              <li>Bol Etli</li>
            </ul>
          </div>

          <div className={styles.footerInstagram}>
            <h3 className={styles.footerTitle}>Instagram</h3>
            <div className={styles.footerInstagramGrid}>
              <img src="https://media.istockphoto.com/id/1442417585/tr/foto%C4%9Fraf/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg" alt="Instagram 1" />
              <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="Instagram 2" />
              <img src="https://accademiastudioitalia.com/wp-content/uploads/2023/07/pizza.jpg" alt="Instagram 3" />
              <img src="https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg" alt="Instagram 4" />
              <img src="https://img.ye-mek.net/img/f1/karisik-pizza.jpg" alt="Instagram 5" />
              <img src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/napoli-pizza_.webp" alt="Instagram 6" />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Lezzetli Pizza. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
