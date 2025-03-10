import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const [options, setOptions] = useState([
        { id: 1, title:"לתרומות", img: "/truma.jpg", route: "/donatForm" },
        { id: 2, title: "רשימת מוקדי תרומות", img: "/lev.webp", route: "/donCenters" },
        { id: 3, title: "צור קשר", img: "/contact.jpg", route: "/" }
    ]);
    const centers = [
        { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il", src: "/service_10.svg" },
        { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il", src: "/service_11.svg" },
        { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il", src: "/service_25.svg" }
        , { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il", src: "/service_32.svg" }
        , { name: "סניף ארונים", place: "רחביה 8 , מודיעין עילית", phone: "0772002029", mail: "a100.ezer@co.il", src: "/icon.svg" }
    ]

    const navigate = useNavigate();

    const handleClick = (route) => {
        console.log('route', route);
        if (route == "/donCenters")
            navigate(route, { state: { centers } })
        else
            navigate(route)
    }

    return (<>
        <h1 style={{ padding: "3px", position: "relative", top: "3vh", backgroundColor: "#cc1923" }}>עזר מציון | בואו לקחת חלק</h1>
        <div className="op-list">
            {options.map((o, i) =>
                <div key={i} className="op-card" onClick={() => handleClick(o.route)}>
                    <h3>{o.title}</h3>
                    <img src={process.env.PUBLIC_URL + 'img' + o.img} />
                </div>)}
        </div>
        <div style={{ backgroundColor: "white", width: "15vw", position: "relative", top: "20vh" }}>
            <img src={process.env.PUBLIC_URL + '/img/ezer.png'} alt="ezer-logo" style={{ height: "20vh" }} />
        </div>
    </>)
}