import React from 'react';
import './Button.css'

const STYLE = ['btn--primary','btn-outline']
const SIZES = ['btn--medium','btn--large']

export const Button = ({ children, type, onCLick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]

}