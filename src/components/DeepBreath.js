import React, { Component } from 'react'
import './styles/DeepBreath.css'
import ReactDOM from 'react-dom'

export class DeepBreath extends Component {
    
    render() 
    {
            return ReactDOM.createPortal(
                <div className="fade-out">
                   take a deep breath 
                </div>,
                document.getElementById('breathe-portal'))
    }
}

export default DeepBreath
