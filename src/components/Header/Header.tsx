import React from "react";
import './style.css';
import Button from "../Button";
import CustomButton from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function navigation() {
        navigate('/register');
    }
    return (
        <div className="header-container">
            <a href="/" className="text-3xl text-bold flex justify-center items-center" ><img src="images/brunel.png" alt="Brunel Logo" /></a>
            <div className="button-container">
                <CustomButton onClick={navigation} varient="secondary">Get Projects</CustomButton>
                <CustomButton onClick={navigation} varient="primary">Onboard Talent</CustomButton>
            </div>
        </div>
    );
}