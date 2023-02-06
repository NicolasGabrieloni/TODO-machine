import React from "react";
import './credits.css'
import { FaGithubSquare } from "react-icons/fa";

function Credits() {
    return (
        <div className="bloqc">
        <p className="credit">Developed by <FaGithubSquare /> <a href="https://github.com/NicolasGabrieloni">Nicolas Gabrieloni</a></p>
        </div>
    );
}

export { Credits }