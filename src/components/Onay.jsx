import "./onay.css"

export default function Onay(props) {
    const {
      pizzaBoyut,
      hamurKalinligi,
      ekMalzeme,
      siparisNotu,
      musteriAdi,
      toplamFiyat,
      pizzaAdedi,
      extraTutari
    } = props;
  
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:"#ce2829",
        height: "100vh",
        textAlign: "center"
        
      }}>
        <h2>Sipariş Onay Sayfası</h2>
        <p><strong>Müşteri Adı:</strong> {musteriAdi}</p>
        <p><strong>Pizza Boyutu:</strong> {pizzaBoyut}</p>
        <p><strong>Hamur Kalınlığı:</strong> {hamurKalinligi}</p>
        <p><strong>Ek Malzemeler:</strong> {ekMalzeme.length > 0 ? ekMalzeme.join(", ") : "Yok"}</p>
        <p><strong>Sipariş Notu:</strong> {siparisNotu || "Yok"}</p>
        <p><strong>Pizza Adedi:</strong> {pizzaAdedi}</p>
        <p><strong>Ekstra Tutar:</strong> {extraTutari.toFixed(2)} TL</p>
        <p><strong>Toplam Fiyat:</strong> {toplamFiyat+extraTutari} TL</p>
        
        <h3 style={{ marginTop: "20px", color: "green" }}>Siparişiniz başarıyla alındı! 🎉</h3>
      </div>
    );
  }
  