import React from "react";
import { useLocation } from "react-router-dom";

export default function DonationCenters() {
    const { centers } = useLocation().state
    // const centers = [
    //     { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il",src:"/service_10.svg" },
    //     { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il",src:"/service_11.svg" },
    //     { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il",src:"/service_25.svg" }
    //     ,{ name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il",src:"/service_32.svg" }
    //     ,{ name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il",src:"/icon.svg" }
    // ]
    return (<>
    <h1 className="don-cent-title">הסניפים <br/> שלנו <br/> <strong style={{fontSize:"19px"}}>  .לשרותכם תמיד</strong></h1>
        <div className="don-cent">
            {centers?.map((c, i) =>
                <div key={i} className="don-cent-div">
                    <h3>{c.name}</h3>
                    <h4>{c.place}</h4>
                    <p>  {c.phone}  {c.mail}</p>
                    <img src={process.env.PUBLIC_URL+'/img'+c.src} alt="some img" />
                </div>)}
        </div>
    </>)
}