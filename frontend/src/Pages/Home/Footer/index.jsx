import { useState } from "react"
import { Input } from "../../../Components/Form"
import './style.css'
import Button from "../../../Components/Button";
import { DATA } from "../../../Config";
import { NavLink } from "react-router-dom";
import { IconFacebook, IconInsta, IconLocation, IconMail, IconPhone, IconRight, IconTwitter, IconYoutube } from "../../../Assets/Icons";


const Footer = () => {

    const [payload, setPayload] = useState({});

    const handleChange = (name, value) => {
        setPayload({...payload, [name]: value})
    }

    return<>
        <div className="footer-section">
            <div className="footer-abs-section"></div>
            <div className="footer-inner-section">
                <div className="footer-cards-section">
                    <span className="footer-logo" >
                        <NavLink to={"/"}>{DATA?.websiteName}</NavLink>
                    </span>
                    <p style={{color: 'white'}}>It helps designers plan whererthy the content will sitcont ent to be written and approved.</p>
                    <div className="footer-social-section">
                        <NavLink to={`/${DATA?.facebook}`}><IconFacebook /></NavLink>
                        <NavLink to={`/${DATA?.instagram}`}><IconInsta /></NavLink>
                        <NavLink to={`/${DATA?.twitter}`}><IconTwitter /></NavLink>
                        <NavLink to={`/${DATA?.youtube}`}><IconYoutube /></NavLink>
                    </div>
                </div>
                <div className="footer-cards-section">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><IconRight /><NavLink to="/">About</NavLink></li>
                        <li><IconRight /><NavLink to="/">Contact</NavLink></li>
                        <li><IconRight /><NavLink to="/">Plan</NavLink></li>
                        <li><IconRight /><NavLink to="/">Home</NavLink></li>
                    </ul>
                </div>
                <div className="footer-cards-section">
                    <h3>Our Services</h3>

                    <ul>
                        <li><IconRight /><NavLink to="/">Balance Body & Mind</NavLink></li>
                        <li><IconRight /><NavLink to="/">Child Nutrition</NavLink></li>
                        <li><IconRight /><NavLink to="/">Fitness Performance</NavLink></li>
                        <li><IconRight /><NavLink to="/">Weight Loss Programs</NavLink></li>
                    </ul>
                </div>
                <div className="footer-cards-section">
                    <h3>Contact Us</h3>

                    <ul>
                        <li><IconLocation /> <p>{DATA?.address}</p></li>
                        <li><IconPhone /> <p>{DATA?.mobile}</p></li>
                        <li><IconMail /> <p>{DATA?.email}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Footer