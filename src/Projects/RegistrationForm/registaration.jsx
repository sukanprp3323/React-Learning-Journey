import { useState } from "react";
import "./reg.css";

export const RegistarationForm = () => {

    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case "firstName": setFirstName(value);
                break;
            case "LastName": setLastName(value);
                break;
            case "email": setEmail(value);
                break;
            case "password": setPassword(value);
                break;
            case "phoneNumber": setPhoneNumber(value);
                break;
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            LastName,
            email,
            password,
            phoneNumber,
        };
        console.log(formData);

    }

    return (<>


        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please Fill in this form to create an Account.</p>

                <label htmlFor="firstName">
                    <p>firstName</p>
                </label>
                <input type="text" placeholder="enter firstName" name="firstName" required value={firstName} onChange={handleInputChange} />

                <label htmlFor="LastName">
                    <p>LastName</p>
                </label>
                <input type="text" placeholder="enter LastName" name="LastName" required value={LastName} onChange={handleInputChange} />

                <label htmlFor="Email">
                    <p>Email</p>
                </label>
                <input type="text" placeholder="enter email" name="email" required value={email} onChange={handleInputChange} />

                <label htmlFor="Password">
                    <p>Password</p>
                </label>
                <input type="password" placeholder="enter Password" name="password" required value={password} onChange={handleInputChange} />

                <label htmlFor="Number">
                    <p>Number</p>
                </label>
                <input type="number" placeholder="enter Mobile Number" name="phoneNumber" required value={phoneNumber} onChange={handleInputChange} />

                <p>
                    By Creating an Account you Agree to our
                    <a href="#" style={{ color: "dodgerblue" }}>
                        Terms & Privacy
                    </a>
                </p>

                <div className="clearfix">
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>

        <section className="summary" style={{ alignItems: "center", marginTop: "30px" }}>
            <p>hello my Name is <span>{firstName} {LastName}</span>
                .My Email address is <span>{email}</span> and myPhone number is <span>{phoneNumber}</span>
            </p>
        </section>

    </>)
}