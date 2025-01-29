import { HiStopCircle } from "react-icons/hi2"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./banner.css";

export default function Banner()
{
    const history=useHistory()

    function changer()
    {
        history.push("/sipariskontrolformu");
    }




    return(
        <div className="banner-relative-div">
            <div className="banner-title">
                <h2>Teknolojik Yemekler</h2>
                <h1>KOD ACIKTIRIR</h1>
                <h1>PİZZA DOYURUR</h1>
            </div>
            <button onClick={changer} className="banner-button">Acıktım</button>
            <img className="banner-img" src="./images/home-banner.png" alt="" />
        </div>
    )
}