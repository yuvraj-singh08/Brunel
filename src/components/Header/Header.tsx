import React from "react";
import './style.css';
import Button from "../Button";
import CustomButton from "../Button/Button";

export default function Header() {
    return (
        <div className="header-container">
            <a href="/" className="text-3xl text-bold flex justify-center items-center" >Brunel</a>
            <div className="button-container">
                <a href="/register"><CustomButton varient="secondary">Get Projects</CustomButton></a>
                <CustomButton varient="primary">Onboard Talent</CustomButton>
            </div>
        </div>
    );
}