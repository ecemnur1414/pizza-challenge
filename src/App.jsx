import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import SiparisKontrolFormu from "./components/SiparisKontrolFormu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Onay from "./components/Onay";

function App() {
  const [count, setCount] = useState(0);
  const [pizzaBoyut, setPizzaBoyut] = useState("");
  const [hamurKalinligi, setHamurKalinligi] = useState("");
  const [ekMalzeme, setEkmalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [musteriAdi, setMusteriAdi] = useState("");
  const [toplamFiyat, setToplamFiyat] = useState(85.5);
  const [pizzaAdedi, setPizzaAdedi] = useState(1);
  const [extraTutari, setExtraTutari] = useState(0);

  function siparisFormundanVeriAL(
    pizzaBoyut,
    hamurKalinligi,
    ekMalzeme,
    siparisNotu,
    musteriAdi,
    toplamFiyat,
    pizzaAdedi,
    extraTutari
  ) {
    setPizzaAdedi(pizzaAdedi);
    setHamurKalinligi(hamurKalinligi);
    setPizzaBoyut(pizzaBoyut);
    setEkmalzeme(ekMalzeme);
    setSiparisNotu(siparisNotu);
    setMusteriAdi(musteriAdi);
    setToplamFiyat(toplamFiyat);
    setExtraTutari(extraTutari);
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Banner />
        </Route>
        <Route
          path="/sipariskontrolformu"
          render={(props) => (
            <SiparisKontrolFormu {...props} siparisFormundanVeriAL={siparisFormundanVeriAL} />
          )}

        ></Route>

<Route
          path="/onay"
          render={(props) => (
            <Onay
              {...props}
              pizzaBoyut={pizzaBoyut}
              hamurKalinligi={hamurKalinligi}
              ekMalzeme={ekMalzeme}
              siparisNotu={siparisNotu}
              musteriAdi={musteriAdi}
              toplamFiyat={toplamFiyat}
              pizzaAdedi={pizzaAdedi}
              extraTutari={extraTutari}
            />
          )}
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
