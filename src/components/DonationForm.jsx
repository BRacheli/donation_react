import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function DonationForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/thanks/'+data.fName)
    }

    return (
        <>
            <h1 className="donat-title">טופס  <br /> פרטי תרומה <br /> <strong style={{ fontSize: "20px" }}>.  תזכו למצוות</strong></h1>
            <form className="donat-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="שם פרטי" {...register("fName",
                    { required: { value: true, message: "חובה למלא שם פרטי" } })} />
                {errors.fName ? <p style={{ color: "red" }}>{errors.fName.message}</p>
                    : <p style={{ color: "black" }}>לא רואים את זה</p>}
                <input placeholder="שם משפחה" {...register("lName",
                    { required: { value: true, message: "חובה למלא שם משפחה" } })} />
                {errors.lName ? <p style={{ color: "red" }}>{errors.lName.message}</p>
                    : <p style={{ color: "black" }}>לא רואים את זה</p>}
                <input type="number" placeholder="סכום" {...register("sum", {
                    required: { value: true, message: "סכום לתרומה" },
                    min: { value: 1, message: "סכום התרומה אינו תקין - נסה שנית" }
                })} />
                {errors.sum ? <p style={{ color: "red" }}>{errors.sum.message}</p>
                    : <p style={{ color: "black" }}>לא רואים את זה</p>}
                <input type="submit" value="סיום התרומה" />

            </form>
        </>
    )
}