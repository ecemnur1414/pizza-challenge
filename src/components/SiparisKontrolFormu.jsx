import { useState } from "react";

export default function SiparisKontrolFormu() {
  const [pizzaAdi, setPizzaAdi] = useState("Position Absloute Acı Pizza");
  const [pizzaFiyati, setPizzaFiyati] = useState(85.5);
  const [pizzaAciklama, setPizzaAciklama] = useState(
    "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir."
  );
  const [pizzaBoyut, setPizzaBoyut] = useState("");
  const [hamurKalinligi, SetHamurKalinligi] = useState("");
  const [ekMalzeme, setEkmalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [toplamFiyat, setToplamFiyat] = useState(pizzaFiyati);
  const [musteriAdi, setMusteriAdi] = useState("");
 const[ekMalzemeDisable,setEkMalzemeDisable]=useState(false);

  const ekMalzemeler= [
    "Pepperoni",
    "Sosis",
    "Izgara Tavuk",
    "Soğan",
    "Mısır",
    "Salam",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalapeno",
    "Sucuk"
]

function malzemeKaydet(e)
{
    const{value,checked}=e.target;
    if(checked && ekMalzeme.length<10){

        setEkmalzeme((eskiMalzemeler)=>[...eskiMalzemeler,value])

    }
    else if(!checked)
    {
     setEkmalzeme(ekMalzeme.filter((malzeme)=>malzeme !== value))
    }
    else if(ekMalzeme.length >= 10)
    {
        setEkMalzemeDisable(true)
        alert("Maximum Ek Malzeme Sınırına Ulaştınız")
    }
}


function pizzaboyutu(e)
{
    const {value}=e.target;
    setPizzaBoyut (value)

}





function siparisNotlandirma(e)
{
 setSiparisNotu(e.target.value)
}

console.log(siparisNotu)






  return (
    <div>
      <h1>{pizzaAdi}</h1>
      <span>{pizzaFiyati}₺</span> <span>4.9</span> <span>(500)</span>
      <p>{pizzaAciklama}</p>
      <p>Pizza Boyutunu Seç</p>
      <label className="size-label" htmlFor="kucuk">
        <input onClick={pizzaboyutu} name="size" value="Küçük" type="radio" id="kucuk" />
        Küçük
      </label>
      <label htmlFor="orta">
        <input onClick={pizzaboyutu} name="size" value="Orta" type="radio" id="orta" />
        Orta
      </label>
      <label htmlFor="buyuk">
        <input onClick={pizzaboyutu} name="size" value="Büyük" type="radio" id="buyuk" />
        Büyük
      </label>
      <div>
        <div>
        <label for="hamurlar">Hamur Seç:</label>
        </div>
      
      <select name="hamurlar" id="hamurlar">
        <option value="extra-ince">Extra İnce</option>
        <option value="ince">İnce</option>
        <option value="orta">Orta</option>
        <option value="Kalin">Kalın</option>
       
      </select>

      </div>
      <h2>Ek Malzemeler</h2>
      <p>En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
      <div>
        {ekMalzemeler.map((value,key)=>
        (
        <label key={value}>
          
          <input onClick={malzemeKaydet}  type="checkbox" value={value} 
          
          disabled={ekMalzemeDisable}
          />
          {value}
        </label>


        )
        
        )}
      </div>

      <div>
        <h2>Sipariş Notunu Yazınız</h2>
        <label htmlFor="notu">

        <textarea onChange={siparisNotlandirma} name="siparisNotu" id="notu"></textarea>
        </label>
      </div>
     
    </div>
  );
}
