import React from 'react'
import './Footer.css'
import email from './Images/email.png'
import f from './Images/f.png'
import ig from './Images/ig.png'
import bird from './Images/bird.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={email} alt="" />
                <h4 className="span" style={{ marginLeft: "10px" }}>xyz@abc.com</h4>
            </div>
            <div className="footer-center">
                    <span className="span">Designed by Tech and Design Team</span>
                    <span className="span">SInC@2021</span>
            </div>
            <div className="footer-right">
                <img src={f} alt="" style={{marginLeft: '10px' , width:'20px', height: '20px'}} />
                <img src={bird} alt="" style={{ marginLeft: '10px', width: '25px', height: '25px'}} />
                <img src={ig} alt="" style={{ marginLeft: '10px', width: '25px', height: '25px' }} />
            </div>
        </div>
    )
}

export default Footer
