import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function ThanksPage() {
    // const data = useLocation().state.data;
    // console.log('data in thanks',data);
    const {name} = useParams()
    const nav = useNavigate();
    return (
        <>
            <div className="thanks-card">
                <img className="logo-ezer" src={process.env.PUBLIC_URL + '/img/ezer.png'} alt="no such img" />
                <div className="thanks">
                    <h1>!{name} תודה</h1>
                    <h2>רצינו להודות לך בשם אלפי המשפחות<br /> שמעכשיו נוכל לסייע להם יותר <br /> בזכות תרומתך הנכבדה</h2>
                </div>
                <h3 onClick={() => nav('/')}> חזרה לעמוד הראשי</h3>
            </div>
        </>
    )
}