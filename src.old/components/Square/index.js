import React from 'react'
import SquarePic from '../Square/SquarePic.png'


function Square() {
    return (
        <div>
            <p style={{ textAlign: "center", marginTop: "25px", marginBottom: "25px" }}><img alt="Square shape" style={{ width: "30px", height: "30px" }} src={SquarePic} /><img alt="Square shape" src={SquarePic} style={{ width: "30px", height: "30px" }} /><img alt="Square shape" src={SquarePic} style={{ width: "30px", height: "30px" }} /></p >
        </div>
    )
}

export default Square