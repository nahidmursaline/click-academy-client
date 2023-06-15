import React from "react";
import  Sun  from "../../../assets/Sun.svg";
import  Moon from "../../../assets/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <sun />
                <moon />
            </label>
        </div>
    );
};

export default DarkMode;
