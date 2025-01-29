import { useState } from "react";
import styles from "./SiparisKontrol.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"; // Axios'u unutma!

export default function SiparisKontrolFormu(props) {
  const { siparisFormundanVeriAL } = props;
  const [pizzaBoyut, setPizzaBoyut] = useState("");
  const [hamurKalinligi, setHamurKalinligi] = useState("");
  const [ekMalzeme, setEkmalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [musteriAdi, setMusteriAdi] = useState("");
  const [pizzaAdedi, setPizzaAdedi] = useState(1);
  const [extraTutari, setExtraTutari] = useState(0);
  const [toplamFiyat, setToplamFiyat] = useState(85.5);
  const history = useHistory();

  const ekMalzemeler = [
    "Pepperoni", "Sosis", "Izgara Tavuk", "Soğan", "Mısır", "Salam", "Sarımsak", "Biber", "Ananas", "Kabak", "Kanada Jambonu", "Domates", "Jalapeno", "Sucuk"
  ];

  // Malzeme ekleme / çıkarma
  const malzemeKaydet = (e) => {
    const { value, checked } = e.target;
    if (checked && ekMalzeme.length < 10) {
      setEkmalzeme([...ekMalzeme, value]);
      setExtraTutari(prev => prev + (5 * pizzaAdedi)); // Pizza adediyle çarpılıyor
    } else {
      setEkmalzeme(ekMalzeme.filter(malzeme => malzeme !== value));
      setExtraTutari(prev => prev - (5 * pizzaAdedi)); // Pizza adediyle çarpılıyor
    }
  };

  // Pizza adetini arttır
  const pizzaArttirici = () => {
    setPizzaAdedi(prev => {
      const yeniAdet = prev + 1;
      setToplamFiyat(85.5 * yeniAdet + ekMalzeme.length * 5 * yeniAdet);
      setExtraTutari(ekMalzeme.length * 5 * yeniAdet); // Ekstra malzeme fiyatı, pizza adedine bağlı artıyor
      return yeniAdet;
    });
  };

  // Pizza adetini azalt
  const pizzaAzaltici = () => {
    if (pizzaAdedi > 1) {
      setPizzaAdedi(prev => {
        const yeniAdet = prev - 1;
        setToplamFiyat(85.5 * yeniAdet + ekMalzeme.length * 5 * yeniAdet);
        setExtraTutari(ekMalzeme.length * 5 * yeniAdet);
        return yeniAdet;
      });
    }
  };

  // Form gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      pizzaBoyut,
      hamurKalinligi,
      pizzaAdedi,
      selectedExtras: ekMalzeme,
      orderNote: siparisNotu,
      customerName: musteriAdi,
      totalPrice: toplamFiyat,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", orderData);
      console.log("Order Summary:", response.data);

      // Sipariş başarıyla gönderildiğinde yönlendirme
      formYolla();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  function formYolla() {
    siparisFormundanVeriAL(
      pizzaBoyut,
      hamurKalinligi,
      ekMalzeme,
      siparisNotu,
      musteriAdi,
      toplamFiyat,
      pizzaAdedi,
      extraTutari
    );

    history.push("/onay");
  }

  const isButtonDisabled = !(pizzaBoyut && hamurKalinligi && musteriAdi);

  return (
    <div className={styles.siparisFormu}>
      <h1>Position Absloute Acı Pizza</h1>
      <span>85.5₺</span> <span>4.9</span> <span>(500)</span>
      <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.</p>

      <form onSubmit={handleSubmit}>
        <h2>Pizza Boyutunu Seç <span className={styles.zorunlu}>*</span></h2>
        {["Küçük", "Orta", "Büyük"].map(size => (
          <label key={size}>
            <input type="radio" name="size" value={size} onChange={(e) => setPizzaBoyut(e.target.value)} /> {size}
          </label>
        ))}

        <h2>Hamur Seç <span className={styles.zorunlu}>*</span></h2>
        <select onChange={(e) => setHamurKalinligi(e.target.value)}>
          <option value="">Seçiniz</option>
          <option value="Extra İnce">Extra İnce</option>
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select>

        <div className={styles.flexCheckbox}>
          <h2>Ek Malzemeler (En Fazla 10 Malzeme, 5₺)</h2>
          {ekMalzemeler.map(malzeme => (
            <label key={malzeme}>
              <input
                type="checkbox"
                value={malzeme}
                onChange={malzemeKaydet}
                checked={ekMalzeme.includes(malzeme)}
                disabled={ekMalzeme.length >= 10 && !ekMalzeme.includes(malzeme)}
              />
              {malzeme}
            </label>
          ))}
        </div>

        <h2>Sipariş Notu</h2>
        <textarea onChange={(e) => setSiparisNotu(e.target.value)}></textarea>

        <h2>Teslim Alacak Kişi <span className={styles.zorunlu}>*</span></h2>
        <input type="text" onChange={(e) => setMusteriAdi(e.target.value)} />

        <h2>Ekstra Tutarı: {extraTutari}₺</h2>
        <h2>Toplam Tutar: {toplamFiyat}₺</h2>

        <div>
          <button type="button" onClick={pizzaAzaltici}>-</button>
          <span>{pizzaAdedi}</span>
          <button type="button" onClick={pizzaArttirici}>+</button>
        </div>

        <button 
          type="submit" 
          disabled={isButtonDisabled} 
          className={isButtonDisabled ? styles.disabled : styles.active}>
          Siparişi Tamamla
        </button>
      </form>
    </div>
  );
}
