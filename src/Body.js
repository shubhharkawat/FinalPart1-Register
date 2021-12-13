import React from 'react'
import './Body.css'
import capa from './Images/capa.png'
import cloud from './Images/cloud.png'
import rr from './Images/rr.png'
import rl from './Images/rl.png'

function Body() {
    return (
        <div className="body">
            <div className="reg">
                <img src={rl} alt="" style={{height: '100%'}} />
            </div>
            <div className="body-tag">
                <div className="body-tag-top">
                    LOREM IPSUM
                </div>
                <div className="body-tag-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="body-tag-bottom">
                    Register
                </div>
            </div>
            <div className="body-tag">
                <div className="body-tag-top">
                    LOREM IPSUM
                </div>
                <div className="body-tag-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="body-tag-bottom">
                    Register
                </div>
            </div>
            <div className="body-img">
                <img src={capa} alt="" style={{width: '140px', height: '150px'}} />
                <img src={cloud} alt="" style={{ width: '200px', height: '160px'}} />
            </div>
            <div className="reg">
                <img src={rr} alt="" style={{ height: '100%' }} />
            </div>
        </div>
    )
}

export default Body
